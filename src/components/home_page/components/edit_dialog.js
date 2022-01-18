import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React from 'react';
import ProjectAssets from '../../../constants/project_assets';

import classes from './dialog.module.css'
export const EditDialog = ({ isOpen, handleClose, submitedData, arTitle, arDesc }) => {

    const [title, setTitle] = React.useState(`data`);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const [description, setDescription] = React.useState(`data`);



    function submit() {
        handleClose()
        submitedData({
            name: title,
            desc: description,
            color: ProjectAssets.color[activeIndex],
            date: '20 May'
        });
    }

    return (<div>

        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add Note"}
            </DialogTitle>

            <DialogContent>
                <TextField id="standard-basic" label="Title" value={arTitle} variant="standard" onChange={(event) => { setTitle(event.target.value) }} />


            </DialogContent>


            <DialogContent>
                <TextField id="standard-basic" value={arDesc} label="Description" variant="standard" onChange={(event) => { setDescription(event.target.value) }} />
            </DialogContent>
            <DialogContent>
                <div className={classes.dialog}>
                    {ProjectAssets.color.map((e, i) => <Button key={i} onClick={() => setActiveIndex(i)} className={classes.item} style={{ backgroundColor: e, border: 'solid', borderColor: activeIndex === i ? 'black' : 'white' }} ></Button>)}
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={submit} autoFocus>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    </div>)
}
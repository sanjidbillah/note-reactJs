
import React from 'react';
import classes from './home_page.module.css'
import ProjectAssets from '../../constants/project_assets';
import { AddDialog } from './components/add_dialog';
import { Button } from '@mui/material';
export default function HomePage() {


    const [title, setTitle] = React.useState(``);
    const [subtitle, setSubtitle] = React.useState(``);
    const [color, setColor] = React.useState(``);

    const [notes, setNotes] = React.useState([]);
    const [bnotes, setBNotes] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [editIndex, setEditIndex] = React.useState(-1);
    const handleClickOpen = () => {
        setEditIndex(-1);
        setTitle('');
        setSubtitle('');
        setColor(ProjectAssets.color[0]);
        setOpen(true);
    };

    const noteItemHit = (title, desc, colorIndex) => {
        setEditIndex(colorIndex);
        setTitle(title);
        setSubtitle(desc)
        setColor(notes[colorIndex].color)
        setOpen(true);
    };
    const submitedData = (getData) => {
        if (editIndex === -1) {
            setNotes([...notes, getData])
            setBNotes([...notes, getData])
        } else {

            notes[editIndex] = getData;
            setNotes([...notes])
            setBNotes([...notes])

        }

    };
    const deleteItem = (index) => {
        notes.pop(index);
        setNotes([...notes])
        setBNotes([...notes])

    };

    const search = (v) => {

        setNotes([...bnotes.filter(e => e.name.toLowerCase().includes(v.toLowerCase()))])


    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.main}>
            <div className={classes.mobile}>
                <div className={classes.content}>
                    <div className={classes.user} >
                        <h4>
                            Hey BIllah,
                            <br></br>
                            Good morning
                        </h4>
                        <img className={classes.userImg} src={ProjectAssets.userImagePath} alt='user' />
                    </div>
                    <input className={classes.search} placeholder='Search' type="search" id="gsearch" name="gsearch" onChange={(e) => search(e.target.value)} />
                    <div className={classes.tab}>
                        <h3 className={classes.h3}>Notes</h3>
                        <div style={{ height: '2px', width: '55px', backgroundColor: '#2CC2EC' }}></div>
                    </div>
                    {notes.length === 0 ? <h3 className={classes.noitem}>No notes added yet</h3> : <div className={classes.gridView}>{notes.map((e, i) =>
                        <div className={classes.noteItem} key={i} onClick={(t) => {
                            t.stopPropagation();
                            noteItemHit(e.name, e.desc, i);
                        }} style={{ backgroundColor: e.color }}>
                            <h4>{e.name}</h4>
                            <p>{e.desc}</p>
                            <p>{e.date}</p>
                            <Button onClick={(t) => {
                                t.stopPropagation();
                                deleteItem(i)
                            }}><i className="fa fa-trash"></i></Button>

                        </div>

                    )}</div>}

                    <AddDialog {...{ isOpen: open, handleClose, submitedData, arTitle: title, arDesc: subtitle, arColor: color }} />

                    <div className={classes.navArea}>
                        <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                        <button className={classes.add} onClick={handleClickOpen}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

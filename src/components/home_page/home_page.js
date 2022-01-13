
import React from 'react';
import classes from './home_page.module.css'
import ProjectAssets from '../../constants/project_assets';
import { AddDialog } from './components/add_dialog';
export default function HomePage() {

    const data = [

    ];


    const [notes, setNotes] = React.useState(data);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log('clic');
    };
    const submitedData = (v) => {
        console.log(v);
        setNotes([...notes, v])
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
                    <input className={classes.search} placeholder='Search' type="search" id="gsearch" name="gsearch" />
                    <div className={classes.tab}>
                        <h3 className={classes.h3}>Notes</h3>
                        <div style={{ height: '2px', width: '55px', backgroundColor: '#2CC2EC' }}></div>
                    </div>
                    {notes.length === 0 ? <h3 height='100%'>No notes added yet</h3> : <div className={classes.gridView}>{notes.map((e, i) =>
                        <div className={classes.noteItem} key={i} style={{ backgroundColor: e.color }}>
                            <h4>{e.name}</h4>
                            <p>{e.desc}</p>
                            <p>{e.date}</p>
                        </div>

                    )}</div>}

                    <AddDialog {...{ isOpen: open, handleClose, submitedData }} />

                    <div className={classes.navArea}>
                        <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                        <button className={classes.add} onClick={handleClickOpen}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

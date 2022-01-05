/* eslint-disable react/jsx-no-undef */


import { Component } from 'react';
import classes from './home_page.module.css'

export class HomePage extends Component {
    state = {
        notes: [{
            name: "Health",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            color: '#E9F5FC',
            date: '20 May'
        },
        {
            name: "Food",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            color: "#FFF5E1",
            date: '20 May'
        },

        {
            name: "Food",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            color: "#FFE9F3",
            date: '20 May'
        },

        ]
    };

    addItem() {
        let newNote = this.state.notes;
        newNote.push(this.state.notes[0])
        this.setState(
            {
                notes: newNote
            }
        )
    }


    render() {
        console.log(this.state);
        return <div className={classes.main}>
            <div className={classes.mobile}>
                <div className={classes.content}>
                    <div className={classes.user} >
                        <h4>
                            Hey BIllah,
                            <br></br>
                            Good morning
                        </h4>
                        <img className={classes.userImg} onClick={this.addItem.bind(this)} src="https://avatars.githubusercontent.com/u/54928529?v=4" alt='user' ></img>
                    </div>
                    <input className={classes.search} placeholder='Search' type="search" id="gsearch" name="gsearch" ></input>
                    <div className={classes.tab}>
                        <h3 className={classes.h3}>Notes</h3>
                        <div style={{ height: '2px', width: '55px', backgroundColor: '#2CC2EC' }}></div>
                    </div>
                    <div className={classes.gridView}>{this.state.notes.map((e, i) =>
                        <div className={classes.noteItem} key={i} style={{ backgroundColor: e.color }}>
                            <h4>{e.name}</h4>
                            <p>{e.desc}</p>
                            <p>{e.date}</p>
                        </div>

                    )}</div>

                    <div className={classes.navArea}>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

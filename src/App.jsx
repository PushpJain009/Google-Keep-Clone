import React, { useState } from "react";
import logo from "./Image/keep-logo.png"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddIcon from '@mui/icons-material/Add';
import Card from "./Card";
import "./App.css"
// import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SidebarMenuIcon from "./SidebarMenuIcon";


const App = () => {

    // add new text area for heading start
    const [newtextarea, setTextArea] = useState(false);
    const textAreaInput = () => {
        setTextArea(true);
    }
    // add new text area for heading end

    // ADDING TEXT
    const [Para, setPara] = useState("");
    const contentText = (event) => {
        setPara(event.target.value);
    }

    // ADDING HEADING
    const headingText = (event) => {
        setHeading(event.target.value);
    }
    const [Heading, setHeading] = useState("");
    const [newHeading, setnewHeading] = useState([]);

    // SEARCH NOTES
    const [searchQuery, setSearchQuery] = useState("");
    const searchNotes = (event) => {
        setSearchQuery(event.target.value);
    };

    // ADD NOTE
    const addNote = () => {
        if (Para.length !== 0) {
            setnewHeading((prevValueHead) => {
                return [...prevValueHead, [Heading, Para]];
            });
            setHeading("");
            setPara("");
        } else {
            // alert("First write something...")
        }
    }

    // DELETE NOTE
    const deleteNote = (id) => {
        setnewHeading((prevValueHead) => {
            return prevValueHead.filter((arrElem, index) => {
                return index !== id;
            })
        })
    };


    return (
        <>
            {/*  Header START */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <Sidebar />
                <div className="collapse navbar-collapse" style={{ marginLeft: (40) }}>
                    <img src={logo} alt="logo" width={40} className="img-logo mx-3" ></img>
                    <a className="navbar-brand" href="index">Keep</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" placeholder=" Search Notes" aria-label="Search" size={110} type="text" value={searchQuery} onChange={searchNotes}
                        />
                        {/* <button className="btn-search" type="submit"><SearchIcon /></button> */}
                    </form>
                </div>
            </nav>
            {/*  Header END */}

            {/* SIDEBAR MENU ICON START */}
            <SidebarMenuIcon />
            {/* SIDEBAR MENU ICON END */}

            {/* ADD NOTE START */}
            <div className="note-section">
                <div className="add-note">
                    <div onClick={textAreaInput}>
                        <input className="new-textarea" placeholder="Title" onChange={headingText} style={{ display: newtextarea ? "list-item" : "none" }} size={50} value={Heading} />
                        <textarea className="write-note" value={Para} onChange={contentText} type="text" placeholder="Take a note..." />
                        <button className="add-btn" onClick={addNote}><AddIcon /></button>
                    </div>
                </div>
            </div>
            {/* ADD NOTE END */}

            {/* NOTES AREA START */}
            <div className="note-area">
                <div className="container text-center mt-5">
                    <div className="row">
                        {newHeading
                            .filter((headval) => {
                                const title = headval[0].toLowerCase();
                                const content = headval[1].toLowerCase();
                                return (
                                    title.includes(searchQuery.toLowerCase()) ||
                                    content.includes(searchQuery.toLowerCase())
                                );
                            })
                            .map((headval, index) => {
                                return (
                                    <Card
                                        key={index}
                                        id={index}
                                        headtext={headval[0]}
                                        contenttxt={headval[1]}
                                        onSelect={deleteNote}
                                    />
                                );
                            })}
                    </div>
                </div>

                {/* NO NOTE AREA START */}
                <div className="no-note" style={{ display: newHeading.length === 0 ? "block" : "none" }}>
                    <div className="no-note-icon">
                        <LightbulbOutlinedIcon sx={{ fontSize: 120 }} />
                    </div>
                    <div>
                        <h5>Notes you add appear here</h5>
                    </div>
                </div>
                {/* NO NOTE AREA END */}
            </div>
            {/* NOTES AREA END */}

            <br/>
        </>
    );
};

export default App;

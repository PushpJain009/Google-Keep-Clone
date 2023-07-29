import React from 'react'
import "./Sidebar.css"
import Footer from "./Footer";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Sidebar = () => {
    return (
        <>
            <div class="header">
                <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
                <label for="openSidebarMenu" class="sidebarIconToggle">
                    <div class="spinner diagonal part-1"></div>
                    <div class="spinner horizontal"></div>
                    <div class="spinner diagonal part-2"></div>
                </label>
                <div id="sidebarMenu">
                    <ul class="sidebarMenuInner">
                        <li className="lightbulb-expand" style={{ marginTop: (20) }}><span><LightbulbOutlinedIcon /></span>Note</li>
                        <li><span><NotificationsOutlinedIcon /></span>Reminder</li>
                        <li><span><CreateOutlinedIcon /></span>Edit Label</li>
                        <li><span><ArchiveOutlinedIcon /></span>Archive</li>
                        <li><span><DeleteOutlinedIcon /></span>Trash</li>
                    </ul>

                    {/* FOOTER START */}
                    <Footer />
                    {/* FOOTER END */}
                </div>
                {/* <div id='center' class="main center">
                    <div class="mainInner">
                        <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                    </div>
                    <div class="mainInner">
                        <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                    </div>
                    <div class="mainInner">
                        <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                    </div>
                </div> */}


            </div>
        </>
    );
}

export default Sidebar;
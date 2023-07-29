import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const SidebarMenuIcon = () => {
    return (
        <>
            <ul class="sidebarMenuInnerIcon">
                <li className='lightbulb' style={{ marginTop: (20) }}><LightbulbOutlinedIcon /></li>
                <li><NotificationsOutlinedIcon /></li>
                <li><CreateOutlinedIcon /></li>
                <li><ArchiveOutlinedIcon /></li>
                <li><DeleteOutlinedIcon /></li>
            </ul>
        </>
    )
}

export default SidebarMenuIcon;
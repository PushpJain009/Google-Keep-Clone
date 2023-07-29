import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Card = (props) => {

    // for add and delete button start
    const [deleteIcon, setDeleteIcon] = useState(false);
    const cardSingleClick = () => {
        setDeleteIcon(true);
    }
    const cardDoubleClick = () => {
        setDeleteIcon(false);
    }
    // for add and delete button end


    return (
        <>
            <div className="col-4">
                <div className="card" onMouseEnter={cardSingleClick} onMouseLeave={cardDoubleClick}>
                    <div className="card-body" >
                        <h5 className="card-title">{props.headtext}</h5>
                        <p className="card-text">{props.contenttxt}</p>
                        <button style={{ display: deleteIcon ? "inline" : "none" }} className="btn-delIcon" onClick={() => { props.onSelect(props.id); }}><DeleteIcon className="delIcon" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
import React from 'react';

function Comment({title, Icon}) {
    return (
        <div className="other-info">  
            <span className="recommend">
                {title}  
                <Icon style={{fontWeight:"500", fontSize:"17px",position:"absolute",top:"2px",right:"-20px"}}/> 
            </span>
        </div> 
    );
}

export default Comment;
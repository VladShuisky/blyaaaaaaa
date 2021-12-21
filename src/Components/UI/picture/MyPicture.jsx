import React from "react";
import classes from './MyPicture.model.css';
import imageSrc from './1200px-React-icon.svg.png';

const MyPicture = (props ) => {
    return(
        <img {...props} className={classes.myPicture} src={imageSrc}>
        
        </img>
    )
}

export default MyPicture;
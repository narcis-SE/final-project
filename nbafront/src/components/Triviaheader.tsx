import React, {useEffect, useState, FormEvent} from 'react';
import "./triviaheader.css"


function Header(){
    let headPicture = "https://www.freewebheaders.com/wp-content/gallery/basketball/basketball-rims-header.jpg"
    const [picture, setPicture] = useState
    ("https://media.istockphoto.com/photos/basketball-player-makes-slam-dunk-picture-id539208441?k=20&m=539208441&s=612x612&w=0&h=vwkRKbqLc35zfA5DVI_h58-a7jN9_ixbcfyKS4hfuUM=");

    return(
        <div className="headImg">
            <div className="holderDiv">
                <div className="column1">
                    <div className="topInnerDiv">NBA-Galaxy.com</div>
                    <div className="bottomInnerDiv"></div>
                </div>
                <div className="column2">
                    <div className="midTopDiv"> <img className="middlePicture"src={picture} alt="Italian Trulli"></img></div>
                    <div className="midBottomDiv"> NBA Trivia Game </div>
                </div>
                <div className="column3">
                    <div className="topInnerDiv2">
                        <div className="navLink">
                            NBA News Updated Daily!
                        </div>
                        <div className="navLink">
                            Search NBA Facts
                        </div>
                    </div>
                    <div className="bottomInnerDiv"></div>
                </div>
            </div>
        </div>

            
    )
}

export default Header;
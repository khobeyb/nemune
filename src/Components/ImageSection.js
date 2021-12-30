import React from 'react'
import about from '../img/about.png'
function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""></img>
            </div>
            <div className="about-info">
                <h4> I am <span>Khobeyb</span></h4>
                <p className="about-text">
                    Deserunt id do commodo Lorem incididunt id commodo minim.
                    Nostrud laborum proident in nisi dolore excepteur excepteur 
                  
                </p>
            <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                    <p>:Seyed Khobeyb mohamadian</p>
                        <p>:31</p>
                        <p>:Kurdish</p>
                        <p>:Kurdish, English, Persian</p>
                        <p>:sna, farah street</p>
                        <p>:Iran</p>
                    </div>
            </div>
            <button className="btn">
                Download CV
            </button>
        </div>
    </div>
    )
}

export default ImageSection;

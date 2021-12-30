import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import emailme from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div >
            <div className="title">
            <Tittle title={'Contact Page'} span={'Contact Page'}/>

            </div>  
            <div className="ContactPage">
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104211.37288191503!2d47.077654892239465!3d35.290935883224364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff997e23b7813db%3A0x8893e51d9ac3ac55!2z2LPZhtmG2K_YrNiMINin2LPYqtin2YYg2qnYsdiv2LPYqtin2YbYjCDYp9uM2LHYp9mG!5e0!3m2!1sfa!2snl!4v1640451160425!5m2!1sfa!2snl" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={"+989187566656"} text2={"+98931490611"} title={'Phone'}/>
                <ContactItem icon={emailme} text1={"khobi@gmail.com"} text2={"khobeyb@gmail.com"} title={'Email'}/>
                <ContactItem icon={location} text1={"Iran Kurdistan"} text2={"sanandaj"} title={'Address'}/>
            </div>
        </div>  
        </div>
        
    )
}

export default ContactPage;

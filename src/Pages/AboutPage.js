import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import gamedev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg'



function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
                  <SkillsSection skill={'javascript'} progress={'60%'} width={'60%'}/>
                  <SkillsSection skill={'PHP'} progress={'70%'} width={'70%'}/>
                  <SkillsSection skill={'React'} progress={'90%'} width={'90%'}/>
                  <SkillsSection skill={'Node.js'} progress={'50%'} width={'50%'}/>
                  <SkillsSection skill={'HTML'} progress={'30%'} width={'30%'}/>
                  <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'}/>
                  <SkillsSection skill={'Python'} progress={'65%'} width={'65%'}/>
                  <SkillsSection skill={'JAVA'} progress={'80%'} width={'80%'}/>
                  <SkillsSection skill={'Typescript'} progress={'70%'} width={'70%'}/>
                  <SkillsSection skill={'UI & UX'} progress={'70%'} width={'70%'}/>
            </div>
            <Tittle title={'Services'} span={'Services'}/>
            <div className="services-container">
            
                <ServicesSection image={design} title={'Web Design'} 
                text={'Reprehenderit officia officia dolor elit officia qui aliqua anim cillum in aute.'}
                />
                 <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Reprehenderit officia officia dolor elit officia qui aliqua anim cillum in aute.'}
                />
                 <ServicesSection image={gamedev} title={'Game Developer'} 
                text={'Reprehenderit officia officia dolor elit officia qui aliqua anim cillum in aute.'}
                />
            </div>
        </div>
    )
}

export default AboutPage

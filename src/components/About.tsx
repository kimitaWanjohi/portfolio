import React from 'react';

import HeroSection from './About/AboutHero';
import Experience from './About/Experience';
import Skills from './About/Skills';
import GithubHeat from './About/GithubHeat';
import Education from './About/Education';

const About: React.FC = () => {
    
    return (
        <>
            <HeroSection />
            <Experience />
            <Education />
            <Skills />
            <GithubHeat />
        </>
    )
}

export default About
import React from 'react';

import HeroSection from './About/AboutHero';
import Experience from './About/Experience';
import Skills from './About/Skills';
import GithubHeat from './About/GithubHeat';

const About: React.FC = () => {
    
    return (
        <>
            <HeroSection />
            <Experience />
            <Skills />
            <GithubHeat />
        </>
    )
}

export default About
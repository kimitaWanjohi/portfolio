import React from 'react';

import HeroSection from './About/AboutHero';
import Skills from './About/Skills';
import GithubHeat from './About/GithubHeat';

const About: React.FC = () => {
    
    return (
        <>
            <HeroSection />
            <Skills />
            <GithubHeat />
        </>
    )
}

export default About
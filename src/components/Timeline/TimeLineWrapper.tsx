import React from 'react';
import TimeLine from './Timeline';


const TimeLineWrapper: React.FC = () => {

    const getTimelinePosition = ((): "left" | "right" | "alternate" => {
        if (window.innerWidth < 600) {
            return 'right';
        } else {
            return 'alternate';
        }
    })();

    return (
        <>
            <TimeLine position={getTimelinePosition} />
        </>
    )
};

export default TimeLineWrapper;
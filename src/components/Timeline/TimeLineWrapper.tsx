import React from 'react';
import TimeLine from './Timeline';


const TimeLineWrapper: React.FC = () => {

    const getTimelinePosition = ((): any => {
        if (window.innerWidth < 600) {
            return 'left';
        } else {
            return 'alternate';
        }
    })();

    return (
        <>
            <div>{getTimelinePosition}</div>
            <TimeLine position={getTimelinePosition} />
        </>
    )
};

export default TimeLineWrapper;
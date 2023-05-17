import './WorkCardStyles.css';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

import React from 'react';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>PROJECTS</h1>
        <div className='project-container'>
            {WorkCardData.map((value,ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    source={value.source}
                    />
                )
            })}

        </div>
    </div>
  )
}

export default Work
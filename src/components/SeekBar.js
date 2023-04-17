import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai'

const CustomSeekBar = () => {
  const markings = [];
  for (let i = 0; i <= 60; i++) {
    markings.push(
      <div className={i % 10 === 0 ? "marking big" : "marking small"} key={i}>
        {i % 10 === 0 ? i : null}
      </div>
    );
  }

  return (
    <div>
    <div className="custom-seek-bar">
      {markings}
    </div>
    <button className='add-media'><span style={{marginRight:'30px'}}><AiOutlinePlus/></span>Add media to this project</button>
    </div>
  );
};

export default CustomSeekBar;

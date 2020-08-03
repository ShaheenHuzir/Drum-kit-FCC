import React, { useState } from 'react';
import VolumeSlider from '../volumeSlider/volumeSlider';
import tracks from '../../data.js';
import Drumpad from '../drumpad/drumpad.js';
import Display from '../display/display.js';
import './drumkit.css';

function Drumkit(props) {
  const [volumeLevel, volumeSetter] = useState(0.5);
  const [look, setLook] = useState(true);
  const [soundId, setsId] = useState('');

  let setsLook = () => {
    setLook(true);
  };

  let resetsLook = () => {
    setLook(false);
  };

  let setVolume = (volume) => {
    volumeSetter(volume);
  };

  let setId = (name) => {
    setsId(name);
  };

  return (
    <div className='kit'>
      <div id='drum-machine' className='drumpad_container'>
        {!!tracks &&
          tracks.length > 0 &&
          tracks.map((track) => {
            return (
              <Drumpad
                sound={track.clip}
                soundName={track.clipName}
                soundCode={track.code}
                volume={volumeLevel}
                looks={look}
              />
            );
          })}
      </div>
      <div className='volumeSlider'>
        <h3>Volume</h3>
        <VolumeSlider setsVolume={setVolume} />
      </div>
      <div id='display'>
        <Display
          volumeDisplay={volumeLevel}
          keyPlayed={soundId}
          reLooks={resetsLook}
          looks={look}
        />
      </div>
    </div>
  );
}

export default Drumkit;

import React, { useEffect, useState } from 'react';
import './drumpad.css';
import classNames from 'classnames';

function Drumpad(props) {
  let { setId, setLooks, soundName, soundCode, sound, volumes } = props;

  let audio = new Audio(sound);
  audio.volume = volumes;

  const [look, setLook] = useState(false);

  let removeClass = () => {
    setLook(false);
  };

  let afterPlay = (name) => {
    setId(soundName);
    setLooks();
    console.log('afterPlay');
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === soundCode) {
        audio.currentTime = 0;
        setLook(true);
        console.log(audio.volume);
        //afterPlay(soundName);
        audio.play();
      }
    });
  }, [soundCode]);

  let classes = classNames({ ped: look, 'drum-pad': true });
  let audioKey = String.fromCharCode(soundCode);

  return (
    <div>
      <div
        className={('drum-pad', `${classes}`)}
        onClick={() => {
          audio.play();
          audio.currentTime = 0;
          setLook(true);
          //setLooks();
        }}
        onAnimationEnd={removeClass}
        id={soundName}
      >
        {audioKey}
        <audio id={audioKey} className='clip' />
      </div>
    </div>
  );
}

export default Drumpad;

import React, { useEffect, useState } from 'react';
import './drumpad.css';
import classNames from 'classnames';

function Drumpad(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     look: false,
  //   };
  //   this.audio = new Audio(this.props.sound);
  //   this.volume = this.props.volume;
  //   this.name = this.props.soundName;
  // }

  let { looks, soundName, soundCode, sound, volume } = props;

  let audio = new Audio(sound);

  const [look, setLook] = useState(true);

  // let playAudio = (audio) => {
  //   audio.play();
  //   audio.currentTime = 0;
  //   props.setsId(soundName);

  //   audio.volume = volume;
  //   setLook(true);
  //   props.setsLooks();
  //

  let removeClass = () => {
    setLook(false);
  };

  console.log(audio.ended);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === soundCode) {
        audio.play();
      }
    });
  }, [soundCode]);

  let classes = classNames({ ped: looks, 'drum-pad': true });
  let audioKey = String.fromCharCode(soundCode);
  return (
    <div>
      <div
        className={('drum-pad', `${classes}`)}
        onClick={() => audio.play()}
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

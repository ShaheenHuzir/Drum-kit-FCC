import React from 'react';
import './drumpad.css';
import classNames from 'classnames';

class Drumpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      look: false,
    };
    this.audio = new Audio(this.props.sound);
    this.volume = this.props.volume;
    this.name = this.props.soundName;
  }

  playAudio = () => {
    this.audio.currentTime = 0;
    this.props.setsId(this.name);
    this.audio.play();
    this.audio.volume = this.volume;
    this.setState({
      look: true,
    });
    this.props.setsLooks();
  };

  removeClass = () => {
    this.setState({
      look: false,
    });
  };

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === this.props.soundCode) {
        this.playAudio();
      }
    });
  }

  render() {
    let { soundName, soundCode } = this.props;
    let classes = classNames({ ped: this.state.look, 'drum-pad': true });
    let audioKey = String.fromCharCode(soundCode);
    return (
      <div>
        <div
          className={('drum-pad', `${classes}`)}
          onClick={this.playAudio}
          onAnimationEnd={this.removeClass}
          id={soundName}
        >
          {audioKey}
          <audio src={this.audio} id={audioKey} className='clip' />
        </div>
      </div>
    );
  }
}

export default Drumpad;

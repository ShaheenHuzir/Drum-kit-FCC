import React from 'react';
import VolumeSlider from '../volumeSlider/volumeSlider';
import tracks from '../../data.js';
import Drumpad from '../drumpad/drumpad.js';
import Display from '../display/display.js';
import './drumkit.css';

class Drumkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeLevel: 0.5,
      soundId: '',
      look: true,
    };
  }

  setLook = () => {
    this.setState({
      look: true,
    });
  };

  resetLook = () => {
    this.setState({
      look: false,
    });
    console.log('fuck you');
  };

  setVolume = (volume) => {
    this.setState({
      volumeLevel: volume,
    });
  };

  setId = (name) => {
    this.setState({
      soundId: name,
    });
  };

  render() {
    let { volumeLevel, soundId } = this.state;
    console.log('look is', this.state.look);
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
                  looks={this.state.look}
                  setsId={this.setId}
                  setsLooks={this.setLook}
                />
              );
            })}
        </div>
        <div className='volumeSlider'>
          <h3>Volume</h3>
          <VolumeSlider setsVolume={this.setVolume} />
        </div>
        <div id='display'>
          <Display
            volumeDisplay={volumeLevel}
            looks={this.state.look}
            reLooks={this.resetLook}
            keyPlayed={soundId}
          />
        </div>
      </div>
    );
  }
}

export default Drumkit;

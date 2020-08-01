import React, { useReducer } from 'react';
import classNames from 'classnames';
import './display.css';

const initState = { look: true };

function displayReducer(state, action) {
  switch (action.type) {
    case 'END':
      return { look: false };
    case 'RESET':
      return { look: true };
    default:
      return state;
  }
}

function Display(props) {
  const [state, dispatch] = useReducer(displayReducer, initState);

  let keyClass = classNames({ playing: true, played: props.looks });
  let { volumeDisplay, keyPlayed } = props;

  console.log(props.looks);

  return (
    <div className='display_container'>
      <div className='volume_display'>
        <span>
          <p>Volume:</p>
        </span>
        <p>{volumeDisplay !== 0 ? `${volumeDisplay * 100}%` : 'Muted!!'}</p>
      </div>
      <div className='key_display'>
        <p className={`${keyClass}`} onAnimationEnd={() => props.reLooks()}>
          {keyPlayed}
        </p>
      </div>
    </div>
  );
}

export default Display;

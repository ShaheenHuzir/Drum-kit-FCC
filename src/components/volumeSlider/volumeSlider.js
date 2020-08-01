import React from 'react';

function VolumeSlider(props) {
  let { setsVolume } = props;
  return (
    <div>
      <input
        type='range'
        min='0'
        max='100'
        onChange={(e) => {
          let value = Math.floor((e.target.value / 1000) * 100) / 10;
          setsVolume(value);
        }}
      />
    </div>
  );
}

export default VolumeSlider;

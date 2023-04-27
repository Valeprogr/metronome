import React from 'react';
import "./metronome.css"

const Metronome = () => {
    let bmp = 100;
    let play = false;

    return (
        <div className='metronome'>
            <div className='bpm-slider'>
                <div>{bmp} BPM</div>
                <input type='range' min="60" max="260" value={bmp} />
            </div>
            <button>{play ? 'Stop' : 'Start'}</button>
        </div>
    );
}

export default Metronome;

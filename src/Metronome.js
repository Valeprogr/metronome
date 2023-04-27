import React,{useState} from 'react';
import "./metronome.css";
import click1 from "./click1.wav";

let timer = null;
const Metronome = () => {

    const [play, setPlay] = useState(false);
    const [bpm, setBpm] = useState(100);


    const handleBpmChange = (event) => {
        const bpm = event.target.value;
        setBpm(bpm);

        if (play) {
            // Stop the old timer and start a new one
            clearInterval(timer);
            timer = setInterval(playClick, (60 / bpm) * 1000);
         
            // Set the new BPM
            setBpm(bpm);
          } else {
            // Otherwise just update the BPM
            setBpm(bpm);
          }
    }
    //Audio File in a const
    const audioClick1 = new Audio(click1);
    //Function PlayAudio
    const playClick = () => {
        audioClick1.play();
     };
    const startStop = () => {
        if (play) {
            //Stop timer
            clearInterval(timer);
            setPlay(false);
        } else {
            //Start a timer with the current BPM
            timer = setInterval(playClick, (60 / bpm) * 1000);
            setPlay(true);
            playClick();
        }
        audioClick1.play();
    }


    return (
        <div className='metronome'>
            <div className='bpm-slider'>
                <div>{bpm} BPM</div>
                <input
                    type='range'
                    min="60"
                    max="240"
                    value={bpm}
                onChange={handleBpmChange}/>
            </div>
            <button onClick={startStop}>{play ? 'Stop' : 'Start'}</button>
        </div>
    );
}

export default Metronome;

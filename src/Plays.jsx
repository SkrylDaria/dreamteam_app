import React from 'react';
//import Dream from './Dream';

//import Dream from './Dream';
//import Dream from './Dream';
import './styles/App.css'
const Plays = (props) => {

//const [message, setMessage] = useState('');
  return (
    <div className='players'>
        <div className='riflers'><img src={props.url} alt="display" width="200px" height="216px" /> </div>
        <p><strong> {props.id}</strong> </p>
        <p> {(props.chosen || props.all) ?  <button disabled>Добавить</button> : <button onClick={() => [props.addToDream(props.id), props.changeState()]}>Добавить</button>}  </p>
    </div>
  )
};

export default Plays;
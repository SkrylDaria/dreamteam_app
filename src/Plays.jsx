import React from 'react';
//import Dream from './Dream';


//import Dream from './Dream';
//import Dream from './Dream';
import './styles/App.css'
const Plays = (props) => {

//const [message, setMessage] = useState('');
  return (
    <div className='players'>
      <div class='blog'>
        <img src={props.url} alt="display" width="200px" height="216px"/> 
        <div class="text">
            <p>Rating 2.0: {props.rat2}</p>
            <p>KPR: {props.kpr}</p>
            <p>Headshots: {props.heads}</p>
        </div>
      </div>
      <div><strong> {props.id}</strong> </div>
      <p> {(props.chosen || props.all) ?  <button disabled>Добавить</button> : <button onClick={() => [props.addToDream(props.id), props.changeState()]}>Добавить</button>}  </p>
    </div>
  )
};

export default Plays;

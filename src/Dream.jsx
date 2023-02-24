import React from 'react';
import './styles/App.css'
const Dream = (props) => {
return (
  <div className='players'>
      <div className='dreams'><img src={props.url} alt="display" width="200px" height="216px" /> </div>
      <p><strong> {props.id}</strong> </p>
      <p><button onClick={() => props.removeItem(props.id)} 
                 key={props.id}>Убрать</button> </p>
  </div>
)
};

export default Dream;

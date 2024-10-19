import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [color, setColor] = useState('white');

  function changeColor(col) {
    setColor(col);
  }

  return (
    <div className='min-vh-100 text-white d-flex align-items-end' style={{ backgroundColor: color }}>
      <div className='w-100 d-flex justify-content-evenly flex-wrap p-3'>
        <button className='btn btn-primary text-light' style={{width: '100px'}} onClick={() => changeColor('blue')}>Blue</button>
        <button className='btn btn-success text-light' style={{width: '100px'}} onClick={() => changeColor('green')}>Green</button>
        <button className='btn btn-warning text-light' style={{width: '100px'}} onClick={() => changeColor('yellow')}>Yellow</button>
        <button className='btn btn-dark text-light' style={{width: '100px'}} onClick={() => changeColor('black')}>Black</button>
        <button className='btn btn-secondary text-light' style={{width: '100px'}} onClick={() => changeColor('grey')}>Grey</button>
        <button className='btn btn-info text-light' style={{width: '100px'}} onClick={() => changeColor('cyan')}>Cyan</button>
        <button className='btn btn-danger text-light' style={{width: '100px'}} onClick={() => changeColor('red')}>Red</button>
        <button className='btn btn-light text-dark' style={{width: '100px'}} onClick={() => changeColor('white')}>white</button>
      </div>
    </div>
  );
}

export default App;

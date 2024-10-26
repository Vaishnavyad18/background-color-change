
import React, { useState } from 'react';
import './App.css';

const colors = [
  { name: 'Red', code: '#FF5733' },
  { name: 'Green', code: '#33FF57' },
  { name: 'Blue', code: '#17CEEB' },
  { name: 'Yellow', code: '#F1C40F' },
  { name: 'Brown', code: '#964B00' },
  
];

function App() {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  return (
    
        
    <div className='container' style={{ height: '90vh', backgroundColor: bgColor, display: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    <br /> <br /> <br /> <br /> <br /> <br /> <h1 className='title' style={{color: '#000F'}}>Background Color Change <br />  </h1> 
        {colors.map((color) => ( 
        <button
          key={color.code}
          onClick={() => setBgColor(color.code)}
          style={{
            backgroundColor: color.code,
            color: '#FFFFFF',
            padding: '10px',
            margin: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '10px',
            
          }}
        >
          {color.name}
        </button>
      ))}
    </div>
    
  );
}

export default App;
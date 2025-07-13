// import React, { useEffect, useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  // Declared Variable for API Code(start)
  // const [message, setMsg] = useState('');
  // Declared Variable for API Code(end)

  //API Calling Code(start)
  // useEffect(() => {
  //   fetch('/api/hello')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMsg(data.fromRos.message);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  //API Calling Code(end)

  return (
    // result displaying Code
    // <div className="App">
    //   <h1>ROS2 응답:</h1>
    //   <p>{message}</p>
    // </div>
        <div className="app-container">
      <div className="camera-grid">
        <div className="camera-view">Camera1</div>
        <div className="camera-view">Camera2</div>
        <div className="camera-view">Camera3</div>
        <div className="camera-view">Camera4</div>
      </div>
      <div className="sidebar">
        <h3>Detected Car</h3>
        <div className="car-box">Car1</div>
        <div className="car-box">Car2</div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMsg(data.fromRos.message);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>ROS2 응답:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

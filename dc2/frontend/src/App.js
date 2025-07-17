import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="camera-grid">
        {/* Camera1 */}
        <div className="camera-view">
          <CameraStream
            src="http://localhost:8090/?action=stream"
            alt="Camera1"
          />
        </div>
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

function CameraStream({ src, alt }) {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);  // force image reload
    }, 10000); // 10초마다 새로고침

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      key={key}
      src={`${src}&dummy=${key}`}
      alt={alt}
      style={{ width: '80%', height: '100%', objectFit: 'cover' }}
    />
  );
}

export default App;

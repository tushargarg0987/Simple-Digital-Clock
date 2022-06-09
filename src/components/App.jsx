import React from "react";

function App(props) {
  const [time, setTime] = React.useState(props.time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString("en-US", {
      hour12: false
    });
    setTime(newTime);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <div className="time">
        <h1>{time}</h1>
        <button onClick={getTime}>Get Time</button>
      </div>
    </div>
  );
}

export default App;

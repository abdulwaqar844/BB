import Image from "next/image";
import React, { useState, useEffect } from "react";
// import './App.css';
// import { ReactComponent as ClockIcon } from './icons/clock.svg';
// import { ReactComponent as CalenderIcon } from './icons/calendar.svg';

function App() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div className="container py-5 text-center watch">
      
  <div>
  <p className="h5 py-2 text-light" >       

{dateState.toLocaleString("en-US", {
  second: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
})}
</p>
<p className="h3 py-3 text-light" >       
{dateState.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
})}
</p>
  </div>
  <div className="text-info">Double Click on Habit Day to mark as completed</div>

    </div>
  );
}

export default App;

import React,{useState} from "react";
import '../App.css'


function Timer(){
  setInterval(up, 1000);
  let time1 = new Date().toLocaleTimeString();

  const [Time, setTime] = useState(time1);

  function up() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  return(
    <h5>{Time}</h5>
  )
}
 
export default Timer;
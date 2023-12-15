import Number from "./Number";
import Button from "./Button";
import { useState } from "react";

function MainContent() {
  const [counter, setCounter] = useState(0)
   



    return (
      <div className="container">
        <Number counter={counter}/>
        <Button counter={counter} setCounter={setCounter}/>
      </div>
    );
  }
  
  export default MainContent;


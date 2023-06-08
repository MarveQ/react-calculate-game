import './App.css'
import CalculateGame from "./CalculateGame";
import CarDistance from "./CarDistance";
import {useState} from "react";

function App() {
    const [result, setResult] = useState();
    const [tank, setTank] = useState();
    const [mpg, setMpg] = useState();
    const [distance, setDistance] = useState();
  return (
    <div>
        <div>
            <CalculateGame/>
        </div>
        <div>
            <CarDistance
                result={result}
                setResult={setResult}
                tank={tank}
                setTank={setTank}
                mpg={mpg}
                setMpg={setMpg}
                distance={distance}
                setDistance={setDistance}
            />
        </div>
    </div>
  );
}

export default App;

import {useEffect, useState} from "react";
import './App.css'

const operands = ['+', '-', '*'];
const random = (min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min) + min);
}
const randomOperand = () => operands[random(0, 3)];
const randomNumber = () => random(0, 15);
const calculate = (n1, n2, operand) => {
  if(operand === '+') return n1 + n2;
  if(operand === '-') return n1 - n2;
  if(operand === '*') return n1 * n2;
}
function App() {
  const [n1,  setN1] = useState( randomNumber());
  const [n2,  setN2] = useState( randomNumber());
  const [operand,  setOperand] = useState(randomOperand());
  const [result, setResult] =  useState(0);
  const [answer, setAnswer] = useState(0);
  const [resolution, setResolution] = useState('');
  const [resultList, setResultList] = useState([]);
  const shake = () => {
    setN1(randomNumber());
    setN2(randomNumber());
    setOperand(randomOperand());
    setResolution('');
    setAnswer(0);
  }
  useEffect(() => {
    setResult(calculate(n1, n2, operand));
  }, [n1, n2, operand, result, answer]);
  const check = () => {
    let status
    if(result === answer){
       status = 'Correct';
    }else {
       status = 'Incorrect';
    }
    setResolution(status);
    setResultList([...resultList, {id: Math.random(), exercise: `${n1} ${operand} ${n2} = ${result}`, answer: status}]);
    console.log(resultList, resolution);
  }
  return (
    <div className='app'>
      {n1} {operand} {n2} = <input type="number" value={answer} onChange={e => setAnswer(+e.target.value)}/>
      <button onClick={check}>Check</button>
      {resolution}
      <hr/>
      <button onClick={shake}>Shake</button>
      <hr/>
      {resultList.map((task) => (
          <p key={task.id} className={task.answer}>{task.exercise} {task.answer}</p>
      ))}
    </div>
  );
}

export default App;

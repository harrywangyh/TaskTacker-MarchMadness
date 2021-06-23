import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import { RoundTwo } from "./components/RoundTwo.js";
import { useState } from "react";
import { Sweet } from "./components/Sweet.js";
import { Elite } from "./components/Elite.js";
import { Final } from "./components/Final.js";
const App = () =>{
  const [showAdd,setShow] = useState(false);
  const [tasks, setTasks] = useState([])
  const [roundTwo, setRoundTwo] = useState([])
  const [sweet, setSweet] = useState([])
  const [elite, setElite] = useState([])
  const [final, setFinal] = useState([])
  const [championship, setChampionship] = useState([])
  const toggleShow = () =>{
    setShow(() => !showAdd)
  }
  const tournament = [tasks, roundTwo, sweet, elite, final, championship];
  const setter = [setTasks, setRoundTwo, setSweet, setElite, setFinal, setChampionship];
  const addTask = (task,round) =>{
    const id = tasks.length+1;
    const used = false;
    const canAdvance = true;
    const newTask = {id, ...task,used,canAdvance};
    const func = setter[round];
    const array = tournament[round];
    func([...array,newTask]);
  }
  const fakeAdd = (id, newTask, round) =>{
    console.log(id);
    const func = setter[round]
    const array = tournament[round];
    func(array.map(
      (task) => task.id === id? 
      {
        id:id,
        text: newTask.text,
        day: newTask.day,
        used: true,
        canAdvance: true
      }: task
    ));
  }
  const emptyTask = (task) =>{
    return (
      {
        id: task.id,
        text: '',
        day: task.day,
        used: false,
        canAdvance: true,
      }
    )
  }
  const deleteTask = (id ,round)=>{
    const func = setter[round]
    const array = tournament[round];
    func(array.map(
      (task) => task.id === id? emptyTask(task): task
    ));
  }
  const elimination = (task, round) => {
    const eliminated = {
      ...task,
      canAdvance: false
    };
    const func = setter[round]
    const id = task.id;
    const array = tournament[round];
    func(array.map(
      (task) => task.id === id? eliminated: task
    ));
  }
  const nextRound = (task,round) =>{
    console.log(round);
    //process new id
    const newTask = {
      id: Math.ceil(task.id/2),
      text: task.text,
      day: '',
      used: true,
      canAdvance: true
    }
    
    const array = tournament[round];
    const func = setter[round];
    

    func(array.map(
      (task) => task.id === newTask.id? newTask: task
    ));
    
  }
  const advance = (id, round)=>{
    

    //check if its competition is filled
    //case 1: id is odd, check next spot
    let offset = 0;
    let array = tasks;
    array = tournament[round];
    if(id%2 != 0){
      offset = 0;
      //if the next spot is not used, warn user
        if(!array[id].used){
          alert('please add a task for the next slot');
          return;
        }
    }else{
      offset = 2;
      if(!array[id-2].used){
        alert('please add a task for the previous slot');
        return;
      }
    }
    //check if it can advance, either if it already did, or competition did
    if(! array[id-1].canAdvance){
      alert('this item cannot advance to the next round');
        return;
    }
    console.log(array[id-offset]);
    elimination(array[id-offset],round);
    elimination(array[id-1],round);
    //change competition to can not advance
    nextRound(array[id-offset],round+1);
  }
  //initializing the bracket
  if(tasks.length <16){
    addTask(
      {
        id: tasks.length+1,
        text: '',
        day: '',
      },0
    )
  }
  if(roundTwo.length <8){
    addTask(
      {
        id: roundTwo.length+1,
        text: '',
        day: '',
      },1
    )
  }
  if(sweet.length <4){
    addTask(
      {
        id: sweet.length+1,
        text: '',
        day: '',
      },2
    )
  }
  if(elite.length <2){
    addTask(
      {
        id: elite.length+1,
        text: '',
        day: '',
      },3
    )
  }
  if(final.length <1){
    addTask(
      {
        id: final.length+1,
        text: '',
        day: '',
      },4
    )
  }
  return (
    
    <div className="container">
      <Header onToggle = {toggleShow} show = {showAdd}/>
      <Tasks tasks = {tasks} onDelete = {deleteTask} onAdd = {fakeAdd} onAdvance = {advance}/>
      <RoundTwo tasks = {roundTwo} onDelete = {deleteTask} onAdd = {fakeAdd} onAdvance = {advance}/>
      <Sweet tasks = {sweet} onDelete = {deleteTask} onAdd = {fakeAdd} onAdvance = {advance}/>
      <Elite tasks = {elite} onDelete = {deleteTask} onAdd = {fakeAdd} onAdvance = {advance}/>
      <Final tasks = {final} onDelete = {deleteTask} onAdd = {fakeAdd} onAdvance = {advance}/>
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [ personState, setPersonsState ] = useState( {
      persons: [
        { name : 'Max', age: 28},
        { name : 'Manu', age: 29},
        { name : 'Stephanie', age: 24}
      ],
      otherState: 'some other value'
    });
  const [otherState,setOtherState] =   useState ({otherState: 'some other value'})
    const switchNameHandler = (newName) => {
      // Don't do this personState.persons[0].name = 'Daniel';
      setPersonsState({persons: [
        { name : newName, age: 28},
        { name : 'Manu', age: 29},
        { name : 'Stephanie', age: 12},   
      ],setOtherState})
    }

    const  nameChangedHandler = (event) =>{
      setPersonsState({persons: [
        { name : 'Max', age: 28},
        { name : event.target.value, age: 29},
        { name : 'Stephanie', age: 12},   
      ],setOtherState})
    }

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <h1> This is new heading</h1>
        <button onClick={() => switchNameHandler('DanielLL')}>Switch Name</button>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age} click={switchNameHandler.bind(this,'DanielDan')}
        changed={nameChangedHandler}> My hobbie: Racing</Person>
        <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>

      </div>
    );
    // return React.createElement('div',null, 'Hi, I\'m React App!!!');
  };

export default App;



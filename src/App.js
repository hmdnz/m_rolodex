import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1 className='h1'>Learn React</h1>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         ></a>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component{
  constructor() {
    super()

    this.state = {
     monsters:[
       {
         name: 'Frankenstein', 
         id: 'asr12'
        },
        {
          name: 'Dracula',
          id: 'asc212'
        },
        {
          name: 'Zombie',
          id: 'adc45'
        }
    ]
    }
  }
  render(){
    return (
      <div className = 'App'>
        {
        this.state.monsters.map(monster => (  
        <h1 key={monster.id}>{monster.name}</h1>

        ))}
      </div>
    
    );


export default App
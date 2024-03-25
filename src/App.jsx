import React,{useState} from 'react'
import Player from './assets/components/Player';

function App() {
  const [edit,setEdit]=useState(false);

  const handleEdit=()=>{
  setEdit(true);
  }
  return <main>
    <div id="game-container">
      <ol id="players">
       <Player name="Player 1" symbol="X"/>
       <Player name="Player 2" symbol="O"/>
      </ol>
    </div>
  </main>


}

export default App

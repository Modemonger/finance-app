import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import { UserProvider } from './Context/UserContext';
import './style.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
              <NavBar />

        </div>
    </UserProvider>
        
  );
}

export default App;

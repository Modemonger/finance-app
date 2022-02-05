import './App.css';
import HeroPage from './components/HeroPage';
import NavBar from './components/NavBar';
import UserPage from './components/UserPage';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <UserProvider>
        <div className="App">
              <UserPage />

        </div>
    </UserProvider>
    
  );
}

export default App;

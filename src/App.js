import './App.css';
import UserPage from './components/UserPage';
import { UserProvider } from './Context/UserContext';

import './style.css';

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

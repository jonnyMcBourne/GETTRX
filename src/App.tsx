import './App.css';
import { ApiProvider } from './context';
import { Home } from './pages/Home';


function App ()
{
  return (
    <div>
      <ApiProvider>
        <Home />
      </ApiProvider>
    </div>
  );
}

export default App;

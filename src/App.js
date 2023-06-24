import BrowserApiHistory from './Components/BrowserApiHistory'
import LocalSessionStorage from './Components/LocalSessionStorage';

import './App.css'; // глобальные стимли тут
import NavigatorClipboard from './Components/NavigatorClipboard';


function App() {

  return (
    <div className="App">
      <BrowserApiHistory />
      <LocalSessionStorage />
      <NavigatorClipboard />
    </div>
  );
}

export default App;

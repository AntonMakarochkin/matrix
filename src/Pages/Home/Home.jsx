import LocalSessionStorage from "../../Components/LocalSessionStorage";
import NavigatorClipboard from "../../Components/NavigatorClipboard";
import BrowserApiHistory from '../../Components/BrowserApiHistory'

function Home() {
  return (
    <div>
      <BrowserApiHistory />
      <LocalSessionStorage />
      <NavigatorClipboard />
    </div>
  );
}

export default Home;

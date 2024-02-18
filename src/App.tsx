import SideBar from "./components/SideBar/SideBar";
import Chat from "./components/Chat/Chat";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Chat />
    </div>
  );
}

export default App;

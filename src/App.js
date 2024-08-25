import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="main-container">
      <SideBar />
      <div className="check">
        <Header />
        <Home/>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import SearchBox from './Components/SearchBox';
import Animation from './Components/Animation';


function App() {
  return (
    <div className="App">
      <Animation/>
      <NavBar />
      <SearchBox />

    </div>
  );
}

export default App;

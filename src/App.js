import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VideoEditor from './components/VideoEditor';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor' element={<VideoEditor/>}/>
      </Routes>
     
      </div>
  );
}

export default App;

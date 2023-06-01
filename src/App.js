import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VideoEditor from './components/VideoEditor';
import ThumbnailCreator from './components/ThumbnailCreator';
import DragNDrop from './components/DragNDrop';
import Scale from './components/Scale';




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor' element={<VideoEditor/>}/>
      </Routes>
      {/* <ThumbnailCreator/> */}
     {/* <DragNDrop/> */}
      {/* <Scale/>  */}
      {/* <DynamicDivWidth/> */}
      </div>
  );
}

export default App;

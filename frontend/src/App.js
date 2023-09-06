import Keyword from './components/Keyword';
import Video from './components/Video';
import './App.css';
import {BrowserRoutes as Router , Route , Routes, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='keyword' element={<Keyword/>}></Route>
            <Route path='video' element={<Video/>}></Route>
            <Route path='*' element={'No Page'}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Keyword/> */}
      {/* <Video/> */}
    </div>
  );
}

export default App;

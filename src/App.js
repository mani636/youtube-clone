import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ChannelDetail,
  Feed,
  SearchFeed,
  VideoDetail,
  NavBar,
} from './components';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed, VideoDetail, NavBar, SearchFeed } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />

          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

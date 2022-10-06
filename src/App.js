import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from './components/Navbar';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import Feed from './components/Feed';
import Ddd from "./components/Ddd";
import './App.css';
function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/ddd/:id' element={<Ddd />} />
        </Routes >
      </Box>
    </Router>
  );
}

export default App;

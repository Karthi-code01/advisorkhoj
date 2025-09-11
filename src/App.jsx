import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Article from './Pages/Article';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
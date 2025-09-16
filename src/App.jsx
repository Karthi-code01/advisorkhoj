import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Article from './Pages/Article';
import FundNews from './Pages/Fund News/FundNews';
import Interviews from './Pages/Interviews/Interviews';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/fundnews" element={<FundNews />} />
        <Route path='/interviews' element={<Interviews />}/>
      </Routes>
    </>
  );
}

export default App;
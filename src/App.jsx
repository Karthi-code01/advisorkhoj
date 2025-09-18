import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Article from './Pages/Article';
import FundNews from './Pages/Fund News/FundNews';
import Interviews from './Pages/Interviews/Interviews';
import InterviewLandingPage from './Pages/Interviews/InterviewLandingPage';
import FundNewsLandingpage from './Pages/Fund News/FundNewsLandingpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/fundnews" element={<FundNews />} />
        <Route path='/fundnews/landing' element={<FundNewsLandingpage />} />
        <Route path='/interviews' element={<Interviews />} />
        <Route path='/interviews/landing' element={<InterviewLandingPage />} />
      </Routes>
    </>
  );
}

export default App;
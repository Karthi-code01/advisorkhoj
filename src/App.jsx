import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Article from './Pages/Articles/Article';
import FundNews from './Pages/Fund News/FundNews';
import Interviews from './Pages/Interviews/Interviews';
import InterviewLandingPage from './Pages/Interviews/InterviewLandingPage';
import FundNewsLandingpage from './Pages/Fund News/FundNewsLandingpage';
import ArticleLandingPage from './Pages/Articles/ArticleLandingPage';
import CrorepatiCalculator from './Pages/Calculators/CrorepatiCalculator';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Article />} />
        <Route path='/articles/Bandan-Mutual-Fund' element={<ArticleLandingPage />} />
        <Route path="/fundnews" element={<FundNews />} />
        <Route path='/fundnews/Bandan-Mutual-Fund' element={<FundNewsLandingpage />} />
        <Route path='/interviews' element={<Interviews />} />
        <Route path='/interviews/-' element={<InterviewLandingPage />} />
        <Route path='/calculators' element={<CrorepatiCalculator />} />
      </Routes>
    </>
  );
}

export default App;
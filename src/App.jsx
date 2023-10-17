import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Surah from './components/pages/Surah';
import DetailSurah from './components/pages/DetailSurah';
import Tafsir from './components/pages/Tafsir';
import Doa from './components/pages/Doa';
import DetailDoa from './components/pages/DetailDoa';
import Love from './components/pages/Love';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Surah/>} />
          <Route path="/doa-harian" element={<Doa/>} />
          <Route path="/doa-harian/:id" element={<DetailDoa/>} />
          <Route path="/surah/:id" element={<DetailSurah/>} />
          <Route path="/tafsir/:id" element={<Tafsir/>} />
          <Route path="/love" element={<Love/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

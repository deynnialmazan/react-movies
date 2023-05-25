import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Detail from './components/Detail';
import New from './components/New';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';
import './style/index.css';

function App() {

  return (
    <>
    <Header />
    <main>
      <Routes>
          <Route exact path="/react-movies"  element= {<Catalog />} />
          <Route exact path="/movie/:selectedMovie" element= {<Detail />} />
          <Route exact path="/new" element= {<New />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;

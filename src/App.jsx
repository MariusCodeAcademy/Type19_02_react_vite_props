import './styles/App.css';
import './styles/responsive.css';
import Header from './components/layout/Header';
import ToursSection from './components/sections/ToursSection';

// const title = <h3 className='card__title'>New York</h3>;

function App() {
  return (
    <div className='App'>
      <Header />
      <ToursSection />
    </div>
  );
}

export default App;

import './styles/App.css';
import './styles/responsive.css';
import Header from './components/layout/Header';
import ToursSection from './components/sections/ToursSection';
import ProjectsSection from './components/sections/ProjectsSection';

// const title = <h3 className='card__title'>New York</h3>;

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <ToursSection /> */}
      <ProjectsSection />
    </div>
  );
}

export default App;

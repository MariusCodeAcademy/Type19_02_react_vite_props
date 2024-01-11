import './styles/App.css';
import './styles/responsive.css';
import Header from './components/layout/Header';
import ToursSection from './components/sections/ToursSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ServicesSection from './components/sections/ServicesSection';

// const title = <h3 className='card__title'>New York</h3>;

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <ToursSection /> */}
      {/* <ProjectsSection /> */}
      <ServicesSection />
    </div>
  );
}

export default App;

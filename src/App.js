import './App.scss';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const projects = [
  {
    target: 'Client project',
    title: 'ARcade Sports',
    description: `Designed the website as well as seperate sections the client requested.
      Created and implemented wordpress theme and components.`,
    role: 'Developer, Designer',
    tech: 'HTML    CSS    Wordpress    PHP',
    link: 'arcadesports.io'
  }
]

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <Footer>Copyright © Designed & coded by André Santos</Footer>
    </div>
  );
}

export default App;

import './App.css';
import  HeroSection from './components/HeroSection';
import ClosetHighlights from './components/ClosetHighlights';
import AppLinks from './components/AppLinks';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ClosetHighlights />
      <AppLinks />
    </div>
  );
}

export default App;

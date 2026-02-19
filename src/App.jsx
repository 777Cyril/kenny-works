import './App.css';
import GrainOverlay from './components/GrainOverlay';
import Envelope from './components/Envelope';
import Letterhead from './components/Letterhead';
import BusinessCard from './components/BusinessCard';

function App() {
  return (
    <>
      <GrainOverlay />
      <div className="desk-surface">
        <Envelope />
        <Letterhead />
        <BusinessCard />
      </div>
    </>
  );
}

export default App;

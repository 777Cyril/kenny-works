import './App.css';
import GrainOverlay from './components/GrainOverlay';
import Envelope from './components/Envelope';
import Letterhead from './components/Letterhead';

function App() {
  return (
    <>
      <GrainOverlay />
      <div className="desk-surface">
        <Envelope />
        <Letterhead />
      </div>
    </>
  );
}

export default App;

import './App.css';
import OrganicShape from './components/OrganicShape';
import BrandVertical from './components/BrandVertical';
import Dossier from './components/Dossier';

function App() {
  return (
    <div className="canvas">
      <OrganicShape />
      <BrandVertical />
      <Dossier />
    </div>
  );
}

export default App;

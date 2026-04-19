import './App.css';
import SiteHeader from './components/SiteHeader';
import Sidebar from './components/Sidebar';
import CaseStudyFeed from './components/CaseStudyFeed';
import GoodsSection from './components/GoodsSection';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <>
      <SiteHeader />
      <main className="grid-container">
        <Sidebar />
        <CaseStudyFeed />
      </main>
      <GoodsSection />
      <SiteFooter />
    </>
  );
}

export default App;

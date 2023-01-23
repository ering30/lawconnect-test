import './App.css';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';
import CardRow from './components/CardRow';
import ThirdRow from './components/ThirdRow';
import FourthRow from './components/FourthRow';

function App() {
  return (
    <div class="main">
      <Navbar />
      <HeroBanner />
      <CardRow />
      <ThirdRow />
      <FourthRow />
      <div class="footerDiv" />
    </div>
  );
}

export default App;

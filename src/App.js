import './App.css';
import { Header, Footer } from './layouts';
import routes from './routes/routes';

function App() {
  return (
    <div className="App">

      <div className='h-[50px] bg-[#004554]'></div>

      <Header />

      {routes()}

      <Footer />

    </div>
  );
}

export default App;

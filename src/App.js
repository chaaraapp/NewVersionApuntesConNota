import { useEffect, useState } from 'react';
import './App.css';
import { AuthPopup, Popup, ScrollReset, RegisterPopup } from './components';
import { Header, Footer } from './layouts';
import routes from './routes/routes';
import { renderPopupLocation } from './assetes/utils/utils';

function App() {

  const [showPopup, setShowPopup] = useState(false);

  const renderRegisterPopup = sessionStorage.getItem('isRenderRegisterPopup');

  useEffect(() => {

    // renderPopupLocation(setShowPopup);
    const isShowBefore = sessionStorage.getItem('isPopupShowedBefore');

    if (!isShowBefore) {

      setShowPopup(true);

    }

    sessionStorage.setItem('isPopupShowedBefore', true);

  }, []);

  return (
    <div className="App">

      <div className='h-[50px] bg-[#004554]'></div>

      {/* <Popup showPopup={showPopup} setShowPopup={setShowPopup} /> */}

      {renderRegisterPopup ? <RegisterPopup /> : null}

      <ScrollReset />

      <Header />

      {routes()}

      <Footer />

    </div>
  );
}

export default App;

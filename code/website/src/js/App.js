import React from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

//import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
//import 'rc-slider/assets/index.css';

import { render, waitForElementToBeRemoved } from '@testing-library/react';

function App() {

  return (
    <div className="App"> 
      <Header />
      
      <Body />
      
      <Footer />
    </div>
  );
}
export default App;

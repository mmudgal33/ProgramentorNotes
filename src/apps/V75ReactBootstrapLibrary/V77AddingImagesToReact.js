import React from 'react'

// move images folder to public folder, so that no need to import them
// instead of height='200' width='200' use only height='200' to manage image better

import Payalrohatgi from './images/payal rohatgi.jpg';
// import TrivveniKaul from './images/Trivveni Kaul.jpg';
// import RuchiSharmaSoniyaChauhan from './images/Ruchi Sharma Soniya Chauhan.png';
// import MeenakshiKandwal from './images/Meenakshi Kandwal.png';

export function V77AddingImagesToReact() {
  return (
    <>
      <div style={{ color: 'blue', backgroundColor: 'pink', padding: '20px', fontSize: '20px', fontWeight: 'bold' }}>Images Demo</div>
      <img src={Payalrohatgi} height='600' alt="not found" /><br /><br />
      <img src={require( './images/Trivveni Kaul.jpg')} height='600' alt="not found" /><br /><br />
      {/* <img src='images/Meenakshi Kandwal.png' height='400' alt="not found" /> */}
      {/* above code can't be used now, new rules doesn't allow import files from outside Source folder */}
      
    </>
  )
}



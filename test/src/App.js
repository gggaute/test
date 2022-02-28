import './App.css';
import ContentContainer from './components/ContentContainer';
import ContentHeader from './components/ContentHeader';
import Navbar from './components/Navbar';
import { useState } from 'react'


function App() {

  return (
    <div className="container">
      <Navbar></Navbar>
      <ContentContainer ></ContentContainer>
    </div>
  );
}

export default App;

import React from 'react';
import {  useNavigate } from 'react-router-dom';
import HeroGearInformation from './heroGearFormInfantry';

function HeroGear() {


  //to navigate back to the main page
  const goBack = useNavigate()
  const handleClickToGoBack = () => goBack('/')
  return (
    <div className="Login">
        <header className="Login-header">
          <div>
            <h1>SOS Hero gears calculation</h1>
            <HeroGearInformation/>
          </div>
          <p>
            <h2>Select your gears</h2>
          </p>
          <button type = 'button' onClick = {handleClickToGoBack}> Go back to main page</button>
        </header>
      </div>
    );
  }
  
  export default HeroGear;
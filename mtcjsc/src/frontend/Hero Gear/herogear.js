import React from 'react';
import {  useNavigate } from 'react-router-dom';
import InfantryHeroGearInformation from './heroGearFormInfantry';
import HunterHeroGearInformation from './heroGearFormHunter'
import RiderHeroGearInformation from './heroGearFormRider'

function HeroGear() {


  //to navigate back to the main page
  const goBack = useNavigate()
  const handleClickToGoBack = () => goBack('/')
  return (
    <div className="Login">
        <header className="Login-header">
          <div>
            <h1>SOS Hero gears calculation</h1>
            <h2>Select your gears</h2>
            <InfantryHeroGearInformation/>
          </div>
          <div>
            <hr>
            <HunterHeroGearInformation/>
            </hr>
          </div>
          <div>
            <hr>
            <RiderHeroGearInformation/>
            </hr>
          </div>
          <button type = 'button' onClick = {handleClickToGoBack}> Go back to main page</button>
        </header>
      </div>
    );
  }
  
  export default HeroGear;
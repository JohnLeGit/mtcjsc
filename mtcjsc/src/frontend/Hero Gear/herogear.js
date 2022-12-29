import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import InfantryHeroGearInformation from './heroGearFormInfantry';
import HunterHeroGearInformation from './heroGearFormHunter'
import RiderHeroGearInformation from './heroGearFormRider'
import { createContext, useContext, useState } from 'react';


export const gearInformationAllTroops = createContext()

function HeroGear() {
  const [gearInfo, setgearInfo] = useState({
    infantryherogear : 0,
    infrantryherodesign: 0,
    hunterherogear: 0,
    hunterherodesign: 0,
    // riderherogear: 0,
    // riderherodesign: 0 
  })

  // const[huntergearinfo, setHuntergearinfo] = useState({
  //   hunterherogear : 0,
  //   hunterherodesign: 0
  // })
  

  
  useEffect(() => {
    console.log('gear', gearInfo)
  },[gearInfo.infantryherogear , gearInfo.hunterherogear,gearInfo])


  //to navigate back to the main page
  const goBack = useNavigate()
  const handleClickToGoBack = () => goBack('/')
  return (
    <gearInformationAllTroops.Provider value = {[gearInfo, setgearInfo]}>
    <div className="Login">
        <header className="Login-header">
          <div>
            <h1>SOS Hero gears calculation</h1>
            <h2>Select your gears</h2>
            <InfantryHeroGearInformation/>
          </div>
          <div>
            --------------------------------------------------------------------------------------------------------------------------------------------
            <HunterHeroGearInformation/>
          </div>
          <div>
          --------------------------------------------------------------------------------------------------------------------------------------------
            <RiderHeroGearInformation/>
          </div>
          <button type = 'button' onClick = {handleClickToGoBack}> Go back to main page</button>
        </header>
      </div>

      <div id = 'Addy'>
        {JSON.stringify(gearInfo)}
      </div>
      </gearInformationAllTroops.Provider>

      

    );
  }
  
  export default HeroGear;
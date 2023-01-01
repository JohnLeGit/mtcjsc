import React, {  useState ,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import InfantryHeroGearInformation from './heroGearFormInfantry';
import HunterHeroGearInformation from './heroGearFormHunter'
// import RiderHeroGearInformation from './heroGearFormRider'
import { createContext, useContext } from 'react';
import OnePage from './heroGearOnePage'

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
  
  // const [infantryGearExtra, setInfantryGearExtra] = useState(0)
  // const [hunterGearExtra, setHunterGearExtra] = useState(0)
  

  useEffect(() => {
    console.log('gear Info' , gearInfo)
  },[gearInfo])
  //chaining useEffect for hero gear
  // useEffect(() => {
  //   console.log('gear extra', 'infantry: ' ,  infantryGearExtra)
  //   console.log('gear', gearInfo)
  //   setInfantryGearExtra(gearInfo.infantryherogear)
  //   // setHunterGearExtra(gearInfo.hunterherogear)
  // },[gearInfo, infantryGearExtra])

  // useEffect(() => {
  //   setHunterGearExtra(gearInfo.hunterherogear)
  //   console.log('hunter ' , hunterGearExtra)
  // },[gearInfo,hunterGearExtra])


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
            <h2>Limit calculation just up to 3 gears</h2>
            {/* <InfantryHeroGearInformation/> */}
            <OnePage/>
          </div>
          <div>
            
            {/* <HunterHeroGearInformation/> */}
          </div>
          <div>
         
            {/* <RiderHeroGearInformation/> */}
          </div>
          <button type = 'button' onClick = {handleClickToGoBack}> Go back to main page</button>
        </header>
      </div>

      {/* // <div id = 'Addy'>
      //   {infantryGearExtra}
      // </div> */}
       </gearInformationAllTroops.Provider>

      

    );
  }
  
  export default HeroGear;
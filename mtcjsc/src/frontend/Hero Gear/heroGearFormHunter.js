import React, { useEffect, useState } from 'react';
// import { gearInformationAllTroops } from "./herogear"
// import {createContext, useContext} from 'react';


const HunterHeroGearFillIn = () => {
    //setState
    const [heroGearObj, setheroGearObj] = useState({
        white1star : {
            heropart : 25,
            hunterGearDesign : 0
        } ,
        white2star : {
            heropart : 25,
            hunterGearDesign : 0
        } ,
        white3star : {
            heropart : 70,
            hunterGearDesign : 0
        } ,
        green1star : {
            heropart : 115,
            hunterGearDesign : 0
        } ,
        green2star : {
            heropart : 225,
            hunterGearDesign : 0
        } ,
        green3star : {
            heropart : 310,
            hunterGearDesign : 0
        } ,
        blue1star : {
            heropart : 330,
            hunterGearDesign : 0
        } ,
        blue2star : {
            heropart : 40,
            hunterGearDesign : 63
        } ,
        blue3star : {
            heropart : 55,
            hunterGearDesign : 87
        } ,
        blue4star : {
            heropart : 1008,
            hunterGearDesign : 35
        } ,
        purple1star : {
            heropart : 1473,
            geardesign : 51
        } ,
        purple2star : {
            heropart : 2248,
            geardesign : 78
        } ,
        purple3star : {
            heropart : 3023,
            geardesign : 105
        } ,
        purple4star : {
            heropart : 3800,
            geardesign : 38
        } ,
        purple5star : {
            heropart : 4331,
            geardesign : 44
        } ,
        orange1star : {
            heropart : 4905,
            geardesign : 50
        } ,
        orange2star : {
            heropart : 5435,
            geardesign : 55
        } ,
        orange3star : {
            heropart : 6010,
            geardesign : 61
        } ,
        orange4star : {
            heropart : 6761,
            geardesign : 68
        } ,
        orange5star : {
            heropart : 13257,
            geardesign : 134
        } 


    })
    const [currentHunterGear, setCurrentHunterGear] = useState(0);
    const [currentChooseHunterGear, setCurrentChooseHunterGear] = useState(0);
    const [hunterIndex, sethunterIndex] = useState(0)
    //--------YOUR GEAR STATE -----------
    const [hunterHeroParts, sethunterHeroParts] = useState(0)
    const [hunterGearDesign, sethunterGearDesigns] = useState(0)
    //--------YOUR GEAR STATE WANT TO UPGRADE TO -----------
    const [hunterSecondhunterIndex, sethunterSecondhunterIndex] = useState(0)
    const [hunterheropartwanttoupgrade, sethunterheropartwanttoupgrade] = useState(0)
    const [hunterhunterGearDesignwanttoupgrade, sethunterhunterGearDesignwanttoupgrade] = useState(0)
    //--------YOUR GEAR STATE WANT TO UPGRADE TO TOTAL -----------
    const [hunterAmountHeroGearNeeded, sethunterAmountHeroGearNeeded] = useState(0)
    const [hunterAmountHerohunterGearDesignNeeded, sethunterAmountHerohunterGearDesignNeeded] = useState(0)


    // const [gearInfo, setgearInfo] = useContext(gearInformationAllTroops)


    let setHerohunterGearDesign = 0 
    let sethunterGearDesign = 0
    let setHunterHeroPart = 0 
    let hunterIndexForTracking = 0 
    //Handle click to grab the value from dropdown to store it in event.target
    const handleClickForHunterSetHeroGear = (event) => {
        event.preventDefault()
        setCurrentHunterGear(event.target.value)
        let array = Object.entries(heroGearObj)
        console.log(array)
        for ( let i = 0 ; i < array.length; i++){
            if(array[i][0] === event.target.value){
                let innerArray = Object.values(array[i][1])
                setHunterHeroPart = innerArray[0]
                sethunterGearDesign = innerArray[1]
                
                sethunterIndex(i)
                sethunterHeroParts(setHunterHeroPart)
                sethunterGearDesigns(sethunterGearDesign)
            }
        }

        // console.log(`Inside handleClickForHunterSetHeroGear : ${setCurrentHunterGear} and ${event.target.value};` )
    }
    
    useEffect(()=> {
    },[hunterIndex,hunterHeroParts,hunterGearDesign])

    
    const handleClickToFindWhatNeedHunter = (event) => {
        event.preventDefault()
        setCurrentChooseHunterGear(event.target.value)
        let arraySecond = Object.entries(heroGearObj)
        console.log(arraySecond, Array.isArray(arraySecond), arraySecond.length)
        console.log(heroGearObj[currentHunterGear])
        for( let i =0 ; i < arraySecond.length; i++ ){
            if(arraySecond[i][0] === event.target.value){
                sethunterSecondhunterIndex(i)
                hunterIndexForTracking = i 
                let innerSecondArray = Object.values(arraySecond[i][1])

                sethunterheropartwanttoupgrade(innerSecondArray[0])
                sethunterhunterGearDesignwanttoupgrade(innerSecondArray[1])

            }
        }
        let heroGearStored = []
        let hunterHeroPartstored = []
        let heroGearTotal = 0 
        let heroPartTotal = 0 
        for ( let i = hunterIndex + 1; i <= hunterIndexForTracking ; i++){
            console.log(arraySecond[i])
            //arraySecond[i][1] it must be at 1 to retrieve {heropart: ... ; hunterGearDesign...}

            let innerSecondArray = Object.values(arraySecond[i][1])
            heroGearStored.push(innerSecondArray[0])
            hunterHeroPartstored.push(innerSecondArray[1])

        }

        for ( let i = 0 ; i < heroGearStored.length; i++){
            heroGearTotal += heroGearStored[i]
            heroPartTotal += hunterHeroPartstored[i]
        }

        console.log(heroGearTotal)
        console.log(heroPartTotal)
        sethunterAmountHeroGearNeeded(heroGearTotal)
        sethunterAmountHerohunterGearDesignNeeded(heroPartTotal)

        if(hunterIndexForTracking <= hunterIndex){
            alert(`You already reach or pass this level`)
        }
    }

    useEffect(() => {
    },[hunterSecondhunterIndex,hunterheropartwanttoupgrade,hunterhunterGearDesignwanttoupgrade,hunterAmountHeroGearNeeded,hunterAmountHerohunterGearDesignNeeded])

    // const handleClick = (event) => {
    //     event.preventDefault()
    //     setgearInfo({
    //         hunterherogear : hunterAmountHeroGearNeeded,
    //         hunterherodesign: hunterAmountHerohunterGearDesignNeeded,

    //     })
    // }
    return (
        <div>
            <h1>Hunter Hero Gear Upgrade</h1>
            <form >
                <label>
                    Select your current hunter hero gear level:
                    <select value = {currentHunterGear} onChange = {handleClickForHunterSetHeroGear}>
                    <option value = "white1star" id = '1'>White 1*</option>
                    <option value = "white2star" id = '2'>White 2*</option>
                    <option value = "white3star" id = '3'>White 3*</option>
                    <option value = "green1star" id = '4'>Green 1*</option>
                    <option value = "green2star" id = '5'>Green 2*</option>
                    <option value = "green3star" id = '6'>Green 3*</option>
                    <option value = "blue1star" id = '7'>Blue 1*</option>
                    <option value = "blue2star">Blue 2*</option>
                    <option value = "blue3star">Blue 3*</option>
                    <option value = "blue4star">Blue 4*</option>
                    <option value = "purple1star">Purple 1*</option>
                    <option value = "purple2star">Purple 2*</option>
                    <option value = "purple3star">Purple 3*</option>
                    <option value = "purple4star">Purple 4*</option>
                    <option value = "purple5star">Purple 5*</option>
                    <option value = "orange1star">Orange 1*</option>
                    <option value = "orange2star">Orange 2*</option>
                    <option value = "orange3star">Orange 3*</option>
                    <option value = "orange4star">Orange 4*</option>
                    <option value = "orange5star">Orange 5*</option>
                    </select>
                </label>       
                    {/* <div>
                        <h3>You hero gear parts currently: {hunterHeroParts}  </h3> 
                    </div>
                    <div>
                        <h3>You hero gear design currently: {hunterGearDesign} </h3>
                 </div> */}
                 <h3>What Level do you want to upgrade to</h3>
                 <label>
                    Select your current hunter hero gear level:
                    <select value = {currentChooseHunterGear} onChange = {handleClickToFindWhatNeedHunter}>
                    <option value = "white1star" id = '1'>White 1*</option>
                    <option value = "white2star" id = '2'>White 2*</option>
                    <option value = "white3star" id = '3'>White 3*</option>
                    <option value = "green1star" id = '4'>Green 1*</option>
                    <option value = "green2star" id = '5'>Green 2*</option>
                    <option value = "green3star" id = '6'>Green 3*</option>
                    <option value = "blue1star" id = '7'>Blue 1*</option>
                    <option value = "blue2star">Blue 2*</option>
                    <option value = "blue3star">Blue 3*</option>
                    <option value = "blue4star">Blue 4*</option>
                    <option value = "purple1star">Purple 1*</option>
                    <option value = "purple2star">Purple 2*</option>
                    <option value = "purple3star">Purple 3*</option>
                    <option value = "purple4star">Purple 4*</option>
                    <option value = "purple5star">Purple 5*</option>
                    <option value = "orange1star">Orange 1*</option>
                    <option value = "orange2star">Orange 2*</option>
                    <option value = "orange3star">Orange 3*</option>
                    <option value = "orange4star">Orange 4*</option>
                    <option value = "orange5star">Orange 5*</option>
                    </select>
                </label>
                {/* <div>
                    <h3> Hero Gear you want to upgrade to : {hunterheropartwanttoupgrade}</h3>
                    <h3>Hero Gear you want to upgrade to : {hunterhunterGearDesignwanttoupgrade}</h3>
                </div> */}

                <div>
                    <h3> You need : {hunterAmountHeroGearNeeded} Hero Gear to upgrade</h3>

                    <h3> You Need : {hunterAmountHerohunterGearDesignNeeded} Hero Design to upgrade</h3>

                    {/* <button onClick = { handleClick }> Submit </button> */}
                </div>
            </form>
        </div>
    )
}

export default HunterHeroGearFillIn;
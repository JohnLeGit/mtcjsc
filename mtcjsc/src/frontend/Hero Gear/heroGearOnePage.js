import React, { useEffect, useState } from 'react';

const AllInOnePage = () => {
//****************------------------------------------------------------------------- INFANTRY ------------------------------------------------------------------------------- */
    const [heroGearObj, setheroGearObj] = useState({
        white1star : {
            heropart : 25,
            geardesign : 0
        } ,
        white2star : {
            heropart : 25,
            geardesign : 0
        } ,
        white3star : {
            heropart : 70,
            geardesign : 0
        } ,
        green1star : {
            heropart : 115,
            geardesign : 0
        } ,
        green2star : {
            heropart : 225,
            geardesign : 0
        } ,
        green3star : {
            heropart : 310,
            geardesign : 0
        } ,
        blue1star : {
            heropart : 330,
            geardesign : 0
        } ,
        blue2star : {
            heropart : 40,
            geardesign : 63
        } ,
        blue3star : {
            heropart : 55,
            geardesign : 87
        } ,
        blue4star : {
            heropart : 1008,
            geardesign : 35
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
    const [currentInfantryGear, setCurrentInfantryFear] = useState(0);
    const [currentChooseInfantryGear, setCurrentChooseInfantryFear] = useState(0);
    const [index, setIndex] = useState(0)
    //--------YOUR GEAR STATE -----------
    const [heroparts, setHeroparts] = useState(0)
    const [geardesign, setGeardesigns] = useState(0)
    //--------YOUR GEAR STATE WANT TO UPGRADE TO -----------
    const [secondIndex, setSecondIndex] = useState(0)
    const [heropartswanttoupgrade, setHeropartswanttoupgrade] = useState(0)
    const [geardesignwanttoupgrade, setGeardesignwanttoupgrade] = useState(0)
    //--------YOUR GEAR STATE WANT TO UPGRADE TO TOTAL -----------
    const [amountHeroGearNeeded, setAmountHeroGearNeeded] = useState(0)
    const [amountHeroGearDesignNeeded, setAmountHeroGearDesignNeeded] = useState(0)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    let setGeardesign = 0
    let setHeropart = 0 
    let indexForTracking = 0 
    //Handle click to grab the value from dropdown to store it in event.target
    const handleClickForSetHeroGear = (event) => {
        event.preventDefault()
        setCurrentInfantryFear(event.target.value)
        let array = Object.entries(heroGearObj)
        for ( let i = 0 ; i < array.length; i++){
            if(array[i][0] === event.target.value){
                let innerArray = Object.values(array[i][1])
                setHeropart = innerArray[0]
                setGeardesign = innerArray[1]
                
                setIndex(i)
                setHeroparts(setHeropart)
                setGeardesigns(setGeardesign)
            }
        }
    }
    
    useEffect(()=> {
    },[index,heroparts,geardesign])

    
    const handleClickToFindWhatNeed = (event) => {
        event.preventDefault()
        setCurrentChooseInfantryFear(event.target.value)
        let arraySecond = Object.entries(heroGearObj)
        for( let i =0 ; i < arraySecond.length; i++ ){
            if(arraySecond[i][0] === event.target.value){
                setSecondIndex(i)
                indexForTracking = i 
                let innerSecondArray = Object.values(arraySecond[i][1])

                setHeropartswanttoupgrade(innerSecondArray[0])
                setGeardesignwanttoupgrade(innerSecondArray[1])

            }
        }
        let heroGearStored = []
        let heroPartStored = []
        let heroGearTotal = 0 
        let heroPartTotal = 0 
        for ( let i = index + 1; i <= indexForTracking ; i++){
            //arraySecond[i][1] it must be at 1 to retrieve {heropart: ... ; geardesign...}

            let innerSecondArray = Object.values(arraySecond[i][1])
            heroGearStored.push(innerSecondArray[0])
            heroPartStored.push(innerSecondArray[1])

        }

        for ( let i = 0 ; i < heroGearStored.length; i++){
            heroGearTotal += heroGearStored[i]
            heroPartTotal += heroPartStored[i]
        }
        setAmountHeroGearNeeded(heroGearTotal)
        setAmountHeroGearDesignNeeded(heroPartTotal)

        if(indexForTracking <= index){
            alert(`You already reach or pass this level`)
        }
    }
    
    // const handleClick = (event) => {
    //     event.preventDefault()
    //     setgearInfo({
    //         infantryherogear : amountHeroGearNeeded,
    //         infrantryherodesign: amountHeroGearDesignNeeded,
    //     })
    // }
    useEffect(() => {
    },[secondIndex,heropartswanttoupgrade,geardesignwanttoupgrade,amountHeroGearDesignNeeded])

//****************------------------------------------------------------------------- HUNTER ------------------------------------------------------------------------------- */
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


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    let sethunterGearDesign = 0
    let setHunterHeroPart = 0 
    let hunterIndexForTracking = 0 
    //Handle click to grab the value from dropdown to store it in event.target
    const handleClickForHunterSetHeroGear = (event) => {
        event.preventDefault()
        setCurrentHunterGear(event.target.value)
        let array = Object.entries(heroGearObj)
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
            //arraySecond[i][1] it must be at 1 to retrieve {heropart: ... ; hunterGearDesign...}

            let innerSecondArray = Object.values(arraySecond[i][1])
            heroGearStored.push(innerSecondArray[0])
            hunterHeroPartstored.push(innerSecondArray[1])

        }

        for ( let i = 0 ; i < heroGearStored.length; i++){
            heroGearTotal += heroGearStored[i]
            heroPartTotal += hunterHeroPartstored[i]
        }
        sethunterAmountHeroGearNeeded(heroGearTotal)
        sethunterAmountHerohunterGearDesignNeeded(heroPartTotal)

        if(hunterIndexForTracking <= hunterIndex){
            alert(`You already reach or pass this level`)
        }
    }

    useEffect(() => {
    },[hunterSecondhunterIndex,hunterheropartwanttoupgrade,hunterhunterGearDesignwanttoupgrade,hunterAmountHeroGearNeeded,hunterAmountHerohunterGearDesignNeeded])
 

//****************------------------------------------------------------------------- RIDER ------------------------------------------------------------------------------- */
    const [currentRiderGear, setcurrentRiderGear] = useState(0);
    const [currentChooseRiderGear, setcurrentChooseRiderGear] = useState(0);
    const [riderIndex, setriderIndex] = useState(0)
    //--------YOUR GEAR STATE -----------
    const [riderHeroParts, setriderHeroParts] = useState(0)
    const [riderGearDesign, setriderGearDesigns] = useState(0)
    //--------YOUR GEAR STATE WANT TO UPGRADE TO -----------
    const [secondriderIndex, setSecondriderIndex] = useState(0)
    const [riderHeroPartswanttoupgrade, setriderHeroPartswanttoupgrade] = useState(0)
    const [riderGearDesignwanttoupgrade, setriderGearDesignwanttoupgrade] = useState(0)
    //--------YOUR GEAR STATE WANT TO UPGRADE TO TOTAL -----------
    const [riderAmountOfHeroGearNeeded, setriderAmountOfHeroGearNeeded] = useState(0)
    const [amountHeroriderGearDesignNeeded, setAmountHeroriderGearDesignNeeded] = useState(0)

    let setriderGearDesign = 0
    let setRiderHeroPart = 0 
    let riderIndexForTracking = 0 
    //Handle click to grab the value from dropdown to store it in event.target
    const handleClickForRiderSetHeroGear = (event) => {
        event.preventDefault()
        setcurrentRiderGear(event.target.value)
        let array = Object.entries(heroGearObj)
        for ( let i = 0 ; i < array.length; i++){
            if(array[i][0] === event.target.value){
                let innerArray = Object.values(array[i][1])
                setRiderHeroPart = innerArray[0]
                setriderGearDesign = innerArray[1]
                
                setriderIndex(i)
                setriderHeroParts(setRiderHeroPart)
                setriderGearDesigns(setriderGearDesign)
            }
        }

        // console.log(`Inside handleClickForRiderSetHeroGear : ${setcurrentRiderGear} and ${event.target.value};` )
    }
    
    useEffect(()=> {
    },[riderIndex, riderHeroParts,riderGearDesign])

    const handleClickToFindWhatNeedRider = (event) => {
        event.preventDefault()
        setcurrentChooseRiderGear(event.target.value)
        let arraySecond = Object.entries(heroGearObj)
        for( let i =0 ; i < arraySecond.length; i++ ){
            if(arraySecond[i][0] === event.target.value){
                setSecondriderIndex(i)
                riderIndexForTracking = i 
                let innerSecondArray = Object.values(arraySecond[i][1])

                setriderHeroPartswanttoupgrade(innerSecondArray[0])
                setriderGearDesignwanttoupgrade(innerSecondArray[1])

            }
        }
        let heroGearStored = []
        let riderHeroPartstored = []
        let heroGearTotal = 0 
        let heroPartTotal = 0 
        for ( let i = riderIndex + 1; i <= riderIndexForTracking ; i++){
           
            //arraySecond[i][1] it must be at 1 to retrieve {heropart: ... ; riderGearDesign...}

            let innerSecondArray = Object.values(arraySecond[i][1])
            heroGearStored.push(innerSecondArray[0])
            riderHeroPartstored.push(innerSecondArray[1])

        }

        for ( let i = 0 ; i < heroGearStored.length; i++){
            heroGearTotal += heroGearStored[i]
            heroPartTotal += riderHeroPartstored[i]
        }
        setriderAmountOfHeroGearNeeded(heroGearTotal)
        setAmountHeroriderGearDesignNeeded(heroPartTotal)

        if(riderIndexForTracking <= riderIndex){
            alert(`You already reach or pass this level`)
        }
    }

    useEffect(() => {
    },[secondriderIndex, 
        riderHeroPartswanttoupgrade, 
        riderGearDesignwanttoupgrade,
        riderAmountOfHeroGearNeeded,
        amountHeroriderGearDesignNeeded])

return (
        <div>
            <h1> Infantry Hero Gear Upgrade </h1>
            <form >
                <label>
                    Select your current infantry hero gear level:
                    <select value = {currentInfantryGear} onChange = {handleClickForSetHeroGear}>
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
                 <h3>What Level do you want to upgrade to</h3>
                 <label>
                    Select your current infantry hero gear level:
                    <select value = {currentChooseInfantryGear} onChange = {handleClickToFindWhatNeed}>
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
                <div>
                    <h3> You need : {amountHeroGearNeeded} Hero Gear to upgrade</h3>

                    <h3> You Need : {amountHeroGearDesignNeeded} Hero Design to upgrade</h3>
                    {/* <button onClick = { handleClick }> Submit </button> */}
                </div>
            </form>

            <div>
            --------------------------------------------------------------------------------------------------------------------------------------------
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
        --------------------------------------------------------------------------------------------------------------------------------------------
        <div>
            <h1>Hunter Hero Gear Upgrade</h1>
            <form >
                <label>
                    Select your current hunter hero gear level:
                    <select value = {currentRiderGear} onChange = {handleClickForRiderSetHeroGear}>
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
                        <h3>You hero gear parts currently: {riderHeroParts}  </h3> 
                    </div>
                    <div>
                        <h3>You hero gear design currently: {riderGearDesign} </h3>
                 </div> */}
                 <h3>What Level do you want to upgrade to</h3>
                 <label>
                    Select your current hunter hero gear level:
                    <select value = {currentChooseRiderGear} onChange = {handleClickToFindWhatNeedRider}>
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
                    <h3> Hero Gear you want to upgrade to : {riderHeroPartswanttoupgrade}</h3>
                    <h3>Hero Gear you want to upgrade to : {riderGearDesignwanttoupgrade}</h3>
                </div> */}

                <div>
                    <h3> You need : {riderAmountOfHeroGearNeeded} Hero Gear to upgrade</h3>

                    <h3> You Need : {amountHeroriderGearDesignNeeded} Hero Design to upgrade</h3>
                </div>
            </form>
        </div>
        </div>

        
    )
}

export default AllInOnePage
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
    //--------YOUR GEAR STATE WANT TO UPGRADE TO heroGearTotal -----------
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
        let heroGearheroGearTotal = 0 
        let heroPartheroGearTotal = 0 
        for ( let i = index + 1; i <= indexForTracking ; i++){
            //arraySecond[i][1] it must be at 1 to retrieve {heropart: ... ; geardesign...}

            let innerSecondArray = Object.values(arraySecond[i][1])
            heroGearStored.push(innerSecondArray[0])
            heroPartStored.push(innerSecondArray[1])

        }

        for ( let i = 0 ; i < heroGearStored.length; i++){
            heroGearheroGearTotal += heroGearStored[i]
            heroPartheroGearTotal += heroPartStored[i]
        }
        setAmountHeroGearNeeded(heroGearheroGearTotal)
        setAmountHeroGearDesignNeeded(heroPartheroGearTotal)

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
//--------YOUR GEAR STATE WANT TO UPGRADE TO heroGearTotal -----------
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
    },[hunterIndex,
        hunterHeroParts,
        hunterGearDesign])

    
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
        let heroGearheroGearTotal = 0 
        let heroPartheroGearTotal = 0 
        for ( let i = hunterIndex + 1; i <= hunterIndexForTracking ; i++){
            //arraySecond[i][1] it must be at 1 to retrieve {heropart: ... ; hunterGearDesign...}

            let innerSecondArray = Object.values(arraySecond[i][1])
            heroGearStored.push(innerSecondArray[0])
            hunterHeroPartstored.push(innerSecondArray[1])

        }

        for ( let i = 0 ; i < heroGearStored.length; i++){
            heroGearheroGearTotal += heroGearStored[i]
            heroPartheroGearTotal += hunterHeroPartstored[i]
        }
        sethunterAmountHeroGearNeeded(heroGearheroGearTotal)
        sethunterAmountHerohunterGearDesignNeeded(heroPartheroGearTotal)

        if(hunterIndexForTracking <= hunterIndex){
            alert(`You already reach or pass this level`)
        }
    }

    useEffect(() => {
    },[hunterSecondhunterIndex,
        hunterheropartwanttoupgrade,
        hunterhunterGearDesignwanttoupgrade,
        hunterAmountHeroGearNeeded,
        hunterAmountHerohunterGearDesignNeeded])
 

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
    //--------YOUR GEAR STATE WANT TO UPGRADE TO heroGearTotal -----------
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
    },[riderIndex, 
        riderHeroParts,
        riderGearDesign])

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
        let heroGearheroGearTotal = 0 
        let heroPartheroGearTotal = 0 
        for ( let i = riderIndex + 1; i <= riderIndexForTracking ; i++){
           
            //arraySecond[i][1] it must be at 1 to retrieve {heropart: ... ; riderGearDesign...}

            let innerSecondArray = Object.values(arraySecond[i][1])
            heroGearStored.push(innerSecondArray[0])
            riderHeroPartstored.push(innerSecondArray[1])

        }

        for ( let i = 0 ; i < heroGearStored.length; i++){
            heroGearheroGearTotal += heroGearStored[i]
            heroPartheroGearTotal += riderHeroPartstored[i]
        }
        setriderAmountOfHeroGearNeeded(heroGearheroGearTotal)
        setAmountHeroriderGearDesignNeeded(heroPartheroGearTotal)

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



// NOW FIND UPDATE heroGearTotal

    const [heroGearTotal, setheroGearTotal]  = useState(0)
    const [heroDesignTotal, setheroDesignTotal]  = useState(0)

    const handleSubmitheroGearTotal = (event) => {
        event.preventDefault()
        setheroGearTotal(riderAmountOfHeroGearNeeded + amountHeroGearNeeded + hunterAmountHeroGearNeeded)
        setheroDesignTotal(amountHeroGearDesignNeeded + hunterAmountHerohunterGearDesignNeeded + amountHeroriderGearDesignNeeded )
    }

    useEffect(() => {
        console.log('setheroGearTotal:' , heroGearTotal)
        console.log('setheroDesignTotal', heroDesignTotal)
    }, [heroGearTotal, heroDesignTotal])


    
    /*
    Now we have to consider how much you have in your bags
    Have to have input from both gear and design of what you currently have in your bags
    Then from what you have in bags subtract the amount of that you need and update 
    
    That would have to go before the calculation
    */

    const [inbagHeroGear, setInBagHeroGear] = useState(0)
    const [inbagHeroDesign, setInbagHeroDesign] = useState(0)

    const handleClickInBag = (event) => {
        event.preventDefault()
        console.log('in bag hero gear' , inbagHeroGear)
        console.log('in bag hero design' , inbagHeroDesign)
        //Checking if total amount you need is < what you currently have => change the string already
        if(Math.floor(Number(heroGearTotal) + Number(heroDesignTotal)) < Math.floor(Number(inbagHeroGear) + Number(inbagHeroDesign))){
            alert(`What you have in your bags already enough for you to upgrade whatever you need`)
        }
    }

    useEffect(() => {

    },[inbagHeroGear, inbagHeroDesign])
    //Now for trap time
    //What we can do is to have a text and click a button and then save the value in a state
    //Then we display on average how many traps will you need 

    //Problem need to figure out is what if hero design is 0 
    //Now we just need to add them together to see how many traps will they need
    //because of that we will need 2 text box

    const [enterHeroGear, setEnterHeroGear] = useState(0)
    const [enterHeroDesign, setEnterHeroDesign] = useState(0)
    const [totalEnterForBoth, setTotalEnterForBoth] = useState(0)
    const [resultString, setResultString] = useState('')


    let calculate = 0 
    //So the condition we need to consider

    //If the math comes out that we have less than or  = to 0 => We need replace the string
    //else we display the string with the amount of traps we need!
    const handleClickEnter = (event) => {
        event.preventDefault()
        console.log(enterHeroGear,enterHeroDesign)
        setTotalEnterForBoth(Number(enterHeroDesign) + Number(enterHeroGear))

        // calculate = Number(heroGearTotal) + Number(heroDesignTotal)

        // **** POSSIBLE BUG, HAVE TO FIND WHICHEVER IS BIGGER THEN WE COMPARE
        //Total amount - input in inventory / average amount
        //Then take whatever is bigger which is the max.


        // if(Math.floor(((Number(heroGearTotal) + Number(heroDesignTotal)) - (Number(inbagHeroGear) + Number(inbagHeroDesign))) / totalEnterForBoth) <= 0){
        //     setResultString(`******You have enough resources to update just after 1 trap*****`)
        // } else {
        //     setResultString(`*****You would need 
        //     ${Math.floor(((Number(heroGearTotal) + Number(heroDesignTotal)) - (Number(inbagHeroGear) + Number(inbagHeroDesign))) / (Number(enterHeroGear) + Number(enterHeroDesign)))} 
        //     traps to achieve what you want*****`)
        // }

        let heroGearDifference = Math.ceil(((Number(heroGearTotal) - Number(inbagHeroGear)) / Number(enterHeroGear))) 
        let heroDesignDifference = Math.ceil(((Number(heroDesignTotal) - Number(inbagHeroDesign)) / Number(enterHeroDesign)))

        let result = Math.max(heroGearDifference, heroDesignDifference)

        setResultString(`******** YOU NEED ${result} traps *******`)

    }

    useEffect(() => {
        console.log(totalEnterForBoth)
    },[totalEnterForBoth, resultString])




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
            <hr></hr>
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
        <hr></hr>
        <div>
            <h1>Rider Hero Gear Upgrade</h1>
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

            <div>
                <hr></hr>
                <button onClick={handleSubmitheroGearTotal}> Submit</button>
                <h3>Total amount you need is : {heroGearTotal} hero gears</h3>
                <h3>Total amount you need is : {heroDesignTotal} hero designs</h3>
            </div>
        </div>
        <div>
            <hr></hr>
            <h3> How much do you currently have in your Inventory</h3>
            <input placeholder='Amount Hero Gears'
            onChange={event => setInBagHeroGear(event.target.value)}>
            </input>

            <input placeholder='Amount Hero Design'
            onChange={event => setInbagHeroDesign(event.target.value)}>
            </input>
            <div>
            <button onClick={handleClickInBag}>Submit For What You Have In Bags</button>
            </div>
            <h3>You currently have {inbagHeroGear} Hero Gears In Your Inventory</h3>
            <h3>You currently have {inbagHeroDesign} Hero Design In Your Inventory</h3>

        </div>
        <hr></hr>
        <div>
            <h3> What is your average amount of hero gear you get each trap</h3>
            <input placeholder='Hero Gear'
            onChange={event => setEnterHeroGear(event.target.value)}>
            </input>

            <h3>What is your average amount of hero design you get each trap</h3>
            <input placeholder='Hero Design'
            onChange={event => setEnterHeroDesign(event.target.value)}>
            </input>
            <div>
            <button onClick={handleClickEnter}> Submit for Calculation</button>
            </div>
            <div>
            <h2>{resultString}</h2>
            </div>
        </div>
        </div>

        
    )
}
/*
We need 6534 hero gears and 555 hero designs = 7089

But you already have in bags 2534 => 4555

YOu have 1035 each trap 



*/
export default AllInOnePage
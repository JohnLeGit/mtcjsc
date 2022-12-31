import React, { useEffect, useState } from 'react';

const RiderHeroGearFillIn = () => {
    //setState
    const [heroGearObj, setheroGearObj] = useState({
        white1star : {
            heropart : 25,
            riderGearDesign : 0
        } ,
        white2star : {
            heropart : 25,
            riderGearDesign : 0
        } ,
        white3star : {
            heropart : 70,
            riderGearDesign : 0
        } ,
        green1star : {
            heropart : 115,
            riderGearDesign : 0
        } ,
        green2star : {
            heropart : 225,
            riderGearDesign : 0
        } ,
        green3star : {
            heropart : 310,
            riderGearDesign : 0
        } ,
        blue1star : {
            heropart : 330,
            riderGearDesign : 0
        } ,
        blue2star : {
            heropart : 40,
            riderGearDesign : 63
        } ,
        blue3star : {
            heropart : 55,
            riderGearDesign : 87
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
    let setHeropart = 0 
    let riderIndexForTracking = 0 
    //Handle click to grab the value from dropdown to store it in event.target
    const handleClickForRiderSetHeroGear = (event) => {
        event.preventDefault()
        setcurrentRiderGear(event.target.value)
        let array = Object.entries(heroGearObj)
        for ( let i = 0 ; i < array.length; i++){
            if(array[i][0] === event.target.value){
                let innerArray = Object.values(array[i][1])
                setHeropart = innerArray[0]
                setriderGearDesign = innerArray[1]
                
                setriderIndex(i)
                setriderHeroParts(setHeropart)
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
            console.log(arraySecond[i])
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
    )
}

export default RiderHeroGearFillIn;
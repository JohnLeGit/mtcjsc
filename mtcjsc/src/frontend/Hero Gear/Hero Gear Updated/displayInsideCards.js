import React, {  useState ,useEffect } from 'react';

const Display = () => {
    const [test, setTest]  = useState(0)


    const handleClick = (event) => {
        event.preventDefault()

        setTest(test + 1)
    }



    useEffect(() => {
        console.log('test', test)
    },[test])

    return ( <div>
        <h1>Hunter Hero Gear Upgrade</h1>
        <form >
            <label>
                Select your current hunter hero gear level:
                <select>
                {/* <select value = {currentHunterGear} onChange = {handleClickForHunterSetHeroGear}> */}
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
                <select>
                {/* <select value = {currentChooseHunterGear} onChange = {handleClickToFindWhatNeedHunter}> */}
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
                {/* <h3> You need : {hunterAmountHeroGearNeeded} Hero Gear to upgrade</h3> */}

                {/* <h3> You Need : {hunterAmountHerohunterGearDesignNeeded} Hero Design to upgrade</h3> */}

                <button onClick = { handleClick }> Submit </button>
                {test}
            </div>
        </form>
    </div>)
}

export default Display
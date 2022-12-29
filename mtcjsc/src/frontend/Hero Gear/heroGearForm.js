import React, { useState } from 'react';

const HeroGearFillIn = () => {
    //setState
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


    //Handle when click submit on dropdown -> it shows the value on frontend
    const handleSubmitHeroGearForInfantry = (event) => {
        event.preventDefault()
        const clickValue = heroGearObj[setCurrentInfantryFear]
        console.log(`click value chosen : ${clickValue}`  )
    }

    return (
        <div>
            <h1> Testing </h1>
            <form>
                <h3>Infantry</h3>
                <select name = "herogearselection" id = 'herogearinformation'>
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
                    <button onClick = {() => setCurrentInfantryFear(
                        heroGearObj.blue1star.heropart
                    )}>Submit</button>
                    <div>
                        <h1> You current Gear</h1>
                        <p>{currentInfantryGear}</p>
                    </div>
                <h3>Hunter</h3>
                <select name = "herogearselection" id = 'herogearinformation'>
                    <option value = "white">White 1*</option>
                    <option value = "white">White 2*</option>
                    <option value = "white">White 3*</option>
                    <option value = "white">Green 1*</option>
                    <option value = "white">Green 2*</option>
                    <option value = "white">Green 3*</option>
                    <option value = "white">Blue 1*</option>
                    <option value = "white">Blue 2*</option>
                    <option value = "white">Blue 3*</option>
                    <option value = "white">Blue 4*</option>
                    <option value = "white">Purple 1*</option>
                    <option value = "white">Purple 2*</option>
                    <option value = "white">Purple 3*</option>
                    <option value = "white">Purple 4*</option>
                    <option value = "white">Purple 5*</option>
                    <option value = "white">Orange 1*</option>
                    <option value = "white">Orange 2*</option>
                    <option value = "white">Orange 3*</option>
                    <option value = "white">Orange 4*</option>
                    <option value = "white">Orange 5*</option>
                </select>
                    <button>Submit</button>
                <h3>Rider</h3>
                <select name = "herogearselection" id = 'herogearinformation'>
                    <option value = "white">White 1*</option>
                    <option value = "white">White 2*</option>
                    <option value = "white">White 3*</option>
                    <option value = "white">Green 1*</option>
                    <option value = "white">Green 2*</option>
                    <option value = "white">Green 3*</option>
                    <option value = "white">Blue 1*</option>
                    <option value = "white">Blue 2*</option>
                    <option value = "white">Blue 3*</option>
                    <option value = "white">Blue 4*</option>
                    <option value = "white">Purple 1*</option>
                    <option value = "white">Purple 2*</option>
                    <option value = "white">Purple 3*</option>
                    <option value = "white">Purple 4*</option>
                    <option value = "white">Purple 5*</option>
                    <option value = "white">Orange 1*</option>
                    <option value = "white">Orange 2*</option>
                    <option value = "white">Orange 3*</option>
                    <option value = "white">Orange 4*</option>
                    <option value = "white">Orange 5*</option>
                </select>         
                    <button>Submit</button>
            </form>


        </div>
    )
}

export default HeroGearFillIn;
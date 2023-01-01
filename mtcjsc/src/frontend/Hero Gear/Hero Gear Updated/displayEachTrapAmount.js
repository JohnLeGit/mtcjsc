import React from "react";
import { useState } from "react"

const EachTrap = () => {
    const [enterHeroPart, setEnterHeroPart] = useState(0)
    const [enterHeroDesign, setEnterHeroDesign] = useState(0)
    /*

    The idea of having each trap is to have 2 input box that takes Amount of Hero Part and Amount of Hero Design 

    Then click Submit For Now

    And console.log Amount
     */

    return (
        <div>
            <h2>Please input amount of hero part you get each trap</h2>

            <input 
            placeholder="Amount Hero Gear"
            onChange={event => setEnterHeroPart(event.target.value)}></input>
            State in trap : {enterHeroPart}

            <h2>Please input amount of hero design you get each trap</h2>

            <input 
            placeholder="Amount Hero Design"
            onChange={event => setEnterHeroDesign(event.target.value)}></input>


            State in trap : {enterHeroDesign}
        </div>
    )
}

export default EachTrap
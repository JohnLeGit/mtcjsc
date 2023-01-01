import React from "react";
import { useState } from "react"

const Inventory = () => {
    const [heroGearInventory, setHeroGearInventory] = useState(0)
    const [heroDesignInventory, setHeroDesignInventory] = useState(0)

    return (

        <div>
            <div>
            The amount of Hero Parts You Have In Your Inventory Is:
            
            <input 
            placeholder="Amount Hero Gear"
            onChange={event => setHeroGearInventory(event.target.value)}></input>

            This current State is : {heroGearInventory}
            </div>
            <div>
            The Amount of Hero Design You Have In Your Inventory Is:

            <input 
            placeholder="Amount Hero Design"
            onChange={event => setHeroDesignInventory(event.target.value)}></input>

            This current State is: {heroDesignInventory}
            </div>
        </div>
    )
}

export default Inventory
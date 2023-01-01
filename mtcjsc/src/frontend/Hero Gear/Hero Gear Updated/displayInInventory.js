import React from "react";
import { useState } from "react"

const Inventory = () => {
    const [heroGearInventory, setHeroGearInventory] = useState(0)
    const [heroDesignInventory, setHeroDesignInventory] = useState(0)

    return (

        <div>
            <div>
                <div>
            The amount of Hero Parts You Have In Your Inventory is:
                </div>
            <input 
            placeholder="Amount Hero Gear"
            onChange={event => setHeroGearInventory(event.target.value)}></input>
            </div>
            <div>
                <div>
            The Amount of Hero Design You Have In Your Inventory is:
                </div>
            <input 
            placeholder="Amount Hero Design"
            onChange={event => setHeroDesignInventory(event.target.value)}></input>
            </div>

            <div>
                <h3>
                    You have {heroGearInventory} Hero Parts Amount In Your Inventory
                </h3>
            </div>

            <div>
                <h3>
                    You have {heroDesignInventory} Hero Design Amount In Your Inventory
                </h3>
            </div>
        </div>
    )
}

export default Inventory
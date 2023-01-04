import React from "react";
import { useState, createContext, useContext } from "react"

const getTotalAmountNeeded = createContext()

const TotalAmountHeroGearUpgrade = () => {
    const [totalAmount, setTotalAmount] = useState({
        'heropart' : [],
        'herodesign': []
    })
    return (
        <getTotalAmountNeeded.Provider value={[totalAmount, setTotalAmount]}>
            
vb
        </getTotalAmountNeeded.Provider>
    )
}

export default TotalAmountHeroGearUpgrade
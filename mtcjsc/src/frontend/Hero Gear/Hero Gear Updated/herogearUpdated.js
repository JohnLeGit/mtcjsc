import React, {  useState ,useEffect } from 'react';
import { createContext, useContext } from 'react';
import SelectionCards from './selectionCards'
import Trap from './displayEachTrapAmount'
import Inventory from './displayInInventory'

export const countCards = createContext()

const UpdateHeroGear = () => {

    const [component, setComponent] = useState([])
    let [count, setCount] = useState(0)
 
    const handleClickAddOn = (event) => {
        count++
        event.preventDefault()

        //Everytime we click this => render a new component
        
        if(count <= 9){
            setCount(count)
            setComponent([...component, 
            <div>
                <SelectionCards counter = {count}/> 
            </div>])
        }

    }


    useEffect(() => {
        console.log('works' , count)
    },[component, count])

    return (
        <div>
       <div>
        <h1>Click + Button Below To Add Hero Gear Card, Maximum to 9</h1>
        <button onClick={handleClickAddOn}> + </button>
            {component} 
       </div>
       <div>
        <hr></hr>
            <Inventory/>
       </div>
       <div>
        <hr></hr>
            <Trap/>
       </div>
       </div>
    )
}

export default UpdateHeroGear
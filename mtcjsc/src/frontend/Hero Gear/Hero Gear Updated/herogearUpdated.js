import React, {  useState ,useEffect } from 'react';
import SelectionCards from './selectionCards'
import { createContext, useContext } from 'react';

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
       
        <button onClick={handleClickAddOn}> + </button>
            {component} 
       </div>
    )
}

export default UpdateHeroGear
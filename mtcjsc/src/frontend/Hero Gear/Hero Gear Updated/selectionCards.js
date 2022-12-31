import React, {  useState ,useEffect } from 'react';
import { createContext, useContext } from 'react';
import GearsDetail from './displayInsideCards'
// import {countCards} from './herogearUpdated'

const AddOnCardForSelection = (props) => {
    
    return (
        <div>
                <h1>Your first items {props.counter} </h1>
                <GearsDetail/>
        </div>

    )
}

export default AddOnCardForSelection
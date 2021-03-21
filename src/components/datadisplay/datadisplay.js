import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';

import './Datadisplay.css';

import Individualdata from '../Datadisplay/Individualdata/Individualdata';


const DataDisplay = (props) => (
    <Auxilliary>
        <Individualdata 
            name = {props.name}
            gender = {props.gender}
            height = {props.height}
            mass = {props.mass}
            hair_color = {props.hair_color}
            homeworld = {props.homeworld}
            starships = {props.starships}
        />
    </Auxilliary>

);

export default DataDisplay;
import React from 'react';



import Datadisplay from '../Datadisplay/Datadisplay';

const SearchData = (props) => (
    <div> 
        <table>
            <Datadisplay 
                name = {props.name}
                gender = {props.gender} 
                height = {props.height}
                mass = {props.mass}
                hair_color = {props.hair_color}
                homeworld = {props.homeworld}
                starships = {props.starships}    
            />
        </table>
    </div>
);

export default SearchData;
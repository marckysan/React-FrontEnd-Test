import React, { Component } from 'react';
import axios from 'axios';

import './Comparison.css';

import Search from '../Search/Search';
import SearchData from '../Search/SearchData';


class Comparison extends Component {

    state = {
        characterQueried: '',
        name: '',
        gender: '',
        height: '',
        mass: '',
        hair_color: '',
        homeworld: '', 
        starships: ''
    }


    callbackFunction = (childData) => {
         this.setState({ characterQueried:childData })


        const nameSearch = childData;
        const urlSearch = 'https://swapi.dev/api/people/?search=' + nameSearch;

        console.log(urlSearch);

        axios.get(urlSearch).then(
            response => 
            {   

                var characterStatsindex = response.data['results'];
                var charStats = characterStatsindex['0']; 
                var homeWorld = charStats['homeworld'];    
                
                // retrieve data for homeworld 
                axios.get(homeWorld).then(
                    reponse => {
                        var homeworldStatsIndex = response.data['results'];
                        var homeworldStats = homeworldStatsIndex['0'];
                        
                        this.setState({
                            homeworld : homeworldStats['name']
                        })
                    } 
                )
                
                //retrieve data setstate for starships
                var starshipsArr = charStats['starships'];
                console.log(starshipsArr);
                starshipsArr.forEach(element => 
                    {
                        axios.get(element).then( response => 
                    
                                this.setState( {
                                    starships : this.state.starships + response.data['name'] + "\n"
                                })
                            
                        )
                    }
                );
                

                this.setState({
                    name : charStats['name'],
                    gender : charStats['gender'],
                    height : charStats['height'],
                    mass : charStats['mass'],
                    hair_color : charStats['hair_color'],
                });
            }
        );

    }



    render() {


        return (
            <div>
                <Search
                    parentCallback = {this.callbackFunction} 
                />
                    <SearchData 
                        name = {this.state.name}
                        gender = {this.state.gender}
                        height = {this.state.height}
                        mass = {this.state.mass}
                        hair_color = {this.state.hair_color}
                        homeworld = {this.state.homeworld}
                        starships = {this.state.starships}
                    />
            </div>
        )
    }
}

export default Comparison;
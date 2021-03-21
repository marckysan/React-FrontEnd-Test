import React from 'react';

import classes from './Sidebar.css';

const Sidebar = (props) => (
    <div className = {classes.Tablediv}> 
        <table>
            <tbody>
                <td>
                    Name
                </td>
            </tbody>
            <tbody>
                <td>
                    Gender
                </td>
            </tbody>
            <tbody>
                <td>
                    Height                    
                </td>
            </tbody>
            <tbody>
                <td>
                    Mass
                </td>
            </tbody>
            <tbody>
                <td>
                    Hair Color
                </td>
            </tbody>
            <tbody>
                <td>
                    Homeworld
                </td>
            </tbody>
            <tbody>
                <td>
                    Starships                  
                </td>
            </tbody>
        </table>
    </div>
);

export default Sidebar;
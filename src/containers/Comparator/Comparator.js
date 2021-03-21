import React, { Component } from 'react';

import Comparison from '../../components/comparison/Comparison';
import Sidebar from '../../components/Sidebar/Sidebar';

import classes from './Comparator.css';

class Comparator extends Component {
    render () {

        return (
            <div className={classes.Comparisons}>
                <section className={classes.Tablediv}>
                    <Sidebar />
                </section>
                <section >
                    <Comparison />
                    <Comparison />
                    <Comparison />
                </section>
            </div>
        );
    }
}

export default Comparator;
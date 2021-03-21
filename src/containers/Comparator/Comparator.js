import React, { Component } from 'react';

import Comparison from '../../components/comparison/Comparison';

import './Comparator.css';

class Comparator extends Component {
    render () {

        return (
            <div>
                <section>
                    <p>Sidebar</p>
                </section>
                <section>
                    <Comparison />
                    <Comparison />
                    <Comparison />
                </section>
            </div>
        );
    }
}

export default Comparator;
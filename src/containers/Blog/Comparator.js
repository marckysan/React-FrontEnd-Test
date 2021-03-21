import React, { Component } from 'react';

import comparison from '../../components/comparison/comparison';

import './Comparator.css';

class Comparator extends Component {
    render () {
        return (
            <div>
                <section>
                    <p>Sidebar</p>
                </section>
                <section className="Comparisons">
                    <comparison />
                    <comparison />
                    <comparison />
                </section>
            </div>
        );
    }
}

export default Comparator;
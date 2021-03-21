import React from 'react';

import './comparison.css';

import Auxilliary from '../../hoc/Auxilliary';
import search from '../search/search';

const comparison = (props) => (
    <Auxilliary>
        <div>
            <search />
        </div>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </Auxilliary>
);

export default comparison;
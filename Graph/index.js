import React from 'react';
import { ResponsiveContainer } from 'recharts';
import LineGraph from './Types/line';
import StackedBar from './Types/stackedBar';
import Pie from './Types/pie';

function Graph({type, data=[], xLabelKey, yLabelKey, legends=[], className='', animation }) {

    return (
        <div className={className}>
            <ResponsiveContainer className={'text-xs'} width="100%" height="100%">
                {
                    type === 'line' ?
                    <LineGraph {...{animation, xLabelKey, yLabelKey, legends, data}}/>
                    :type === 'stackedBar' ?
                    <StackedBar {...{animation, xLabelKey, yLabelKey, legends, data}}/>
                    :type === 'pie' ?
                    <Pie  {...{animation, data}}/>
                    :<></>
                }
            </ResponsiveContainer>
        </div>
    )
}

export default Graph;
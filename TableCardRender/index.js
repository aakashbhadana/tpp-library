import React from 'react';
import CardsWrapper from '../../Cards/cardsWrapper';

function TableCardRender({mode, className='', table, card, loading}) {

    if(mode==='table')
    return ( 
        <div className={className}>
            {table}
        </div>
     );
    
    if(mode==='card')
    return ( 
        <CardsWrapper className={className} loading={loading}>
            {card}
        </CardsWrapper>
     );

     return null
}

export default TableCardRender;
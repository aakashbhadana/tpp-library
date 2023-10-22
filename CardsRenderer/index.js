import React from 'react';
import EmptyState from '../EmptyState';

function CardsRenderer({items=[], render=()=>{}, emptyLabel}) {
    
    if(!items || !items.length){
        return <EmptyState label={emptyLabel}/>;
    }
    
    return ( 
        items.map(render)
     );
}

export default CardsRenderer;
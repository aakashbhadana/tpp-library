import React from 'react';
import Container from './container';
import { Switch } from '../..';

function DisclosureWithSwitch({heading='Heading', enabled, setEnabled=()=>{}, children, className='', contentClass='p-4', disabledMessage}) {
    return (
        <Container variant='outlined' className={`!p-0 ${enabled ? '' : 'bg-light' } ${className}`}>
            <div className='flex-center-between p-4 border-b'>
                {heading}
                <Switch enabled={enabled} setEnabled={setEnabled}/>
            </div>
            <div className={contentClass}>
                {
                    enabled ? children : disabledMessage
                }
            </div>
        </Container>
    )
}

export default DisclosureWithSwitch;
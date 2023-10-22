import React from 'react';
import Button from '../Inputs/Button';

function Wizard({steps=[], onChange=()=>{}, active=1, navigation=true}) {

    const activeStep = steps[active-1];

    return (
        <div className='flex flex-col h-full'>
            <div className='flex-center gap-x-8 w-full h-24 p-4'>
                {
                    steps.map((step, index) => (
                        <div key={index} className='align-center gap-x-2 text-sm'>
                            <div className={`w-8 h-8 font-bold rounded-xl flex-center ${active === index+1 ? 'bg-primary text-white' : index < active ? 'bg-dark text-white' : 'border border-dark'}`}>
                                {index+1}
                            </div>
                            <div>
                                {step.label}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex-grow overflow-y-auto overflow-x-hidden'>
                {activeStep.content}
            </div>
            {
                navigation && 
                <div className='flex-center h-20 p-4'>
                    {
                        active < steps.length+1 &&
                        <Button onClick={()=>onChange(prev=>prev+1)} className='btn-sm mr-2' variant='primary'>Continue</Button>
                    }
                    {
                        active > 1 &&
                        <Button onClick={()=>onChange(prev=>prev-1)} className='btn-sm' variant='outlined'>Go Back</Button>
                    }
                </div>
            }
        </div>
    );
}

export default Wizard;
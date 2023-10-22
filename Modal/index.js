import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

function Modal({open=false, children, onClose=()=>{}, onSubmit=()=>{}, className='', contentClass='', zIndex='z-10'}) {

    return (
        <Transition.Root show={open?true:false} as={Fragment}>
            <Dialog open={open?true:false} as="div" className={`relative ${zIndex} dialog`} onClose={()=>onClose()}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="backdrop" />
                </Transition.Child>
                <div className={`fixed inset-0 overflow-y-auto z-10 ${className}`}>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className={`content ${contentClass}`}>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Modal
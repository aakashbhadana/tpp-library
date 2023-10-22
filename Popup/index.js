import { Popover, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { usePopper } from 'react-popper';

function Popup({children, className='', btnClass='', contentClass='', button='Button'}) {

  //Popper stuff
  const [PopRef, setPopRef] = useState(null);
  const [PopElem, setPopElem] = useState(null);
  const { styles, attributes } = usePopper(PopRef, PopElem, {
        placement: 'bottom-start',
    });

  return (
      <Popover className={`relative popup ${className}`}>
        {
          ({open}) => (
            <>
            <Popover.Button ref={setPopRef} className={`align-center text-sm font-semibold ${btnClass}`}>
              <span>{button}</span>
              <FiChevronDown className="h-4 w-4" aria-hidden="true" />
            </Popover.Button>
            <Transition ref={setPopElem} style={styles.popper} {...attributes.popper} className='z-10'>
              <Popover.Panel className={`content ${contentClass}`}>{children}</Popover.Panel>
            </Transition>
            </>
          )
        }
      </Popover>
    )
}

export default Popup;
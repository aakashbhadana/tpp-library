import { Disclosure } from '@headlessui/react';
import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function DisclosureContainer({heading='', defaultOpen=false, children, className=''}) {
    return (
        <Disclosure defaultOpen={defaultOpen} as='div' className={className}>
          {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex-center-between">
              {heading}
              <div className='p-1 rounded-sm bg-light ml-2'>
                {
                  open ? <FiChevronUp/> : <FiChevronDown/>
                }
              </div>
            </Disclosure.Button>
            <Disclosure.Panel>
              {children}
            </Disclosure.Panel>
          </>
          )}
        </Disclosure>
      )
}

export default DisclosureContainer;
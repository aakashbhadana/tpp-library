import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiChevronDown } from 'react-icons/fi';
import { usePopper } from 'react-popper';


function Dropdown({options=[], onSelect=()=>{}, className='', variant='', btnClass='btn-md', button='Dropdown'}) {

  //Popper stuff
  const [PopRef, setPopRef] = useState(null);
  const [PopElem, setPopElem] = useState(null);
  const { styles, attributes } = usePopper(PopRef, PopElem, {
        placement: 'bottom-start',
    });

  return (
    <Menu onClick={e=>e.stopPropagation()} as='div' className={`dropdown ${className}`}>
      <Menu.Button ref={setPopRef} className={`btn btn-${variant} ${btnClass}`}>{button}<FiChevronDown className="h-5 w-5 text-muted"/></Menu.Button>
      <Menu.Items className='items' ref={setPopElem} style={styles.popper} {...attributes.popper}>
        {options.map((option, i) => {
            const {label, value, icon} = option;
            /* Use the `active` state to conditionally style the active item. */
            return (
                <Transition key={i} enter="transition duration-100 ease-out" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition duration-75 ease-out" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
                    <Menu.Item key={i} as={Fragment} className={`item`}>
                        {({ active, selected }) => {
                          return (
                            <span onClick={()=>onSelect(value||label)} className={`${active || selected ? 'bg-light' : 'bg-canvas'}`}>
                              {icon}{label}
                          </span>
                          )
                        }}
                    </Menu.Item>
                </Transition>
            )
        })}
        
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
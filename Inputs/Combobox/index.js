import React, { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { debounce } from '../../../../Utils/utils';
import Loader from '../Loader';


function Combo({onChange=()=>{}, icon, className='', placeholder='', renderItem, selected={}, onSelect=()=>{}, options=[{label:'Select an option', value: 'None'}], label='', loading=false}) {

  const [query, setQuery] = useState('')

  const filterOptions = query === '' 
    ? options
    : options.filter(option => option.label.toLowerCase().includes(query.toLowerCase()))

  const debouncedSearch = debounce((query)=>{
    setQuery(query);
    onChange(query)
  });

  const handleChange = (query) => {
    debouncedSearch(query);
  }

  const handleSelect = (option) => {
    onSelect(option)
  }

  //Popper stuff
  const [PopRef, setPopRef] = useState(null);
  const [PopElem, setPopElem] = useState(null);
  const { styles, attributes } = usePopper(PopRef, PopElem, {
      placement: 'bottom-start',
  });

  return (
    <Combobox as='div' value={selected} onChange={handleSelect} className={`combobox ${className}`}>
      {label&&<Combobox.Label className="mb-2 block">{label}</Combobox.Label>}
      <div className='relative' ref={setPopRef}>
        <Combobox.Input placeholder={placeholder} onChange={(event) => handleChange(event.target.value)} displayValue={(option) => option.label} className={`input ${icon ? ' indent-6' : ''}`} />
        {
              icon && 
              <div className='absolute left-3 top-0 h-full flex-center'>{icon}</div>
          }
      </div>
      <Transition ref={setPopElem} style={styles.popper} {...attributes.popper}  className='z-10 w-full' afterLeave={() => setQuery('')}>
        {
          query !== '' &&
          <Combobox.Options className='options'>
            {
              filterOptions.length === 0
              ? (
                <div className="relative cursor-default select-none text-gray-700 text-xs p-3">
                  No results for <b>"{query}"</b>
                </div>
              )
              : filterOptions.map((option, i) => (
                /* Use the `active` state to conditionally style the active option. */
                /* Use the `selected` state to conditionally style the selected option. */
                <Combobox.Option key={i} value={option} as={Fragment} className='item'>
                  {
                    ({ active, selected }) => (
                      renderItem ? renderItem(option, active, selected) :
                      <li className={`${active ? 'bg-light' : 'bg-white'}`}>
                        {option.label}
                        {active && <FiCheck />}
                      </li>
                    )
                  }
                </Combobox.Option>
              ))
            }
            <Loader loading={loading}/>
          </Combobox.Options>
        }
      </Transition>
    </Combobox>
  )
}

export default Combo;
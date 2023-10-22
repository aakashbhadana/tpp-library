import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

function Tabs({className='', tabsClass='', children, options=[]}) {

  const params = new URLSearchParams(window.location.search);
  const defaultTab = params.get('tab') || 0;
  
  return (
    <Tab.Group defaultIndex={defaultTab} as='div' className={`tabs-group ${className}`}>
      <Tab.List className={`tabs ${tabsClass}`}>
        {
          options.map((option, index) => {
            return (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <div className={selected ? 'tab active' : 'tab'}>{option}</div>
                )}
              </Tab>
            )
          })
        }
      </Tab.List>
      <Tab.Panels>
        {children}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs;
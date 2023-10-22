import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

function CheckIcon(props) {
    return <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx={12} cy={12} r={12} fill="#034C27" opacity="1" /><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
}

const RadioList = ({options=[], direction='vertical', className=''}) => {
  
    const [selected, setSelected] = useState()

  return (
      <div className="radio-group">
        <RadioGroup value={selected} onChange={setSelected}>
          <div className={`options ${direction}`}>
            {
                options.map((option, i) => {
                    return (
                        <RadioGroup.Option key={i} value={option.value} className={({ active, checked }) =>`option ${checked ? 'active' : ''}`}>
                            {({ active, checked }) => (
                            <>
                            <div className="align-center p-2">
                                <RadioGroup.Label as="p">{option.label}</RadioGroup.Label>
                                {
                                    option.description &&
                                    <RadioGroup.Description as="span" className={`inline`}>
                                        <span>{option.description}</span>
                                    </RadioGroup.Description>
                                }
                            </div>
                            {
                                checked &&
                                <div className="tick mr-3">
                                    <CheckIcon className='w-6 h-6'/>
                                </div>
                            }
                            </>
                            )}
                        </RadioGroup.Option>
                    )
                })
            }
          </div>
        </RadioGroup>
      </div>
  )
}

export default RadioList

import { Switch } from '@headlessui/react'

function ToggleSwitch({enabled=false, setEnabled=()=>{}, className=''}) {
    return (
      <Switch checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-primary' : 'bg-surface'} switch ${className}`}>
        <span className="sr-only">Use setting</span>
        <span aria-hidden="true" className={`${enabled ? 'translate-x-4' : 'translate-x-0'} knob`}/>
      </Switch>
      )
}

export default ToggleSwitch;

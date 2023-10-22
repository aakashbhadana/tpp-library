import React from 'react';
import './index.css'
import {RiMastercardLine, RiVisaLine} from 'react-icons/ri'

function CreditCard({card={}, index=0}) {

    const getRandomBackground = () => {
        let name = index%2
        return require(`./backgrounds/${name}.jpg`)
    }

    return ( 
        <div>
            <div className="card">
                <div className="card-inner shadow-lg">
                    <div className="card-front background-cover" style={{backgroundImage: `url(${getRandomBackground()})`}}>
                        <div className="card-bg" />
                        <div className="card-glow" />
                        {
                            card.type === 'visa' ?
                            <RiVisaLine className='logo text-white text-7xl'/>
                            : card.type === 'master' ?
                            <RiMastercardLine className='logo text-white text-5xl mt-3'/>
                            : card.type === 'rupay' ?
                            <h1 className='logo text-white text-3xl mt-4 italic'>RuPay</h1>
                            : card.type === 'discover' ?
                            <h1 className='logo text-white mt-4'>Disc⦿ver</h1>
                            :<></>
                        }
                        <div className="card-contactless">
                            <svg xmlns="http://www.w3.org/2000/svg" width={46} height={56}>
                                <path fill="none" stroke="#f9f9f9" strokeWidth={6} strokeLinecap="round" d="m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5 0 0,1 0,28.5M3,19a18,17 0 0,1 0,18" />
                            </svg>
                        </div>
                        <div className="card-chip" />
                        <div className="card-holder">{card.name}</div>
                        <div className="card-number">{card.number}</div>
                    </div>
                    <div className="card-back bg-dark">
                        <div className="card-valid">{card.expiry}</div>
                        <div className="card-seccode">CVV {card.cvv}</div>
                    </div>
                </div>
            </div>
            <div className='text-label text-center mt-2'>Hover to reveal details</div>
        </div>
     );
}

export default CreditCard;
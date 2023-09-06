import React from 'react'
import { GrFormClose } from 'react-icons/gr';
import toggle from '../images/Off_disabled.png'
import pencil from '../images/clarity_pencil-line.png'
import './calculator.css'

export default function Calculator() {
    return (
        <div className='main-wrap'>
            <div>
                <div className='header'>
                    <h4>Calculator</h4>
                    <span>
                        <GrFormClose />
                    </span>
                </div>
                <div className='cake-usd'>
                    <span>cake</span>
                    <div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <span>
                            USD
                        </span>
                    </div>
                </div>
                <div>
                    <div className='cake-field'>
                        <input type='text' name="" value="" placeholder='2.10000 CAKE' />
                    </div>
                    <div className='balance'>
                        <div>
                            <button>USE BALANCE</button>
                            <button>$ 1000</button>
                            <button>$ 100</button>
                        </div>
                    </div>
                    <div>
                        <span>- $20.82</span>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Timeframe</h4>
                    </div>
                    <div>
                        <button>1 Day</button>
                        <button>7 Day</button>
                        <button>30 Day</button>
                        <button>1 Year</button>
                        <button>5 Year</button>
                    </div>
                </div>
                <div>
                    <h5>Enable Accelerated APY</h5>
                    <img src={toggle} alt="Description of the image" />
                </div>
                <div>
                    <span>Select Tier</span>
                    <button>Tier1</button>
                    <button>Tier2</button>
                    <button>Tier3</button>
                    <button>Tier4</button>
                    <button>Tier5</button>
                </div>
                <div>
                    <p>ROI at Current Rates</p>
                    <div>
                        <img src={pencil} alt="Description of the image" />
                        <h2>100.0 USD </h2>
                    </div>
                    <div>
                        <span>~ 3CAKE + 10 DON</span>
                    </div>
                </div>
                <div>
                    <button>Apply</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr';
import cake from '../images/Group 10720.png'
import pencil from '../images/clarity_pencil-line.png'
import pencil2 from '../images/clarity_pencil-line (1).png'
import './calculator.css'
import Dropdown from './Dropdown/Dropdown';

export default function Calculator() {
    const [show, setShow] = useState(false);

    const handleClicked = () => {
        setShow(!show)
    }
    return (
        <div className="main-wrap">
            <div>
                <div className="header">
                    <h4>Calculator</h4>
                    <span>
                        <GrFormClose />
                    </span>
                </div>
                <div className="cake-usd">
                    <div className='cake-title'>
                        <img src={cake} alt="cake image" />
                        <span>cake</span>
                    </div>
                    <div className="cake-select">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <span>USD</span>

                </div>
                <div>
                    <div className="cake-field">
                        <input type="text" name="" value="" placeholder="2.10000 CAKE" />
                    </div>
                    <div className="balance">
                        <div>
                            <button>USE BALANCE</button>
                            <button>$1000</button>
                            <button>$100</button>
                        </div>
                        <div>
                            <sup>~ $20.82</sup>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="title">Timeframe</h4>
                    </div>
                    <div className="day">
                        <button className="active">1 Day</button>
                        <button>7 Day</button>
                        <button>30 Day</button>
                        <button>1 Year</button>
                        <button>5 Year</button>
                    </div>
                </div>
                <div className="apy-select">
                    <h4 className="title">Enable Accelerated APY</h4>
                    <div className="cake-select">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
                <div className="tier">
                    <span>Select Tier</span>
                    <div className="day">
                        <button>Tier1</button>
                        <button>Tier2</button>
                        <button>Tier3</button>
                        <button className="active">Tier4</button>
                        <button>Tier5</button>
                    </div>
                </div>
                <div>
                    <p className="roi">ROI at Current Rates</p>
                    <div>
                        <div className="cake-field">
                            <div onClick={handleClicked}>
                                {
                                    show ?
                                        <img src={pencil2} alt="Description of the image2" />
                                        :
                                        <img src={pencil} alt="Description of the image" />
                                }
                            </div>
                            <input type="text" name="" value="" placeholder="100.0 USD CAKE" />
                        </div>
                    </div>
                    <div className="quantity">
                        <span>~ 3CAKE + 10 DON</span>
                    </div>
                </div>
                <div className="submit-btns">
                    <button className="btns color">Apply</button>
                    <button className="btns trans">Cancel</button>
                </div>
                <Dropdown />
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import './dropdown.css'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <span>Show details</span>
                <i className={`icon ${isOpen ? 'up' : 'down'}`}><FaChevronDown /></i>
            </div>
            {isOpen &&
                <div className="dropdown-details">
                    <div className='apy-rate'>
                        <h4>APY</h4>
                        <h3>63.34%</h3>
                    </div>
                    <div className='details-info'>
                        <ul>
                            <li>Calculated based on current rates</li>
                            <li>All fugures are estimates provided for your convenience only,
                                and by no means represent guaranted returns.</li>
                        </ul>
                    </div>
                </div>}
        </div>
    )
}

export default Dropdown
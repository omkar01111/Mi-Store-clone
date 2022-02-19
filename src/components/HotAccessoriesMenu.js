import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
    return (
        <div className="hotAccessoriesMenu">
            <Link to="/music" className="hotAccessoriesLink">Music Store</Link>
            <Link to="/smartDevice" className="hotAccessoriesLink">Smart Device</Link>
            <Link to="/home" className="hotAccessoriesLink">Home</Link>
            <Link to="/lifestyle" className="hotAccessoriesLink">Lifestyle</Link>
            <Link to="/mobileAccessories" className="hotAccessoriesLink">Mobile Accessories</Link>

        </div>
    )
}

export default HotAccessoriesMenu

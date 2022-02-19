import React from 'react'
import HotItemCard from './HotItemCard.js'
import '../styles/HotAccessories.css'

const HotAccessories = ({music,musicCover ,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
    return (
        <div className="HotAccessories">
            <div>
            <img src={musicCover || smartDeviceCover || homeCover || mobileAccessoriesCover||lifestyleCover} alt="Cover" />
            </div>

            {/* {  } */}

            <div>
                {music && music.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
            
                {smartDevice && smartDevice.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
           
                {home && home.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
           
                {lifestyle && lifestyle.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
           
                {mobileAccessories && mobileAccessories.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                <HotItemCard image="https://www.mi.com/in/audio"/>
            </div>
        </div>
    )
}

export default HotAccessories

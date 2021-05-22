import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size=''}) => (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="content">
            <h3 className="title">{title.toUpperCase()}</h3>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem

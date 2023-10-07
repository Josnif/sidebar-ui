import React, { useState } from 'react'
import { menuItemType } from '../types/menu.types'

const MenuItem = ({title, path, children, icon, iconUrl, handleClick, tooltip } : menuItemType) => {
    // const [isActive, setIsActive] = React.useState(false);

    const isActive = false;
    const onPress = () => {
        // setIsActive(true);
        
    }

    return (
        <li>
            <a 
                href={path ?? '#'} 
                className={`${isActive ? 'active' : ''}`} 
                title={tooltip}
                onClick={onPress}
            >
                {(icon || iconUrl) && (
                    <div className="icon">
                        {iconUrl ? (
                            <img src={iconUrl} title={`${title} icon`} />
                        ) : null}
                        {icon}
                    </div>
                )}
                <span className="link hide">{title}</span>
            </a>
        </li>
    )
}

export default MenuItem
import React from 'react'

import './style.css'
import { Chevron } from '../../assets';
import MenuItem from '../common/MenuItem';
import { menuItemType } from '../types/menu.types';
export interface SidebarProps {
  id?: string;
  headerOption?: {
    logoUrl?: string;
    title?: string;
  };
  headerComponent?: React.ReactNode;
  menuList: menuItemType[],
  styles?: {
    backgroundColor?: string;
    textColor?: string;
    hoverColor?: string;
    hoverStyle?: object;
    activeColor?: string;
  }
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { id, headerOption, headerComponent, styles, menuList } = props;

  return (
    <nav>
      <div className="sidebar-top">
        <span className="expand-btn">
          <img src={Chevron} alt="Chevron" />
        </span>
        {headerOption ? (
          <>
            <img
              src={headerOption.logoUrl}
              className="logo"
              alt={headerOption.title ?? 'Logo'}
            />
            {headerOption?.title && (
              <h3 className="hide">{headerOption.title}</h3>
            )}
          </>
        ): null}
        {headerComponent}
      </div>
      <div className="sidebar-links">
        <ul>
          {menuList.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
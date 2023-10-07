import React from 'react';
import './style.css';
import { menuItemType } from '../types/menu.types';
export interface SidebarProps {
    id?: string;
    headerOption?: {
        logoUrl?: string;
        title?: string;
    };
    headerComponent?: React.ReactNode;
    menuList: menuItemType[];
    styles?: {
        backgroundColor?: string;
        textColor?: string;
        hoverColor?: string;
        hoverStyle?: object;
        activeColor?: string;
    };
}
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;

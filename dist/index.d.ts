import React from 'react';

type menuItemType = {
    title: string;
    path?: string | '#';
    icon?: React.ReactNode;
    iconUrl?: string;
    handleClick?: () => void;
    children?: menuItemType;
    tooltip?: string;
};

interface SidebarProps {
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

export { Sidebar };

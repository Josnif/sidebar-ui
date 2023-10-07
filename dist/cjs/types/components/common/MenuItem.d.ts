import React from 'react';
import { menuItemType } from '../types/menu.types';
declare const MenuItem: ({ title, path, children, icon, iconUrl, handleClick, tooltip }: menuItemType) => React.JSX.Element;
export default MenuItem;

import React from "react";

export type menuItemType = {
    title: string;
    path?: string | '#';
    icon?: React.ReactNode;
    iconUrl?: string;
    handleClick?: () => void;
    children?: menuItemType;
    tooltip?: string
}
import React from 'react';
import { Menu } from './menu';

export const Layout = (props) => {

    return <Menu>
        { props.children }
    </Menu>

}
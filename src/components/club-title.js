import React from 'react';
import './club-title.scss';

export const ClubTitle = (props) => (
    <h1 className="club-title">{ props.children }</h1>
);
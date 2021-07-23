import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test','btn--schedule'];

const SIZES = ['btn--medium', 'btn--large'];

const LINKS = ['/sign-up', '/sign-in', '/sign-out', '/schedule','/schedule/new','/fighters', '/fighters/new']

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const checkLink = LINKS.includes(link) ? link : LINKS[0]

    return (
        <Link to={ checkLink } className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                { children }
            </button>
        </Link>
    );
};

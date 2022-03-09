import React from 'react';
import './custom-button.styles.scss'
const CustomButton = ({children,isGoogleSignedIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignedIn ? 'google-signed-in' : ''} custom-button`} {...otherProps}>
        {children}
        </button>
    );
};

export default CustomButton;
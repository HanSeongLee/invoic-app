import React, {ButtonHTMLAttributes, useCallback} from "react";
import {useTheme} from "next-themes";

const DarkModeButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const {theme, setTheme, resolvedTheme} = useTheme();
    let src;

    switch (resolvedTheme) {
        case 'dark':
            src = '/img/icon-sun.svg';
            break;
        default:
            src = '/img/icon-moon.svg';
            break;
    };

    const onClick = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }, [theme]);

    return (
        <button onClick={onClick}
                {...props}
        >
            <img src={src}
                 alt={'change theme'}
            />
        </button>
    );
};

export default DarkModeButton;

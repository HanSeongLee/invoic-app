import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

const Logo: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.logo, className)}
             {...props}
        >
            <h1>
                <img src={'/logo.svg'}
                     alt={'invoice-app'}
                />
            </h1>
        </div>
    );
};

export default Logo;

import React, {ButtonHTMLAttributes} from 'react';
import styles from './style.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
};

const Button: React.FC<IProps> = ({ icon, children, ...props }) => {
    return (
        <button className={styles.button}
                type={'button'}
                {...props}
        >
            {icon && (
                <div className={styles.iconWrapper}>
                    <img className={styles.icon}
                         src={icon}
                         alt={''}
                    />
                </div>
            )}
            {children}
        </button>
    );
};

export default Button;

import React, {ButtonHTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    variants?: 'primary' | 'secondary' | 'danger' | 'link';
};

const Button: React.FC<IProps> = ({ icon, variants, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.icon]: icon,
            [styles.secondary]: variants === 'secondary',
            [styles.danger]: variants === 'danger',
        })}
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

Button.defaultProps = {
    variants: 'primary',
};

export default Button;

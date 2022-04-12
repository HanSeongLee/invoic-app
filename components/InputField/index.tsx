import React, {InputHTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from "classnames";

const InputField: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, children, ...props }) => {
    return (
        <div className={cn(styles.inputField, className)}>
            <label className={styles.label}
                   htmlFor={props?.id}
            >
                {children}
            </label>
            <input className={styles.input}
                   {...props}
            />
        </div>
    );
};

export default InputField;

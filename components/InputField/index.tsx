import React, {InputHTMLAttributes} from 'react';
import styles from './style.module.scss';

const InputField: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ children, ...props }) => {
    return (
        <div className={styles.inputField}>
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

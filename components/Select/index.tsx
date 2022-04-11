import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from "classnames";

interface IProps {
    id: string;
    name: string;
    value: string;
    options: {label: string, value: any}[];
    onChange: (value: any) => void;
};

const Select: React.FC<IProps> = ({
                                      id, name, value, onChange,
                                      options, children
                                  }) => {
    const [open, setOpen] = useState(false);

    const onClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const onOptionClick = useCallback((value: any) => {
        onChange(value);
        setOpen(false);
    }, []);

    return (
        <div className={cn(styles.select, {
            [styles.open]: open,
        })}>
            <label className={styles.label}
                   htmlFor={`${id}-button`}
            >
                {children}
            </label>
            <button id={`${id}-button`}
                    className={styles.button}
                    type={'button'}
                    onClick={onClick}
            >
                {options?.find(({ value: _value }) => _value === value)?.label}
            </button>
            <ul className={styles.optionContainer}>
                {options?.map(({label, value}, index) => (
                    <li className={styles.option}
                        onClick={_ => onOptionClick(value)}
                        key={index}
                    >
                        {label}
                    </li>
                ))}
            </ul>
            <input type={'text'}
                   value={value}
                   id={id}
                   name={name}
                   hidden
            />
        </div>
    );
};

export default Select;

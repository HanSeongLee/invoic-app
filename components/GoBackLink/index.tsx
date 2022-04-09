import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

interface IProps {
    href: string;
};

const GoBackLink: React.FC<IProps> = ({ href }) => {
    return (
        <Link href={href}>
            <a className={styles.goBackLink}>
                <img className={styles.icon}
                     src={'/img/icon-arrow-left.svg'}
                     alt={''}
                />
                Go back
            </a>
        </Link>
    );
};

export default GoBackLink;

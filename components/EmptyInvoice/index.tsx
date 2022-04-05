import React from 'react';
import styles from './style.module.scss';

const EmptyInvoice: React.FC = () => {
    return (
        <div className={styles.emptyInvoice}>
            <img className={styles.image}
                 src={'/img/illustration-empty.svg'}
                 alt={''}
            />
            <h2 className={styles.title}>
                There is nothing here
            </h2>
            <p className={styles.description}>
                Create an invoice by clicking the <strong>New</strong> button and get started
            </p>
        </div>
    );
};

export default EmptyInvoice;

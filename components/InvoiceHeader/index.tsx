import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from "../Container";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    invoiceCount?: number;
};

const InvoiceHeader: React.FC<IProps> = ({ invoiceCount, children, ...props }) => {
    return (
        <div className={styles.invoiceHeader}
             {...props}
        >
            <div className={styles.textContainer}>
                <div>
                    <h2 className={styles.title}>
                        Invoices
                    </h2>
                    <p className={styles.subtitle}>
                        {invoiceCount} invoices
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    {children}
                </div>
            </div>
        </div>
    );
};

InvoiceHeader.defaultProps = {
    invoiceCount: 0,
};

export default InvoiceHeader;

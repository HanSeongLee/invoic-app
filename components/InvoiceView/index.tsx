import React from 'react';
import styles from './style.module.scss';
import StatusBox from "../StatusBox";
import cn from "classnames";
import {toPriceString, toDateFormat} from "../../types/invoice/functions";

const InvoiceView: React.FC<Invoice> = ({
                                            id, createdAt, paymentDue, description,
                                            paymentTerms, clientName, clientEmail, status,
                                            senderAddress, clientAddress, items, total,
                                        }) => {
    return (
        <div className={styles.invoiceView}>
            <div className={styles.statusBox}>
                <span className={styles.label}>
                    Status
                </span>
                <StatusBox status={status}/>
            </div>

            <div className={styles.DetailsBox}>
                <div>
                    <div className={styles.idAndDescriptionContainer}>
                        <div className={styles.id}>
                            <span className={styles.hashtag}>
                                #
                            </span>
                            {id}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                    </div>
                    <div className={styles.address}>
                        {senderAddress.street}<br/>
                        {senderAddress.city}<br/>
                        {senderAddress.postCode}<br/>
                        {senderAddress.country}
                    </div>
                </div>
                <div className={styles.propertyContainer}>
                    <div className={cn(styles.property, styles.invoiceDate)}>
                        <div className={styles.label}>
                            Invoice Date
                        </div>
                        <div className={styles.value}>
                            {toDateFormat(createdAt)}
                        </div>
                    </div>
                    <div className={cn(styles.property, styles.billTo)}>
                        <div className={styles.label}>
                            Bill To
                        </div>
                        <div className={styles.value}>
                            {clientName}
                        </div>
                        <div className={styles.address}>
                            {clientAddress.street}<br/>
                            {clientAddress.city}<br/>
                            {clientAddress.postCode}<br/>
                            {clientAddress.country}
                        </div>
                    </div>
                    <div className={cn(styles.property, styles.paymentDue)}>
                        <div className={styles.label}>
                            Payment Due
                        </div>
                        <div className={styles.value}>
                            {toDateFormat(paymentDue)}
                        </div>
                    </div>
                    <div className={cn(styles.property, styles.sentTo)}>
                        <div className={styles.label}>
                            Sent to
                        </div>
                        <div className={styles.value}>
                            {clientEmail}
                        </div>
                    </div>
                </div>

                <div className={styles.itemBox}>
                    <ul className={styles.itemContainer}>
                        {items.map(({name, quantity, price, total}, index) => (
                            <li className={styles.item}
                                key={index}
                            >
                                <div>
                                    <div className={styles.name}>
                                        {name}
                                    </div>
                                    <div className={styles.quantityAndPrice}>
                                        {quantity} x £ {toPriceString(price)}
                                    </div>
                                </div>
                                <span className={styles.total}>
                                £ {toPriceString(total)}
                            </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.totalBox}>
                    <span>
                        Grand Total
                    </span>
                    <span className={styles.total}>
                        £ {toPriceString(total)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InvoiceView;

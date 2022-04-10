import React, {HTMLAttributes} from 'react';
import EmptyInvoice from "../../components/EmptyInvoice";
import data from '../../data/data.json';
import InvoiceCard from "../../components/InvoiceCard";
import Link from 'next/link';

const InvoiceContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props}>
            {data.length === 0 ? (
                <EmptyInvoice/>
            ) : (
                <>
                    {data.map((props) => (
                        <Link href={`/invoices/${props.id}`}>
                            <a>
                                <InvoiceCard {...props} />
                            </a>
                        </Link>
                    ))}
                </>
            )}
        </div>
    );
};

export default InvoiceContainer;

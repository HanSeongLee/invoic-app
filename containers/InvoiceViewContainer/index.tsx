import React, {useEffect, useState} from 'react';
import InvoiceView from "../../components/InvoiceView";
import data from '../../data/data.json';

interface IProps {
    id?: string | string[];
};

const InvoiceViewContainer: React.FC<IProps> = ({ id }) => {
    const [invoice, setInvoice] = useState<Invoice>({
        id: '',
        createdAt: '',
        paymentDue: '',
        description: '',
        paymentTerms: 0,
        clientName: '',
        clientEmail: '',
        status: '',
        senderAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        clientAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        items: [],
        total: 0,
    });

    useEffect(() => {
        if (!id) {
            return;
        }

        const invoice: Invoice = data.filter(({id: _id}) => _id === id)[0];
        setInvoice(invoice);
    }, [id]);

    return (
        <InvoiceView {...invoice} />
    );
};

export default InvoiceViewContainer;

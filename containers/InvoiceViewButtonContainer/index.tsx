import React, {CSSProperties} from 'react';
import FixedButtonContainer from "../../components/FixedButtonContainer";
import Button from "../../components/Button";
import Link from 'next/link';

interface IProps {
    id?: string | string[];
};

const InvoiceViewButtonContainer: React.FC<IProps> = ({ id }) => {
    return (
        <FixedButtonContainer>
            <Link href={`/invoices/${id}/edit`}>
                <a>
                    <Button variants={'secondary'}>
                        Edit
                    </Button>
                </a>
            </Link>
            <Button variants={'danger'}>
                Delete
            </Button>
            <Button style={{
                flex: 1,
            } as CSSProperties}>
                Mark as Paid
            </Button>
        </FixedButtonContainer>
    );
};

export default InvoiceViewButtonContainer;

import React, {CSSProperties} from 'react';
import FixedButtonContainer from "../../components/FixedButtonContainer";
import Button from "../../components/Button";
import Link from 'next/link';

interface IProps {
    id?: string | string[];
};

const InvoiceEditButtonContainer: React.FC<IProps> = ({ id }) => {
    return (
        <FixedButtonContainer shadow>
            <Link href={`/invoices/${id}`}>
                <a>
                    <Button variants={'secondary'}>
                        Cancel
                    </Button>
                </a>
            </Link>
            <Button type={'submit'}
                    style={{
                        flex: 1,
                        maxWidth: '138px',
                    } as CSSProperties}>
                Save Changes
            </Button>
        </FixedButtonContainer>
    );
};

export default InvoiceEditButtonContainer;

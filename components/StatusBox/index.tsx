import React from 'react';
import styles from './style.module.scss';

interface IProps {
    status: string;
};

const StatusBox: React.FC<IProps> = ({ status }) => {
    return (
        <div className={styles.statusBox}
             data-status={status?.toLowerCase()}
        >
            {status}
        </div>
    );
};

export default StatusBox;

import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";

const FixedButtonContainer: React.FC = ({ children }) => {
    return (
        <div className={styles.fixedButtonContainer}>
            <Container className={styles.container}>
                {children}
            </Container>
        </div>
    );
};

export default FixedButtonContainer;

import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import cn from "classnames";

interface IProps {
    shadow?: boolean;
};

const FixedButtonContainer: React.FC = ({ shadow, children }) => {
    return (
        <div className={cn(styles.fixedButtonContainer, {
            [styles.shadow]: shadow,
        })}>
            <Container className={styles.container}>
                {children}
            </Container>
        </div>
    );
};

FixedButtonContainer.defaultProps = {
    shadow: false,
};

export default FixedButtonContainer;

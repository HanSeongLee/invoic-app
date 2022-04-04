import React from 'react';
import styles from './style.module.scss';
import Logo from "../Logo";
import Avatar from "../Avatar";
import DarkModeButton from "../../containers/DarkModeButton";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Logo/>

            <div className={styles.rightSide}>
                <DarkModeButton className={styles.darkModeButton} />
                <div className={styles.avatarWrapper}>
                    <Avatar src={'/img/image-avatar.jpg'}/>
                </div>
            </div>
        </header>
    );
};

export default Header;

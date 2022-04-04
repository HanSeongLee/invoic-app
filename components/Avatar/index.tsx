import React, {ImgHTMLAttributes} from 'react';
import styles from './style.module.scss';

const Avatar: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return (
        <img className={styles.avatar}
             alt={''}
             {...props}
        />
    );
};

export default Avatar;

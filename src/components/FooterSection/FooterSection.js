import styles from './FooterSection.scss';

import React from 'react';

import Logo from 'components/common/Logo';

const FooterSection = () => (
    <footer className={styles.footer}>
        <Logo />
    </footer>
);

export default FooterSection;

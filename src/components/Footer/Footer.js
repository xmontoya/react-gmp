import styles from './Footer.scss';

import React from 'react';

import Logo from 'components/common/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;

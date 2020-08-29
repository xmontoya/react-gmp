import styles from './Header.scss';

import React from 'react';

import Button from 'components/common/Button';
import Logo from 'components/common/Logo';

import SearchBar from 'components/Header/SearchBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.container}>
            <div className={styles.topSection}>
                <Logo />
                <Button className={styles.addMovieButton} label="+ ADD MOVIE" />
            </div>
            <div className={styles.mainSection}>
                <SearchBar />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

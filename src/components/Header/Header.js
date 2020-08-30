import styles from './Header.scss';

import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import Logo from 'components/common/Logo';
import EditMovieModal from 'components/common/EditMovieModal';

import SearchBar from 'components/Header/SearchBar';

import * as Labels from 'constants/Labels';

const Header = () => {
    const [showHideModal, setShowHideModal ] = useState(false);

    const handleShowModal = () => {
        setShowHideModal(true);
    };

    const handleCloseModal = () => {
        setShowHideModal(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.topSection}>
                        <Logo />
                        <Button className={styles.buttonAddMovie} onClick={handleShowModal}>
                            <FontAwesomeIcon icon="plus" /> {Labels.ADD_MOVIE}
                        </Button>
                    </div>
                    <div className={styles.mainSection}>
                        <SearchBar />
                    </div>
                </div>
            </div>
            <EditMovieModal show={showHideModal} onCloseModal={handleCloseModal} />
        </header>
    );
};

export default Header;

import styles from './SearchPage.scss';

import React, { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import EditMovieModal from 'components/common/EditMovieModal';

import TopSection from 'components/common/TopSection';

import ContentSection from 'components/common/ContentSection';
import SearchBar from 'components/SearchPage/SearchBar';

import * as Labels from 'constants/Labels';

const SearchPage = () => {
    const [showHideModal, setShowHideModal] = useState(false);
    const location = useLocation();
    const isSearchPath = location.pathname.startsWith('/search/');

    const handleShowModal = () => {
        setShowHideModal(true);
    };

    const handleCloseModal = () => {
        setShowHideModal(false);
    };

    const addMovieAction = (
        <Button className={styles.buttonTop} onClick={handleShowModal}>
            <FontAwesomeIcon icon="plus" />
            { ' ' }
            {Labels.ADD_MOVIE}
        </Button>
    );

    const contentSection = isSearchPath
        ? <ContentSection />
        : <div className={styles.noContent} />;

    return (
        <Fragment>
            <TopSection action={addMovieAction}>
                <SearchBar />
            </TopSection>
            {contentSection}
            <EditMovieModal show={showHideModal} onCloseModal={handleCloseModal} />
        </Fragment>
    );
};

export default SearchPage;

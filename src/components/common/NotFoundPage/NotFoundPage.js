import styles from './NotFoundPage.scss';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from 'components/common/Button';
import Logo from 'components/common/Logo';

import * as Labels from 'constants/Labels';

const COMPONENT_PROPS = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
};

const NotFoundPage = ({ history }) => {
    const handleBackClick = () => history.push('/');

    return (
        <Fragment>
            <header className={styles.header}>
                <Logo />
            </header>
            <div className={styles.container}>
                <p className={styles.message}>{Labels.PAGE_NOT_FOUND}</p>
                <Button className={styles.button} onClick={handleBackClick}>
                    {Labels.GO_BACK_TO_HOME}
                </Button>
            </div>
        </Fragment>
    );
};

NotFoundPage.propTypes = COMPONENT_PROPS;

export default withRouter(NotFoundPage);

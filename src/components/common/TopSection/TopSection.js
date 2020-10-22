import styles from './TopSection.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Logo from 'components/common/Logo';

const COMPONENT_PROPS = {
    // eslint-disable-next-line react/forbid-prop-types
    action: PropTypes.object.isRequired,
    headerCls: PropTypes.string
};

const DEFAULT_PROPS = {
    headerCls: ''
};

const TopSection = ({ action, children, headerCls }) => (
    <header className={classnames(styles.header, headerCls)}>
        <div className={styles.overlay}>
            <div className={styles.topSection}>
                <Logo />
                {action}
            </div>
            <div className={styles.mainSection}>
                {children}
            </div>
        </div>
    </header>
);

TopSection.propTypes = COMPONENT_PROPS;
TopSection.defaultProps = DEFAULT_PROPS;

export default TopSection;

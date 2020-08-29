import styles from './Menu.scss';

import React from 'react';

const LEFT_SECTION = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
const RIGHT_SECTION = ['SORT BY', 'RELEASE DATE'];

const leftSection = LEFT_SECTION.map(section => <p>{section}</p>);
const rightSection = RIGHT_SECTION.map(section => <p>{section}</p>);

const Home = () => {
    return (
        <div className={styles.mainMenu}>
            <div className={styles.leftSection}>
                {leftSection}
            </div>
            <div className={styles.rightSection}>
                {rightSection}
            </div>
        </div>
    );
};

export default Home;
import styles from './ContentSection.scss';

import React, { useCallback, useState } from 'react';

import { useParams } from 'react-router-dom';

import Menu from 'components/common/Menu';
import MovieList from 'components/common/MovieList';

const ContentSection = () => {
    const [filter, setFilter] = useState('');
    const [sorting, setSorting] = useState('release_date');

    const { query } = useParams();

    const handleFilterChange = useCallback(filterValue => {
        setFilter(filterValue);
    }, [setFilter]);

    const handleSortingChange = useCallback(sortingValue => {
        setSorting(sortingValue);
    }, [setSorting]);

    return (
        <div className={styles.mainContent}>
            <div className={styles.container}>
                <Menu
                    filter={filter}
                    sorting={sorting}
                    onFilterChange={handleFilterChange}
                    onSortingChange={handleSortingChange} />
                <MovieList filter={filter} query={query} sorting={sorting} />
            </div>
        </div>
    );
};

export default ContentSection;

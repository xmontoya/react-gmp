import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        const { children } = this.props;

        return children;
    }
}

export default ErrorBoundary;

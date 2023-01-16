import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

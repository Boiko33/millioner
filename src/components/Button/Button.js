import React from 'react';
import PropTypes from 'prop-types';

import styles from './sass/Button.module.scss';

function Button({ title, onClick, style }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${style}`}
      onClick={onClick}
    >
      <p className={styles.title}>{title}</p>
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.string,
};

Button.defaultProps = {
  style: '',
};

export default Button;

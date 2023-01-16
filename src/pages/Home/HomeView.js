import React from 'react';
import PropTypes from 'prop-types';
import thumbUp from '../../assets/images/thumbUp.png';
import Button from '../../components/Button/Button';

import styles from './sass/Home.module.scss';

function HomeView({ startHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img alt="thumbUp" className={styles.thumbUp} src={thumbUp} />
        <div className={styles.rightBlock}>
          <p className={styles.title}>
            Who wants to be
            {' '}
            <br />
            {' '}
            a millionaire?
          </p>
          <Button onClick={startHandler} title="Start" />
        </div>
      </div>
    </div>
  );
}

HomeView.propTypes = {
  startHandler: PropTypes.func.isRequired,
};

export default HomeView;

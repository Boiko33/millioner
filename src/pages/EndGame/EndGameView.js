import React from 'react';
import PropTypes from 'prop-types';
import thumbUp from '../../assets/images/thumbUp.png';
import Button from '../../components/Button/Button';

import styles from './sass/EndGame.module.scss';

function EndGameView({ prize, tryAgainHandler, isMillionaire }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img alt="thumbUp" className={styles.thumbUp} src={thumbUp} />
        <div className={styles.rightBlock}>
          <div>
            {isMillionaire ? (
              <p className={styles.prize}>
                Congrats, you are a millionaire!
              </p>
            ) : (
              <>
                <p className={styles.title}>Total score:</p>
                <p className={styles.prize}>
                  {`$${prize} earned`}
                </p>
              </>
            )}
          </div>
          <Button onClick={tryAgainHandler} title="Try again" style={styles.btn} />
        </div>
      </div>
    </div>
  );
}

EndGameView.propTypes = {
  prize: PropTypes.string.isRequired,
  tryAgainHandler: PropTypes.func.isRequired,
  isMillionaire: PropTypes.bool.isRequired,
};

export default EndGameView;

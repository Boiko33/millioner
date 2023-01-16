import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sass/Game.module.scss';
import { FINISHED, INACTIVE } from '../../../config/constants';

function ProgressTree({ moneyList, activePrizeId }) {
  const progresItemStyle = (id) => {
    let itemStyle;
    if (id === INACTIVE) {
      itemStyle = styles.inactive;
    } else if (id === activePrizeId) {
      itemStyle = styles.active;
    } else if (id === FINISHED) {
      itemStyle = styles.finished;
    }
    return itemStyle;
  };
  const formattedValue = new Intl.NumberFormat();

  return (
    <div className={styles.progressContainer}>
      {moneyList.map(({ id, value }) => (
        <div
          key={id}
          className={`
          ${styles.progressItem} 
          ${progresItemStyle(id)}
        `}
        >
          <p className={styles.answerTitle}>
            {`$${formattedValue.format(value)}`}
          </p>
        </div>
      ))}
    </div>
  );
}

ProgressTree.propTypes = {
  moneyList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activePrizeId: PropTypes.number.isRequired,
};

export default ProgressTree;

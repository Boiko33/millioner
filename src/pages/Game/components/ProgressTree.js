import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sass/Game.module.scss';

function ProgressTree({ moneyList, activePrizeId }) {
  const progressItemStyle = (id) => {
    let itemStyle;
    if (id === activePrizeId) {
      itemStyle = styles.active;
    } else if (id < activePrizeId) {
      itemStyle = styles.finished;
    }
    return itemStyle;
  };
  const formattedValue = new Intl.NumberFormat();

  return (
    <div className={styles.progressContainer}>
      {moneyList.map(({ id, value }) => (
        <div
          key={`moneyList_${id}`}
          className={`
          ${styles.progressItem} 
          ${progressItemStyle(id)}
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

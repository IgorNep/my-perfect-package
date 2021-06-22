import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import ScaleCard from '../ScaleCard';
import RangeComponent from '../RangeComponent';
import Button from '../Button';
import ShareFiles from '../ShareFiles';
import ContactsInfo from '../ContactsInfo';
import ShareWithFriends from '../SahreWithFriends';

const scaleCardTitles = [
  'Atmosphere',
  'Menu',
  'Food',
  'Drinks',
  'Service',
  'Waiting time',
  'Cleanliness',
  'Value for money',
];

interface SurveyComponentProps {
  submitFeedbackHandler: () => void;
}

const SurveyComponent: React.FC<SurveyComponentProps> = ({
  submitFeedbackHandler,
}) => {
  return (
    <>
      <h2 className={classnames(styles.share__title, styles.title)}>
        That’s great! What do you like the most?
      </h2>
      <input
        className={(styles.shareInput, styles.input)}
        placeholder='Please share'
      />
      <ShareFiles />
      <ContactsInfo />
      <h2 className={classnames(styles.scale__title, styles.title)}>
        On a scale of 1 to 5, please evaluate
      </h2>
      <div className={styles.scale}>
        {scaleCardTitles.map((title) => (
          <ScaleCard title={title} />
        ))}
      </div>

      {/* ******************Range Component ******************************* */}
      <RangeComponent />
      <Button onClickHandler={submitFeedbackHandler} />
    </>
  );
};

export default SurveyComponent;

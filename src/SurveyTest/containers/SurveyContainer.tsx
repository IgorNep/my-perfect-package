import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import StartScreen from '../components/StartScreen';
import FinishScreen from '../components/FinishScreen';
import Header from '../components/Header';
import ShareContainer from './ShareContainer';
import FeedbackFaces from '../components/FeedbackFaces';
import SurveyComponent from '../components/SurveyComponent';
import styles from './styles.module.css';

const SurveyContainer = () => {
  const [isNext, setIsNext] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackDone, setFeedbackDone] = useState(false);
  const [openShareScreen, setOpenShareScreen] = useState(false);

  const faceClickHandler = () => {
    setIsNext(true);
  };
  const submitFeedbackHandler = () => {
    setFeedbackDone(true);
    setTimeout(() => {
      setFeedbackDone(false);
      setOpenShareScreen(true);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {isLoading ? (
          <StartScreen />
        ) : feedbackDone ? (
          <FinishScreen title="Thanks for your feedback!" />
        ) : (
          <>
            <Header isActive={isNext} />

            <div
              className={classnames(
                styles.feedbackFields,
                isNext && styles.feedbackFieldsActive
              )}
            >
              {openShareScreen ? (
                <ShareContainer />
              ) : (
                <>
                  {' '}
                  <FeedbackFaces faceClickHandler={faceClickHandler} />
                  {isNext && (
                    <SurveyComponent
                      submitFeedbackHandler={submitFeedbackHandler}
                    />
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyContainer;

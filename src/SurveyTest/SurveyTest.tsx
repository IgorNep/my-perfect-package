import React from 'react';
import SurveyContainer from './containers/SurveyContainer';

import { SurveyTestProps } from './SurveyTest.types';

const SurveyTest: React.FC<SurveyTestProps> = ({ text }) => (
  <>
    <SurveyContainer />
  </>
);

export default SurveyTest;

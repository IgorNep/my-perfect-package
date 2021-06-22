import React from 'react';
import styles from './styles.css';
import { TestComponentProps } from './TestComponent.types';

//import "./TestComponent.scss";
const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div className={styles.testComponent}>
    <h1 className={styles.testComponent}>I'm the test v2</h1>
    <div className={styles.logo}>testlogo</div>
  </div>
);

export default TestComponent;

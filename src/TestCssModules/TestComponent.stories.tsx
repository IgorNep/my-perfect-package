import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestCssModules"
};

export const Primary = () => <TestComponent theme="primary" />;

export const Secondary = () => <TestComponent theme="secondary" />;

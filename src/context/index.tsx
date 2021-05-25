import React from 'react';

import { CalculatorProvider } from './CalculatorContext';

const AppProvider: React.FC = ({ children }) => (
  <CalculatorProvider>{children}</CalculatorProvider>
);

export default AppProvider;

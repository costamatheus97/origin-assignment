import React, { createContext, useState, useContext } from 'react';

import { addMonths } from 'date-fns';

interface CalculatorContextData {
  totalAmount: string;
  setTotalAmount(amount: string): void;
  goalTarget: Date;
  setGoalTarget(target: Date): void;
}

const CalculatorContext = createContext<CalculatorContextData>(
  {} as CalculatorContextData
);

const CalculatorProvider: React.FC = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState<string>('');
  const [goalTarget, setGoalTarget] = useState<Date>(addMonths(new Date(), 1));

  return (
    <CalculatorContext.Provider
      value={{ totalAmount, setTotalAmount, goalTarget, setGoalTarget }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

function useCalculator(): CalculatorContextData {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { CalculatorProvider, useCalculator };

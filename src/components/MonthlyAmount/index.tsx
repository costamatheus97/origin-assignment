import React, { useCallback } from 'react';

import { format, differenceInCalendarMonths } from 'date-fns';
import { useCalculator } from '../../context/CalculatorContext';

import { formatCurrency } from '../../utils';

import { Container } from './styles';

const MonthlyAmount: React.FC = () => {
  const { goalTarget, totalAmount } = useCalculator();

  const numericTotalAmount = parseInt(totalAmount);

  const getMonthlyAmount = useCallback(() => {
    if (!numericTotalAmount) {
      return formatCurrency('USD', 0);
    } else if (!differenceInCalendarMonths(goalTarget, new Date())) {
      return formatCurrency('USD', numericTotalAmount);
    } else {
      return formatCurrency(
        'USD',
        numericTotalAmount / differenceInCalendarMonths(goalTarget, new Date())
      );
    }
  }, [goalTarget, numericTotalAmount]);

  const formattedAmount = formatCurrency('USD', numericTotalAmount);

  return (
    <Container className="monthlyAmount">
      <div className="monthlyAmount__row">
        <p className="monthlyAmount__title">Monthly amount</p>
        <strong className="monthlyAmount__amount">{getMonthlyAmount()}</strong>
      </div>
      <div className="monthlyAmount__row">
        <p className="monthlyAmount__paragraph">
          You’re planning {differenceInCalendarMonths(goalTarget, new Date())}{' '}
          monthly deposits to reach your{' '}
          <strong className="monthlyAmount__strong monthlyAmount__strong--value">
            {totalAmount ? formattedAmount : formatCurrency('USD', 0)}
          </strong>{' '}
          goal by
          <strong className="monthlyAmount__strong monthlyAmount__strong--target">
            {' '}
            {format(goalTarget, 'MMMM yyyy')}
          </strong>
          .
        </p>
      </div>
    </Container>
  );
};

export default MonthlyAmount;

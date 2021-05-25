import React, { useCallback, useEffect } from 'react';

import { useCalculator } from '../../context/CalculatorContext';
import { format, addMonths, subMonths } from 'date-fns';

import { Container, SelectContainer } from './styles';

const GoalTarget: React.FC = () => {
  const { goalTarget, setGoalTarget } = useCalculator();

  const month = format(goalTarget, 'MMMM');
  const year = format(goalTarget, 'yyyy');

  const handleNextMonth = useCallback(() => {
    setGoalTarget(addMonths(goalTarget, 1));
  }, [goalTarget, setGoalTarget]);

  const handlePrevMonth = useCallback(() => {
    const formattedGoalTarget = format(goalTarget, 'MMMM-yyyy');
    const minimumDate = format(addMonths(new Date(), 1), 'MMMM-yyyy');

    const isEqualToCurrentDate = minimumDate === formattedGoalTarget;

    if (!isEqualToCurrentDate) {
      setGoalTarget(subMonths(goalTarget, 1));
    }
  }, [goalTarget, setGoalTarget]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevMonth();
      }

      if (event.key === 'ArrowRight') {
        handleNextMonth();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handlePrevMonth, handleNextMonth]);

  return (
    <Container className="goalTarget">
      <label htmlFor="select" className="goalTarget__label">
        Reach goal by
      </label>
      <SelectContainer className="select" id="select">
        <button
          onClick={handlePrevMonth}
          className="select__button select__button--prev"
        >
          <svg
            className="select__icon select__icon--prev"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
              fill="#8A9CA9"
            />
          </svg>
        </button>
        <div className="select__wrapper">
          <strong className="select__strong">{month}</strong>
          <p className="select__paragraph">{year}</p>
        </div>
        <button
          onClick={handleNextMonth}
          className="select__button select__button--next"
        >
          <svg
            className="select__icon select__icon--next"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
              fill="#8A9CA9"
            />
          </svg>
        </button>
      </SelectContainer>
    </Container>
  );
};

export default GoalTarget;

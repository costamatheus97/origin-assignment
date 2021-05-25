import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { format, addMonths } from 'date-fns';

import App from '../src/App';

import Context from '../src/context/index';

import Calculator from '../src/components/Calculator';
import TotalAmount from '../src/components/TotalAmount';
import GoalTarget from '../src/components/GoalTarget';
import MonthlyAmount from '../src/components/MonthlyAmount';

describe('Rendering components', () => {
  it('should render App without crashing', () => {
    const component = shallow(<App />);

    expect(component.exists()).toEqual(true);
  });

  it('should render Calculator without crashing', () => {
    shallow(
      <Context>
        <Calculator />
      </Context>
    );
  });

  it('should render Total Amount without crashing', () => {
    shallow(
      <Context>
        <TotalAmount />
      </Context>
    );
  });

  it('should render Goal Target without crashing', () => {
    shallow(
      <Context>
        <GoalTarget />
      </Context>
    );
  });

  it('should render Monthly Amount without crashing', () => {
    shallow(
      <Context>
        <MonthlyAmount />
      </Context>
    );
  });
});

describe('Checking total value', () => {
  it('Should render the value input as empty', () => {
    const inputContainer = mount(
      <Context>
        <TotalAmount />
      </Context>
    );

    expect(inputContainer.find('input').prop('value')).toBe('');
  });
});

describe('Checking goal target', () => {
  it('Should have the minimum value as next month', () => {
    const targetContainer = mount(
      <Context>
        <GoalTarget />
      </Context>
    );

    const currentMonth = format(addMonths(new Date(), 1), 'MMMM');
    const currentYear = format(addMonths(new Date(), 1), 'yyyy');

    expect(targetContainer.find('strong').text()).toBe(currentMonth);
    expect(targetContainer.find('p').text()).toBe(currentYear);
  });

  it('Should go to next month with button click', () => {
    const targetContainer = mount(
      <Context>
        <GoalTarget />
      </Context>
    );

    act(() => {
      const nextButton = targetContainer.find('.select__button--next');
      nextButton.simulate('click');
    });

    const nextMonth = format(addMonths(new Date(), 2), 'MMMM');
    const nextYear = format(addMonths(new Date(), 2), 'yyyy');

    expect(targetContainer.find('strong').text()).toBe(nextMonth);
    expect(targetContainer.find('p').text()).toBe(nextYear);
  });

  it('Should go to previous month with button click', () => {
    const targetContainer = mount(
      <Context>
        <GoalTarget />
      </Context>
    );

    act(() => {
      const nextButton = targetContainer.find('.select__button--next');
      nextButton.simulate('click');
    });

    act(() => {
      const prevButton = targetContainer.find('.select__button--prev');
      prevButton.simulate('click');
    });

    const currentMonth = format(addMonths(new Date(), 1), 'MMMM');
    const currentYear = format(addMonths(new Date(), 1), 'yyyy');

    expect(targetContainer.find('strong').text()).toBe(currentMonth);
    expect(targetContainer.find('p').text()).toBe(currentYear);
  });

  it('Should go to next month with right arrow key press', () => {
    const targetContainer = mount(
      <Context>
        <GoalTarget />
      </Context>
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      document.dispatchEvent(event);
    });

    const nextMonth = format(addMonths(new Date(), 2), 'MMMM');
    const nextYear = format(addMonths(new Date(), 2), 'yyyy');

    expect(targetContainer.find('strong').text()).toBe(nextMonth);
    expect(targetContainer.find('p').text()).toBe(nextYear);
  });

  it('Should go to previous month with left arrow key press', () => {
    const targetContainer = mount(
      <Context>
        <GoalTarget />
      </Context>
    );

    act(() => {
      const nextEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      document.dispatchEvent(nextEvent);
    });

    act(() => {
      const prevEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      document.dispatchEvent(prevEvent);
    });

    const currentMonth = format(addMonths(new Date(), 1), 'MMMM');
    const currentYear = format(addMonths(new Date(), 1), 'yyyy');

    expect(targetContainer.find('strong').text()).toBe(currentMonth);
    expect(targetContainer.find('p').text()).toBe(currentYear);
  });

  it('Should not go to previous month if the minimum month is selected', () => {
    const targetContainer = mount(
      <Context>
        <GoalTarget />
      </Context>
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      document.dispatchEvent(event);
    });

    const nextMonth = format(addMonths(new Date(), 1), 'MMMM');
    const nextYear = format(addMonths(new Date(), 1), 'yyyy');

    expect(targetContainer.find('strong').text()).toBe(nextMonth);
    expect(targetContainer.find('p').text()).toBe(nextYear);
  });
});

describe('Checking monthly amount', () => {
  it('Should start as zero', () => {
    const monthlyAmount = mount(
      <Context>
        <MonthlyAmount />
      </Context>
    );

    expect(monthlyAmount.find('.monthlyAmount__amount').text()).toBe('$0.00');
  });

  it('Should change the goal target', () => {
    const monthlyAmount = mount(
      <Context>
        <MonthlyAmount />
      </Context>
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      document.dispatchEvent(event);
    });

    const targetDate = format(addMonths(new Date(), 1), 'MMMM yyyy');

    expect(monthlyAmount.find('.monthlyAmount__paragraph').text()).toBe(
      `You’re planning 1 monthly deposits to reach your $0.00 goal by ${targetDate}.`
    );
  });
});

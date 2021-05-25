import styled from 'styled-components';

export const Container = styled.section`
  max-width: 560px;
  width: 100%;
  padding: 40px;

  background: #fff;

  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);

  .calculator {
    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 28px;
    }

    &__image {
      margin-right: 1rem;
    }

    &__title {
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      color: #1e2a32;
    }

    &__subTitle {
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      color: #708797;
    }

    &__content {
      display: flex;
      flex-direction: column;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__submit {
      max-width: 320px;
      width: 100%;

      height: 56px;

      border: 0;
      border-radius: 32px;
      background: #1b31a8;

      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;

      margin: 2rem auto 0 auto;
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: initial;
    margin-bottom: 4rem;
    padding: 24px;

    .calculator__wrapper {
      flex-direction: column;
    }
  }
`;

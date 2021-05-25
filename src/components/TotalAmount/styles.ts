import styled from 'styled-components';

export const Container = styled.section`
  max-width: 272px;
  width: 100%;

  .totalAmount {
    &__label {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #1e2a32;
    }
  }

  @media (max-width: 768px) {
    max-width: initial;
    margin-bottom: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  height: 56px;

  padding: 0 12px;
  margin-top: 4px;

  .inputContainer {
    &__wrapper {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
    }

    &__input {
      font-family: Rubik;
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      color: #4d6475;
      border: 0;
      position: relative;

      overflow: hidden;
    }
  }
`;

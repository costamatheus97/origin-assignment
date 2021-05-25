import styled from 'styled-components';

export const Container = styled.section`
  max-width: 192px;
  width: 100%;

  .goalTarget {
    &__label {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #1e2a32;
    }
  }

  @media (max-width: 768px) {
    max-width: initial;
  }
`;

export const SelectContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  padding: 0 12px;
  margin-top: 4px;

  .select {
    &__button {
      background: #fff;
      border: 0;
    }

    &__wrapper {
      text-align: center;
    }

    &__paragraph {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #708797;
    }

    &__strong {
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: #1e2a32;
    }
  }
`;

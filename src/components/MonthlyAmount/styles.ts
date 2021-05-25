import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 24px;
  width: 100%;
  border: 1px solid #e9eef2;
  border-radius: 4px;

  .monthlyAmount {
    &__row {
      padding: 0 2rem;
      height: 80px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &:first-child {
        border-bottom: 1px solid #e9eef2;
      }

      &:last-child {
        background-color: #f4f8fa;
      }
    }

    &__amount {
      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      text-align: right;
      color: #0079ff;
    }

    &__title {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #1e2a32;
    }

    &__paragraph {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #1c1e1f;
    }

    @media (max-width: 768px) {
      &__title {
        font-size: 18px;
      }

      &__paragraph {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

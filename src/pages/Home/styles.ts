import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 80px);

  > h1 {
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: #1b31a8;

    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    height: initial;
  }
`;

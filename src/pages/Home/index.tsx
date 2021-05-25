/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Header from '../../components/Header';
import Calculator from '../../components/Calculator';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>
          Let's plan your <strong>saving goal.</strong>
        </h1>
        <Calculator />
      </Container>
    </>
  );
};

export default Home;

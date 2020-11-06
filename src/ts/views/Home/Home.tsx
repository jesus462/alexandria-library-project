import React, { FunctionComponent } from 'react';
import { BookCard } from "../../components";

import { Container } from "./styles";

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <BookCard />
    </Container>
  );
};

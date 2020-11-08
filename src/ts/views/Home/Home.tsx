import React, { FunctionComponent, useContext } from 'react';
import { Context } from "../../store/Context";
import { BookCard } from "../../components";

import { Container } from "./styles";

export const Home: FunctionComponent = () => {
  const { store } = useContext(Context);

  let mappedCards = store.books.map((book: any) => {
    return <BookCard key={book.id} book={book} />
  });

  return (
    <Container>
      {store.books.length >= 1 ? mappedCards : "No Match"}
    </Container>
  );
};

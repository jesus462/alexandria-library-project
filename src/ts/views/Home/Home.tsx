import React, { FunctionComponent, useContext } from 'react';
import { Context } from "../../store/Context";
import { BookCard } from "../../components";
import { Loading } from "../../components";

import { Container, NoMatchStyled } from "./styles";

export const Home: FunctionComponent = () => {
  const { store } = useContext(Context);

  let mappedCards = store.books.map((book: any) => {
    return <BookCard key={book.id} book={book} />
  });

  return (
    <Container>
      {store.loading.books ? (
        <Loading />
      ) : (
        store.books.length >= 1 ? mappedCards : <NoMatchStyled>No Match Found</NoMatchStyled>)}
    </Container>
  );
};

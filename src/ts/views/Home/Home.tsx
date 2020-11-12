import React, { FunctionComponent, useContext } from 'react';
import { Context } from "../../store/Context";
import { BookCard, Loading } from "../../components";

import { Container, NoMatchStyled, LandingContainer, LandingImage, Title, Text } from "./styles";

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
        store.books.length >= 1 ? (
          mappedCards 
        )
        : (store.searching ?
        (<NoMatchStyled>
          No Match Found
        </NoMatchStyled>) 
        : (
          <LandingContainer>
            <LandingImage alt="school of athens - raphael sanzio" src="https://res.cloudinary.com/duu99bl6f/image/upload/v1605112988/Alexandria/school-of-athens-test.jpg" />
            <Title>Welcome to Alexandria</Title>
            <Text>
              May this space be a lighthouse in your search and guide you towards what you seek, 
              approach knowledge with an open mind, do not suppose to know what you don't. May you 
              find what you seek and in the process with luck you'll find yourself.
            </Text>
            <Text quote><i>'Be curious, not judgemental' - Walt Whitman</i></Text>
          </LandingContainer>
          )
        )
      )}
    </Container>
  );
};

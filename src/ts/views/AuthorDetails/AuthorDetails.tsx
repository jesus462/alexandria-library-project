import React, { FunctionComponent, useContext } from "react";
import { Context } from "../../store/Context";
import parse from "html-react-parser";
import { Loading } from "../../components";
import { 
    Container, 
    AuthorImage, 
    DetailsContainer, 
    DividerVertical, 
    DividerHorizontal, 
    Details, 
    Text, 
    BooksList, 
    BookImage } from "./styles";

export const AuthorDetails: FunctionComponent = () => {
    const { store} = useContext(Context);

    return (
        <Container>
            {store.loading.author ? (
                <Loading />
            ) : (
                <DetailsContainer>
                    <AuthorImage src={store.author[0].image_url} />
                    <DividerVertical />
                    <Details>
                        <Text header><strong>{store.author[0].name}</strong></Text>
                        <Text><strong><i>Hometown: {store.author[0].hometown}</i></strong></Text>
                        <Text><strong><i>Followers: {store.author[0].fans_count}</i></strong></Text>
                        <DividerHorizontal />
                        <Text>{parse(store.author[0].about)}</Text>
                        <BooksList>
                            {store.author[0].books.book.map((book: any) =>{
                                return <BookImage key={book.id} src={book.image_url} />;
                            })}
                        </BooksList>
                    </Details>
                </DetailsContainer>
            )}
        </Container>
    );
};
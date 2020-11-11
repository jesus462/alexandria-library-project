import React, { FunctionComponent, useContext, useState } from "react";
import { Context } from "../../store/Context";
import parse from "html-react-parser";
import { Loading, BookDetailModal } from "../../components";
import { useModal } from "../../hooks";

import { 
    Container, 
    AuthorImage, 
    DetailsContainer, 
    DividerVertical, 
    DividerHorizontal, 
    Details, 
    Text, 
    BooksList, 
    BookImage,
    Subtitle,
    Title,
} from "./styles";

export const AuthorDetails: FunctionComponent = () => {
    const { store} = useContext(Context);
    const { show, toggle } = useModal();
    const [bookModal, setBookModal] = useState<any>([]);

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
                        <Title><strong>Books of the author</strong></Title>
                        <Subtitle><i>(Click the book for details)</i></Subtitle>
                        <BooksList>
                            {store.author[0].books.book.map((book: any) =>{
                                return <BookImage onClick={() =>{ 
                                    toggle();
                                    setBookModal([book]);
                                }} key={book.id} src={book.image_url} />;
                            })}
                        </BooksList>
                        <BookDetailModal book={bookModal} show={show} hide={toggle} />
                    </Details>
                </DetailsContainer>
            )}
        </Container>
    );
};
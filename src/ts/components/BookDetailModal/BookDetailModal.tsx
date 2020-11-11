import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import parse from "html-react-parser";

import {
    ModalOverlay,
    ModalWrapper,
    Modal,
    Header,
    Title,
    Button,
    DividerHorizontal,
    Main,
    Text,
    BookImage,
} from "./styles"

interface BookDetailModalProps {
    show: boolean;
    hide: () => void;
    book: any;
};

export const BookDetailModal: FunctionComponent<BookDetailModalProps> = ({ book, show, hide }) => {
    return show 
    ? ReactDOM.createPortal(
        <>
            <ModalOverlay />
            <ModalWrapper>
                <Modal>
                    <Header>
                        <BookImage src={book[0].small_image_url} />
                        <Title>{book[0].title}</Title>
                        <Button onClick={hide}>X</Button>
                    </Header>
                    <Main>
                        <Text><i><strong>Isbn:</strong> {book[0].isbn}</i></Text>
                        <Text><i><strong>Text reviews count:</strong> {book[0].text_reviews_count}</i></Text>
                        <Text><i><strong>N° of pages:</strong> {book[0].num_pages}</i></Text>
                        <Text><i><strong>Format:</strong> {book[0].format}</i></Text>
                        <Text><i><strong>Year of publication:</strong> {book[0].publication_year}</i></Text>
                        <Text><i><strong>Ratings count:</strong> {book[0].ratings_count}</i></Text>
                        <Text><i><strong>Average rating:</strong> {book[0].average_rating}</i></Text>
                        <Text><i><strong>Goodreads Link:</strong> <a href={book[0].link} target="_blank">Click Here</a></i></Text>
                        <DividerHorizontal />
                        <Text justify>{parse(`${parse(book[0].description)}`)}</Text>
                    </Main>
                </Modal>
            </ModalWrapper>
        </>,
        document.body
    ) : null;
};

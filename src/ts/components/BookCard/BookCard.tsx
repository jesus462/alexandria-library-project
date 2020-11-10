import React, { FunctionComponent, useContext } from "react";
import { Context } from "../../store/Context";
import { Link } from "react-router-dom";
import { stringChecker, dateChecker } from "../../utils";

import { Card, Text, Image, Container } from "./styles";

interface BookCardProps {
    book: any;
}

export const BookCard: FunctionComponent<BookCardProps> = ({book}) => {
    const { actions, store } = useContext(Context);

    let day = book.original_publication_day;
    let month = typeof book.original_publication_month === "string" ? book.original_publication_month : (book.original_publication_month - 1);
    let year = book.original_publication_year;
    
    return(
        <Card>
            <Container header>
                <Text bold>{typeof book.best_book.title === "number" ? book.best_book.title : stringChecker(book.best_book.title)}</Text>
                <Link onClick={() => {
                        if (store.loading.author === false)  {
                            actions.setLoading(store.loading.author, "author");
                        }
                        actions.fetchAuthor(book.best_book.author.id);
                    }} 
                    to="/author">
                <Text><i>{book.best_book.author.name}</i></Text>
                </Link>
            </Container>
            <Image src={`${book.best_book.image_url}`} />
            <Container>
                <Text>{book.average_rating}</Text>
                <Text>{dateChecker(day, month, year)}</Text>
            </Container>
        </Card>
    );
}
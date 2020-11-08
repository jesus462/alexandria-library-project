import React, { FunctionComponent } from "react";
import { stringChecker, dateChecker } from "../../utils";

import { Card, Text, Image, Container } from "./styles";

interface BookCardProps {
    book: any;
}

export const BookCard: FunctionComponent<BookCardProps> = ({book}) => {
    let day = book.original_publication_day;
    let month = typeof book.original_publication_month === "string" ? book.original_publication_month : (book.original_publication_month - 1);
    let year = book.original_publication_year;
    
    return(
        <Card>
            <Container header>
                <Text bold>{stringChecker(book.best_book.title)}</Text>
                <Text>{book.best_book.author.name}</Text>
            </Container>
            <Image src={`${book.best_book.image_url}`} />
            <Container>
                <Text>{book.average_rating}</Text>
                <Text>{dateChecker(day, month, year)}</Text>
            </Container>
        </Card>
    );
}
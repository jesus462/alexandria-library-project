import React, { FunctionComponent } from "react";

import { Card, Text, Image, Container } from "./styles";

export const BookCard: FunctionComponent = () => {
    return(
        <Card>
            <Container>
                <Text bold>Book title</Text>
                <Text>Book author</Text>
            </Container>
            <Image src="https://edit.org/img/blog/xwdn-editar-portadas-de-libros-gratis.jpg.pagespeed.ic.PmNhyGc59r.jpg"/>
            <Container>
                <Text>Book ratings</Text>
                <Text>Book publication date</Text>
            </Container>
        </Card>
    );
}
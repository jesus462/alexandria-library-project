import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthorDetails } from "../AuthorDetails";
import { Context } from "../../store/Context";
import { BrowserRouter, Route } from "react-router-dom";


const renderAuthorDetails = (props: any) => {
  return render(
    <Context.Provider value={props}>
        <BrowserRouter>
            <Route>
                <AuthorDetails />
            </Route>
        </BrowserRouter>
    </Context.Provider>
  );
}

const props = {
    store: {
        author: [{
            about: "",
            books: {book: [{id: 3, image_url: "https://i.gr-assets.com/i"}, {id: 2, image_url: "https://i.gr-assets.com/i"}]},
            fans_count: 211314,
            hometown: "Yate, South Gloucestershire, England",
            id: 1077326,
            image_url: "https://images.gr-assets.com/authors/1596216614p5/1077326.jpg",
            name: "J.K. Rowling",
        }],
        loading: {
            author: false,
        },
    }
};
const setNoAuthorSelected = () => {
    props.store.author = [];
}

describe('(views) AuthorDetails test suite', () => {
    it("renders authors data correctly", () => {
        renderAuthorDetails(props);
        const author = "J.K. Rowling";
        const hometown = "Hometown: Yate, South Gloucestershire, England";
        const followers = "Followers: 211314";

        
        expect(screen.getByText(author)).toBeInTheDocument();
        expect(screen.getByText(hometown)).toBeInTheDocument();
        expect(screen.getByText(followers)).toBeInTheDocument();
    });

    it("renders message no author selected", () => {
        setNoAuthorSelected();
        renderAuthorDetails(props);
        const backMessage = "Back, No author selected";

        expect(screen.getByText(backMessage)).toBeInTheDocument();
    });
  });
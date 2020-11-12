import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../Home";
import { Context } from "../../store/Context";


const renderHome = (props: any) => {
  return render(
    <Context.Provider value={props}>
      <Home />
    </Context.Provider>
  );
}

const props = {
  store: {
    books: [],
    loading: {
      books: false,
    },
    searching: false,
  }
};
const setNoMatch = () => {
  props.store.searching = true;
};

describe('(views) Home test suite', () => {
  it("renders landing with correct copy's", () => {
    renderHome(props);
    const title = "Welcome to Alexandria";
    const message = "May this space be a lighthouse in your search and guide you towards what you seek, approach knowledge with an open mind, do not suppose to know what you don't. May you find what you seek and in the process with luck you'll find yourself.";
    const quote = "'Be curious, not judgemental' - Walt Whitman"

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(quote)).toBeInTheDocument();
  });
  
  it("renders visual queue if searching and no match found", () => {
    setNoMatch();
    renderHome(props);
    const noMatch = "No Match Found";

    expect(screen.getByText(noMatch)).toBeInTheDocument();
  });
});

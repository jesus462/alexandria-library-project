import React, { FunctionComponent } from "react";

import { LoadingStyled } from "./styles"

export const Loading: FunctionComponent = () => {

    return (
        <LoadingStyled className="fas fa-book"> Loading...</LoadingStyled>
    );
};
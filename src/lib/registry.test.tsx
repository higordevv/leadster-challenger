import React from "react";
import { render } from "@testing-library/react";
import StyledComponentsRegistry from "./registry";
import styled from "styled-components";

const TestTitle = styled.h1`
  color: "black";
  font-size: 2rem;
  font-family: sans-serif;
`;

describe("StyledComponentsRegistry", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <StyledComponentsRegistry>
        <TestTitle>Hello, world!</TestTitle>
      </StyledComponentsRegistry>
    );

    expect(getByText("Hello, world!")).toBeInTheDocument
  });
  
});

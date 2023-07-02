import React from "react";
import { render } from "@testing-library/react";
import Navbar from ".";

describe("NavBar", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText("Hello, world!")).toBeInTheDocument;
  });
});

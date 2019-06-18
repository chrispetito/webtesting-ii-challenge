import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import { isTSAnyKeyword } from "@babel/types";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("Dashboard renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
describe("Ball Button", () => {
  it("adds one ball to the count", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/ball/i);
    fireEvent.click(button);
  });
});
describe("Strike Button", () => {
  it("adds one strike to the count", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/strike/i);
    fireEvent.click(button);
  });
});
describe("Foul Button", () => {
  it("adds one strike to the count if there are less than 2", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/foul/i);
    fireEvent.click(button);
  });
});
describe("Hit Button", () => {
  it("reduces strikes and balls down to zero after a hit is recorded", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/hit/i);
    fireEvent.click(button);
  });
});

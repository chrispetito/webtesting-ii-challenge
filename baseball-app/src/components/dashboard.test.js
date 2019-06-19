import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("Dashboard renders without crashing", () => {
    render(<Dashboard />)
  });
});
describe("Ball Button", () => {
  it("adds one ball to the count", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/^ball$/i);
    fireEvent.click(button);
    getByText(/^Balls: 1$/i);
  });
});
describe("Strike Button", () => {
  it("adds one strike to the count", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/^strike$/i);
    fireEvent.click(button);
    // console.log(button)
    getByText(/^Strikes: 1$/i);
    // expec(/^strikes: 1$/i)).toBe('Strikes: 1')
  });
});
describe("Foul Button", () => {
  it("adds one strike to the count if there are less than 2", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/^foul$/i);
    fireEvent.click(button);
    getByText(/^Strikes: 1$/i);
  });
});
describe("Hit Button", () => {
  it("reduces strikes and balls down to zero after a hit is recorded", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/^hit$/i);
    fireEvent.click(button);
    getByText(/^Balls: 0$/i);
    getByText(/^Strikes: 0$/i);
  });
});

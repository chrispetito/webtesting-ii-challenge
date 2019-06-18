import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders Baseball Counter at top of app', () => {
    const { getByText } = render(<App />)
    getByText(/baseball counter/i)
  })
  it('renders balls header in count box', () => {
    const { getByText } = render(<App />)
    getByText(/balls/i)
  })
  it('renders strikes header in count box', () => {
    const { getByText } = render(<App />)
    getByText(/strikes/i)
  })

});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./Display";

describe('<Display />', () => {
    it('Display renders without crashing', () => {
        render(<Display />)
    })
    it('display matches snapshot', () => {
        const { container } = render(<Display />)
        expect(container).toMatchSnapshot();
    })
})
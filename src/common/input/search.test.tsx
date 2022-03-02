import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Props } from "./search.field";
import { Search } from "../index";

describe("Should render an editable text-area.", () => {
  const onClick = jest.fn();

  let props: Props = {
    value: "",
    onClick,
  };

  beforeEach(() => {
    onClick.mockClear();

    props = {
      value: "",
      onClick,
    };
  });

  it("should handle rendering a text input.", () => {
    render(<Search {...props} />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("should handle rendering a button.", () => {
    render(<Search {...props} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should handle an default value.", () => {
    props.value = "Hello World";
    render(<Search {...props} />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    expect(input.value).toEqual(props.value);
  });

  it("should handle the 'on click' action.", () => {
    const value = "hey";

    render(<Search {...props} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value } });
    fireEvent.click(button);

    expect(onClick).toHaveBeenLastCalledWith(value);
  });
});

import { render, screen } from "@testing-library/react";

import { Button, ButtonTheme } from "./Button";

describe("<Button>", () => {
  test("should render button with given text", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("should render button with 'clear' in its class name", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});

import { fireEvent, screen } from "@testing-library/react";

import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";

describe("<Sidebar>", () => {
  test("should render sidebar", () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("should collapse / expand on toggle button click", () => {
    componentRender(<Sidebar />);

    const toggleButton = screen.getByTestId("sidebar-toggle");

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});

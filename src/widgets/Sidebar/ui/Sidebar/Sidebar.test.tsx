import { fireEvent, screen } from "@testing-library/react";

import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("<Sidebar>", () => {
  test("should render sidebar", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("should collapse / expand on toggle button click", () => {
    renderWithTranslation(<Sidebar />);

    const toggleButton = screen.getByTestId("sidebar-toggle");

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});

import { classNames } from "./classNames";

describe("classNames", () => {
  const className = "anyClass";
  const additionalClasses = ["classOne", "classTwo"];
  const mods = {
    hovered: true,
    scrollable: true,
    expanded: false,
  };

  test("should return class name if provided with class name", () => {
    const actual = classNames(className);
    const expected = "anyClass";
    expect(actual).toBe(expected);
  });

  test("should return a string of joined class names if provided with additional classes", () => {
    const actual = classNames(className, {}, additionalClasses);
    const expected = "anyClass classOne classTwo";
    expect(actual).toBe(expected);
  });

  test("should append modifiers that are truthy when provided with mods", () => {
    const actual = classNames(className, mods, additionalClasses);
    expect(actual).toContain("scrollable");
    expect(actual).toContain("hovered");
    expect(actual).not.toContain("expanded");
  });
});

import { render, screen, cleaup } from "@testing-library/react";
import Tabs from "../Tabs";

test("should render Tabs component and have all contacts text", () => {
  render(<Tabs />);
  const tabsElement = screen.getByTestId("tabs-1");
  expect(tabsElement).toBeInTheDocument();
  expect(tabsElement).toHaveTextContent("all contacts");
});

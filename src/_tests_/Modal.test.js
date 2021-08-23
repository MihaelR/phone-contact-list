import { render, screen, cleaup, cleanup } from "@testing-library/react";
import { SimpleModal } from "../Modal";

afterEach(() => {
  cleanup();
});

test("Modal should be button ", () => {
  render(<SimpleModal />);
  const modalElement = screen.getByTestId("modal-1");
  expect(modalElement).toContainHTML("</button>");
});

test("Modal should have name and surname from props", () => {
  render(<SimpleModal name="luka" surname="bredif" />);
  const modalElement = screen.getByTestId("modal-1");
  expect(modalElement).toHaveTextContent("luka");
  expect(modalElement).toHaveTextContent("bredif");
});
rew;

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";  // Update the import path to point to components/App.js

test("displays in 'light' mode when initialized", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".light-mode")).toBeInTheDocument();
});

test("changes to 'dark' mode when the button is clicked", () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByText(/Toggle Dark Mode/));
  expect(container.querySelector(".dark-mode")).toBeInTheDocument();
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByText(/Toggle Dark Mode/));
  fireEvent.click(screen.getByText(/Toggle Dark Mode/));
  expect(container.querySelector(".light-mode")).toBeInTheDocument();
});

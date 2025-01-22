import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App"; // Corrected import path
import "@testing-library/jest-dom";

test("displays in 'light' mode when initialized", () => {
  render(<App />);
  expect(screen.getByText("Shopster")).toBeInTheDocument();
  expect(screen.getByText("Light Mode")).toBeInTheDocument();
});

test("changes to 'dark' mode when the button is clicked", () => {
  render(<App />);
  const button = screen.getByText("Light Mode");
  fireEvent.click(button);
  expect(screen.getByText("Dark Mode")).toBeInTheDocument();
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  render(<App />);
  const button = screen.getByText("Light Mode");
  fireEvent.click(button);
  fireEvent.click(button);
  expect(screen.getByText("Light Mode")).toBeInTheDocument();
});
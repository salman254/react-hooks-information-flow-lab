import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header"; // Corrected import path
import "@testing-library/jest-dom";

test("displays the toggle button", () => {
  render(<Header onDarkModeClick={() => {}} isDarkMode={false} />);
  expect(screen.getByText("Light Mode")).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} isDarkMode={false} />);
  const button = screen.getByText("Light Mode");
  fireEvent.click(button);
  expect(onDarkModeClick).toHaveBeenCalled();
});
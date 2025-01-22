import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter"; // Corrected import path
import "@testing-library/jest-dom";

test("displays the <select> element", () => {
  render(<Filter onCategoryChange={() => {}} />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();
  render(<Filter onCategoryChange={onCategoryChange} />);
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "Dairy" } });
  expect(onCategoryChange).toHaveBeenCalled();
});
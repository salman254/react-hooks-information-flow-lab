import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";
import "@testing-library/jest-dom";

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  render(<Item name="Yogurt" category="Dairy" />);

  // Find the button and click it
  const button = screen.getByText("Add to Cart");
  fireEvent.click(button);

  // Check if the <li> element has the 'in-cart' class
  const listItem = screen.getByText("Yogurt").closest("li");
  expect(listItem).toHaveClass("in-cart");
});
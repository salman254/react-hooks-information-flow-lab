import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList"; // Corrected import path
import "@testing-library/jest-dom";

test("displays all items when initially rendered", () => {
  const items = [
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
  ];
  render(<ShoppingList items={items} />);
  expect(screen.getByText("Yogurt")).toBeInTheDocument();
  expect(screen.getByText("Pomegranate")).toBeInTheDocument();
});
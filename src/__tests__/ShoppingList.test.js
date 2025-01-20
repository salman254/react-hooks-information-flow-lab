import { render, screen } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";  // Update the import path to point to components/ShoppingList.js

test("displays all items when initially rendered", () => {
  const testData = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Bread", category: "Bakery" },
  ];
  const { container } = render(<ShoppingList items={testData} />);
  expect(container.querySelector(".Items").children).toHaveLength(testData.length);
});

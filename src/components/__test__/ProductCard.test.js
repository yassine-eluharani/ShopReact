import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { BrowserRouter } from "react-router-dom";

describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    title: "Sample Product",
    image: "sample-image.jpg",
    price: 19.99,
    rating: { rate: 4.5 },
  };

  it("renders product details correctly", () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />,
      </BrowserRouter>,
    );

    expect(getByText("Sample Product")).toBeInTheDocument();
    expect(getByText("Price: $19.99")).toBeInTheDocument();
    expect(getByText("Rating: 4.5")).toBeInTheDocument();

    const image = getByAltText("Sample Product");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("sample-image.jpg");
  });

  it("links to the correct product page", () => {
    const { container } = render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />,
      </BrowserRouter>,
    );

    const link = container.querySelector("a"); // Assuming you use an <a> for the Link component
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/product/1"); // Assuming the ID is 1
  });
});

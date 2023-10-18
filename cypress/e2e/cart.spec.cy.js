describe("shop react APP ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("displays products on home screen", () => {
    cy.get("h1").should("have.text", "Product List");
  });

  it("goes to the product page when an item is clicked", () => {
    cy.get(
      ".product-list > :nth-child(3) > a > .product-details > .product-title",
    )
      .invoke("text")
      .then((productName) => {
        productName = productName.trim();

        cy.get(".product-list > :nth-child(3)").click();

        cy.url().should("include", "3");

        cy.get("h2").should("have.text", productName);
      });
  });

  it("goes to the product page and adds an item to the cart", () => {
    let initialCartItemCount;
    cy.get(".right > :nth-child(2) > a")
      .invoke("text")
      .then((text) => {
        initialCartItemCount = text.trim();
      });

    cy.get(".product-list > :nth-child(3)").click();

    cy.get(".add-to-cart-button").click();

    cy.get(".right > :nth-child(2) > a").should("have.text", "My cart (1)");
  });
});

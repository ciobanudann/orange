describe("test book details", () => {
  it("user can add to favorites", () => {
    cy.visit("/books/OugCAAAAMBAJ");
    const favoriteButton = cy.getByTestId("favorites-button");
    favoriteButton.should("exist");
    favoriteButton.should("contain.text", "Add to Favorites");
    favoriteButton.click();
    favoriteButton.should("contain.text", "Remove from Favorites");
    favoriteButton.click();
    cy.getByTestId("title").should("contain.text", "New York Magazine");
    cy.getByTestId("description").should(
      "contain.text",
      "New York magazine was born in 1968 after a run as an insert of the New York Herald Tribune and quickly made a place for itself as the trusted resource for readers across the country. With award-winning writing and photography covering everything from politics and food to theater and fashion, the magazine's consistent mission has been to reflect back to its audience the energy and excitement of the city itself, while celebrating New York as both a place and an idea."
    );
  });
});

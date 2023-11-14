describe("test books list", () => {
  it("books list user flow", () => {
    cy.visit("/");
    const searchInput = cy.getByTestId("book-search-input");
    searchInput.should("exist");
    cy.getByTestId("waiting-to-type").should("exist");
    searchInput.type("100 Must-read Classic Novels");

    const firstBook = cy.getByTestId(
      "book-card-title-100 Must-read Classic Novels"
    );
    firstBook.should("exist");
    firstBook.click();
    cy.url().should("include", "books/4nDlAAAAMAAJ");

    cy.getByTestId("title").should(
      "contain.text",
      "100 Must-read Classic Novels"
    );

    cy.getByTestId("description").should(
      "contain.text",
      "Want to become a classic novel buff, or expand your reading of some of the finest novels ever published? This is a good place to start! From the publishers of the popular, Good Reading Guide comes a rich selection of writing that has made an everlasting impression on our literary heritage. With 100 of the best titles fully reviewed and a further 500 recommended, you’ll quickly set out on a journey of discovery. The book also allows you to browse by theme, includes ‘a reader’s fast-guide to the classics’, past award-winners and book club recommendations."
    );
  });
});

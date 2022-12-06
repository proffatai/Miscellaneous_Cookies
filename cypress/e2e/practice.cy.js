describe("empty spec", () => {
  it("Playing with list", () => {
    cy.visit("https://www.tutorialspoint.com/categories/development");
    cy.get(".all-category-list-view").find("li").should("have.length", 10);
    cy.get(".all-category-list-view >li:last-of-type").click(); // getting the last item
    cy.go(-1);
    cy.get(".all-category-list-view >li:first-of-type").click(); // getting the first item
    cy.go("back");
    cy.get(".all-category-list-view >li:nth-of-type(5)").click(); // getting the mid item
    
    
    cy.get(" #txt-fld").should("have.value", "Cypress");
  });

  it.only("Implicit Assertions", () => {
    cy.visit("https://www.tutorialspoint.com/videotutorials/index.php");
    
    cy.get("#product-div > label:first-of-type > span").should("have.class", "test").then(text=>{
        const expected=text.text()
        expect(expected).to.equal(' Videos ')
    });
    cy.get(".uk-form-controls > label >#hi").should("have.value", "hi");
  });

  it("Explicit assertion", () => {
    cy.visit("https://accounts.google.com");
    cy.get("#headingText > span").then((e) => {
      const t = e.text(); // .text() is used to extract the text of a web element

      expect(t).to.contains("Sign");
    });
  });
});

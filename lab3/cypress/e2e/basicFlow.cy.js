describe("BookZaar basic flow", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("shows homepage", () => {
        cy.contains("BookZaar").should("be.visible");
    });

    it("shows the HeroSection", () => {
        cy.get(".hero-section").should("exist").and("be.visible");
    });

    it("shows the CategoriesNav", () => {
        cy.get(".categories-nav").should("exist").and("be.visible");
    });

    it("shows the NewAndNoticeable section", () => {
        cy.get(".new-noticeable-section").should("exist").and("be.visible");
    });

    it("navigates to Shop page", () => {
        cy.contains("a", "Shop").click();
        cy.url().should("include", "/shop");
    });

    it("navigates to Sell page", () => {
        cy.contains("a", "Sell").click();
        cy.url().should("include", "/sell");
    });
});
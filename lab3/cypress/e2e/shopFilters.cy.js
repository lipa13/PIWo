describe("Shop page filters and sorting", () => {
    beforeEach(() => {
        cy.visit("/shop");
    });

    it("displays book cards", () => {
        cy.get(".bookcard").should("exist");
    });

    it("filters by genre (Fantasy)", () => {
        cy.contains("Filter").click();
        cy.contains("Category").click();
        cy.get(".filter-list-item-label").contains("Fantasy").click();

        // Sprawdź, czy każda karta ma atrybut data-category="Fantasy"
        cy.get(".bookcard").each(($card) => {
            cy.wrap($card)
                .invoke("attr", "data-category")
                .should("eq", "Fantasy");
        });
    });

    it("filters by Cover", () => {
        cy.contains("Filter").click();
        cy.contains("Cover").click();
        cy.get(".filter-list-item-label").contains("Paperback").click();

        // Sprawdź, czy każda karta ma atrybut data-category="Fantasy"
        cy.get(".bookcard").each(($card) => {
            cy.wrap($card)
                .invoke("attr", "data-cover")
                .should("eq", "Paperback");
        });
    });

    it("filters by Author", () => {
        cy.contains("Filter").click();
        cy.contains("Author").click();
        cy.get(".filter-list-item-label").contains("Bagietson Micheal").click();

        // Sprawdź, czy każda karta ma atrybut data-category="Fantasy"
        cy.get(".bookcard").each(($card) => {
            cy.wrap($card)
                .invoke("attr", "data-author")
                .should("eq", "Bagietson Micheal");
        });
    });

    it("filters books by price range", () => {
        cy.contains("Filter").click();
        cy.contains("Price").click();

        // Wpisz wartości do inputów (np. 10 do 20)
        cy.get("input[data-testid='Min']").type("10");
        cy.get("input[data-testid='Max']").type("20");

        // Sprawdź, czy wszystkie widoczne karty spełniają zakres cenowy
        cy.get(".bookcard").each(($card) => {
            cy.wrap($card)
                .invoke("attr", "data-price")
                .then((price) => {
                    const numericPrice = parseFloat(price);
                    expect(numericPrice).to.be.gte(10);
                    expect(numericPrice).to.be.lte(20);
                });
        });
    });

    it("sorts books by Price correctly (asc, desc, none)", () => {
        cy.contains("Sort").click();
        cy.contains("Price").click();

        // Pierwsze kliknięcie -> sortowanie rosnąco
        cy.get(".bookcard").then(($cards) => {
            const prices = [...$cards].map(card =>
                parseFloat(card.getAttribute("data-price"))
            );

            const sorted = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sorted);
        });

        // Drugie kliknięcie -> sortowanie malejąco
        cy.contains("Price").click();

        cy.get(".bookcard").then(($cards) => {
            const prices = [...$cards].map(card =>
                parseFloat(card.getAttribute("data-price"))
            );

            const sortedDesc = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedDesc);
        });

        // Trzecie kliknięcie -> reset
        cy.contains("Price").click();

        // Upewnijmy się, że sortowanie zniknęło, porównując z sortowaniem malejącym — nie powinny być równe
        cy.get(".bookcard").then(($cards) => {
            const prices = [...$cards].map(card =>
                parseFloat(card.getAttribute("data-price"))
            );

            const sortedDesc = [...prices].sort((a, b) => b - a);
            expect(prices).to.not.deep.equal(sortedDesc);
        });
    });
});
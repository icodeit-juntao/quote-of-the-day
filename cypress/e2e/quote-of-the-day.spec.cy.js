const quotes = [
  {
    content:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    content: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    content:
      "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
  },
];

describe("quote of the day spec", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.quotable.io/quotes/random*', {
      statusCode: 200,
      body: quotes
    });
  });

  it("displays a quote", () => {
    cy.visit("http://localhost:3000");
    cy.contains(
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
    );
    cy.contains("Martin Fowler");
  });

  it("clicks next button", () => {
    cy.visit("http://localhost:3000");
    cy.contains('button', 'next').click();
    cy.contains(
      "Truth can only be found in one place: the code."
    );
    cy.contains("Robert C. Martin");
  });
});

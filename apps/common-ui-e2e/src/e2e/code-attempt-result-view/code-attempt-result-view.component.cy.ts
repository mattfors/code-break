describe('common-ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=codeattemptresultviewcomponent--primary&args=results;'
    )
  );
  it('should render the component', () => {
    cy.get('code-break-code-attempt-result-view').should('exist');
  });
});

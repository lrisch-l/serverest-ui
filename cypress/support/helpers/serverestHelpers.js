export function fillLoginForm(email = '', password = '') {
  if (!email && !password) {
    cy.get('#email').click();
    cy.get('#password').click();
  } else {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
  }
  cy.get('[data-testid="entrar"]').click();
}

export function fillRegisterForm(name, email, password, admin = false) {
  cy.get('[data-testid="nome"]').clear().type(name);
  cy.get('[data-testid="email"]').clear().type(email);
  cy.get('[data-testid="password"]').clear().type(password);
  if (admin) cy.get('[data-testid="checkbox"]').check();
  cy.get('[data-testid="cadastrar"]').click();
}

export function closeErrorMessage() {
  cy.get('.alert-dismissible').each(($alert) => {
    cy.wrap($alert).find('button.btn-close-error-alert').click();
  });
}

export function fillProductForm(name, description) {
  cy.get('[data-testid="nome"]').clear().type(name);
  cy.get('[data-testid="descricao"]').clear().type(description);
}

export function uploadProductImage(relativePath) {
  cy.get('[data-testid="imagem"]').attachFile(relativePath);
}

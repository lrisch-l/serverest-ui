import {
  fillLoginForm,
  fillRegisterForm,
  closeErrorMessage,
  fillProductForm,
  uploadProductImage
} from '../../support/helpers/serverestHelpers';

describe('Serverest - Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Scenario 1 - Empty login fields', () => {
    fillLoginForm();
    cy.contains('Email é obrigatório').should('be.visible');
    cy.contains('Password é obrigatório').should('be.visible');
    closeErrorMessage();
    cy.screenshot('scenario-1-empty-login-fields');
  });

  it('Scenario 2 - Invalid login credentials', () => {
    fillLoginForm('a@gmail.com', 'a@gmail.com');
    cy.contains('Email e/ou senha inválidos').should('be.visible');
    closeErrorMessage();
    cy.screenshot('scenario-2-invalid-login');
  });
});

describe('Serverest - Registration', () => {
  beforeEach(() => {
    cy.visit('/cadastrarusuarios');
  });

  it('Scenario 3 - Register with empty fields', () => {
    cy.get('[data-testid="cadastrar"]').click();
    cy.contains('Nome é obrigatório').should('be.visible');
    cy.contains('Email é obrigatório').should('be.visible');
    cy.contains('Password é obrigatório').should('be.visible');
    closeErrorMessage();
    cy.screenshot('scenario-3-empty-registration');
  });

  it('Scenario 4 - Successful admin registration', () => {
    cy.task('nextEmailCount').then((count) => {
      const email = `leandrorisch4+${count}@gmail.com`;
      fillRegisterForm('Leandro', email, 'lsrgit@2025', true);
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
      cy.screenshot('scenario-4-successful-registration');
    });
  });
});

describe('Serverest - Authenticated Area', () => {
  beforeEach(() => {
    cy.visit('/login');
    fillLoginForm('leandrorisch4@gmail.com', 'lsrgit@2025');
  });

  it('Scenario 5 - List users and logout', () => {
    cy.get('[data-testid="listarUsuarios"]').click();
    cy.get('[data-testid="logout"]').click();
    cy.screenshot('scenario-5-list-users-logout');
  });

  it('Scenario 6 - Register product', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click();
    fillProductForm('Prod 1', 'Desc 1');
    cy.get('[data-testid="preco"]').type('100');
    cy.get('[data-testid="quantity"]').type('10');
    uploadProductImage('images/image.jpg');
    cy.get('[data-testid="cadastarProdutos"]').click();
    cy.get('[data-testid="logout"]').click();
    cy.screenshot('scenario-6-register-product');
  });

  it('Scenario 7 - Reports screen', () => {
    cy.get('[data-testid="link-relatorios"]').click();
    cy.contains('Em construção aguarde').should('be.visible');
    cy.screenshot('scenario-7-reports-screen');
  });
});
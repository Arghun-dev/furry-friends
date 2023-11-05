describe('Navigation', () => {
  it('should handle form validation', () => {
    // Start from the index page
    cy.visit('/');

    // Find Add Cat card and click on it
    cy.get('div[data-testid="add-cat-card"]').click();

    // Submit the form without filling out any fields
    cy.get('button[type="submit"]').click();

    // Check for validation error messages
    cy.contains('Name is required');
    cy.contains('Gender is required');
    cy.contains('Birthdate is required');
    cy.contains('Bio is required');
  });

  it('Add or edit cat', () => {
    // Start from the index page
    cy.visit('/');

    // Find Add Cat card and click on it
    cy.get('div[data-testid="add-cat-card"]').click();

    // Find Name field and type in it
    cy.get('input[name="name"]').focus().type('Test Name');

    // Find Gender select and select male
    cy.get('button[data-testid="select-gender-button"]').click();
    cy.get('select[tabindex="-1"]').select('male', { force: true });

    // Find Date Picker and select a date
    cy.get('button[data-testid="date-picker"]').click();
    cy.contains('button[name="day"]', '3').click();

    // find text area and type something
    cy.get('textarea[name="bio"]').focus().type('This is a test from cypress');

    // find submit button and click
    cy.get("button[type='submit']").click();

    // submit button should be disabled
    cy.get("button[type='submit']").should('be.disabled');

    // Here we should check the response coming back from the server and wait for it then we can assert successful and unsuccessful scenarios
    // cy.intercept('POST', '/').as('apiRequest');

    // cy.wait('@apiRequest').then((interception) => {
    //     // Check the response status and content
    //     if (interception.response?.statusMessage) {
    //       // API request was successful
    //       // Assert that the success message is displayed
    //       cy.contains('Cat created successfully').should('be.visible');
    //     } else {
    //       // API request failed
    //       // Assert that the error message is displayed
    //       cy.contains('Something went wrong').should('be.visible');
    //     }
    //   });

    // const addOrEditForm = cy.get('form[data-testid="add-or-edit-form"]');

    // Check for success message or other post-submit behavior
    // if (cy.get('body').should('contain', 'Something went wrong')) {
    //   addOrEditForm.should('be.visible');
    // } else if (cy.get('body').should('contain', 'successfully')) {
    //   addOrEditForm.should('not.be.visible');
    // }
  });
});

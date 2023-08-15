describe('login page', () => {
  it('would login normally', () => {
    cy.visit(Cypress.env('host'))

    cy.get("input#username").focus().type(Cypress.env('username'))
    cy.get("input#password").focus().type(Cypress.env('password'))
    cy.get("input#captchaword")
      .then(($el) => {
        const captcha = $el.val()

        //cy.get("input#captcha-code").focus().then($el => $el.type(captcha))
        cy.get("input#captcha-code").type(captcha, {force: true})
      })

    //cy.get("button#button-login").focus().then($el => $el.click())
    cy.get("button#button-login").click({force: true})

    cy.get('#pengumuman').should('be.visible')
  })
})

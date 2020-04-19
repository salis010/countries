describe('Test Question 1', () => {

    const country = 'Kenya'

    it('Should not have the <ul> element visible in case no search is done', () => {
      cy.visit('/question1')    
        .get('ul')
        .should('not.be.visible')
  })

    it('Should have the <ul> element visible in case no search is done', () => {
        cy.visit('/question1')    
          .get('input')
          .click()
          .type(country)
          .get('button')
          .click()
          .wait(2000)
          .get('ul')
          .should('be.visible')
    })

    it('Should successfully return data about a country', () => {
      cy.visit('/question1')    
        .get('input')
        .click()
        .type(country)
        .get('button')
        .click()
        .wait(2000)
        .get('ul')
        .should('be.visible')
  })
      
})

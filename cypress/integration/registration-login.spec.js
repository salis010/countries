describe('Test Questions 5 & 6', () => {

    const name = 'Max'
    const email = 'max@cavalera.com'
    const password = 'aaaaaa'

    beforeEach(() => {
        cy.clearLocalStorage('name')
    })

    it('Should successfully register a user, login, and save an entry in localStorage', () => {
        cy.visit('/question5')    
          .get('[name=name]')
          .click()
          .type(name)
          .get('[name=email]')
          .click()
          .type(email)
          .get('[name=password]')
          .click()
          .type(password)
          .get('button')
          .click()
          .wait(2000)
          .visit('/question6')
          .get('[name=email]')
          .type(email)
          .get('[name=password]')
          .type(password)
          .get('button')
          .click()
          .wait(3000)
          .should(() => {
            expect(localStorage.getItem('name')).to.eq(name)
          })
    })
      
})

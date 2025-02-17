describe('check the accessibility for the login screen',()=>{
    


   it('test the page accessibility',{defaultCommandTimeout: 15000}, () => {
       cy.checkAccessibility();

   })

   it('test signup page accessibility',{defaultCommandTimeout: 15000},()=>{
    cy.get('.text-primary.font-bold').click();
    cy.checkAccessibility();

   })
}) 
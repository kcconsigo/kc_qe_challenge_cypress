
/// <reference types="cypress" />


describe('GreenKartAutomation', () => {

    before (() => {
        cy.visit('https://www.vodafone.com.au/plans/sim-only')

       
       });

       

       it('HomePage', () =>{


        cy.get('[href="https://myaccount.myvodafone.com.au/change?cmp=cbu:post:mob:new:display:eng::"]').click()
        // cy.get('.nav-cart').click()
        
        // cy.get('.products > :nth-child(1) > .product-name').contains('Brocolli - 1 Kg')

        // cy.get(':nth-child(1) > .stepper-input > .increment').click()

        // cy.get(':nth-child(1) > .product-action > button').click().contains('✔ ADDED')

        // cy.get(':nth-child(3) > .product-name').contains('Cucumber - 1 Kg')

        // cy.get(':nth-child(3) > .stepper-input > .increment').click()

        // cy.get(':nth-child(3) > .product-action > button').click().contains('✔ ADDED')

        // cy.get('.cart-icon > img').click()

        // cy.get('.cart-preview > .action-block > button').click({timeout: 2000})

        // cy.get(':nth-child(1) > :nth-child(2) > .product-name').each(($e1, index, $list) => {
            
        //     const brocolli = $e1.text();

        //     if (brocolli.includes("Brocolli - 1 Kg")) {

        //         cy.get(':nth-child(1) > :nth-child(2) > .product-name')

        //         .eq(index)

        //         .then(function (Field){
        //             const prodText = Field.text();

        //             expect(prodText).to.equal("Brocolli - 1 Kg");
        //         })

        //     }


        // });

        // cy.get(':nth-child(2) > :nth-child(2) > .product-name').each(($e1, index, $list) => {
            
        //     const cucumber = $e1.text();

        //     if (cucumber.includes("Cucumber - 1 Kg")) {

        //         cy.get(':nth-child(2) > :nth-child(2) > .product-name')

        //         .eq(index)

        //         .then(function (Field){
        //             const prodText = Field.text();

        //             expect(prodText).to.equal("Cucumber - 1 Kg");
        //         })

        //     }


        // });

        // cy.get('.promoCode').type('12220')

        // cy.get('.totAmt').contains('336')

        // cy.get('.promoBtn').click()

        // cy.get(':nth-child(14)').click({timeout: 2000})

        // cy.get('select').select('Japan').should('have.value','Japan')

        // cy.get('.chkAgree').check()

        // cy.get('button').click()

        

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test

            //document.getElementById('clock').innerHTML
            return false
          })
       })

    
});



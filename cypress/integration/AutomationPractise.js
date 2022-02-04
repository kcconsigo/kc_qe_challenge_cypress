/// <reference types="cypress" />

describe('AutomationPractise', () => {


   before (() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   });
    
    it('Example_Section', () =>{
    
        cy.get('[for="radio1"] > .radioButton').click()
        // cy.get('#autocomplete').eq(0).type('India')
        // //cy.get('ui-menu-item-wrapper')
        // cy.get('#ui-id-3').should('have.value','India')
    
        cy.get('#autocomplete').eq(0).type('India')
    
        cy.get('ul[id="ui-id-1"] li:nth-child(2)').find('div').contains('India').click()
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        cy.get('#checkBoxOption1').check()
    
    })
    
    it('Switch_Section', () =>{
    
        cy.get('#openwindow').click()
        
        cy.get('#opentab').click()
    
        cy.get('#opentab').eq(0).type('Kc')
        
        cy.get('#alertbtn').click()

        cy.on('window:alert', (alertText) =>{
            expect(alertText).equal('Hello , share this practice page and share your knowledge')
        })

        //cy.go('back').click({timeout: 20000})
    })

    it('WebTable', () =>{

        cy.get('fieldset > #product > tbody > :nth-child(4) > :nth-child(2)').each(($e1, index, $list) => {

            const course = $e1.text();

            if(course.includes("Appium (Selenium) - Mobile Automation Testing from Scratch")) {

            }

            cy.get('fieldset > #product > tbody > :nth-child(4) > :nth-child(2)')
            .eq(index)
            .then((Field) =>{
                const FieldText = Field.text();

                expect(FieldText).to.equal("Appium (Selenium) - Mobile Automation Testing from Scratch");
            })
        })

        cy.get('fieldset > #product > tbody > :nth-child(4) > :nth-child(3)').each(($e1, index, $list) => {

            const price = $e1.text();

            if(price.includes("30")) {

            }

            cy.get('fieldset > #product > tbody > :nth-child(4) > :nth-child(3)')
            .eq(index)
            .then((Field) =>{

                const FieldNum = Field.text();

                expect(FieldNum).to.equal("30");
            })
        })
            
    })

    it('ElementDisplayed', () => {

        cy.get('#hide-textbox').click({timeout: 8000})
        cy.get('#show-textbox').click({timeout: 8000})
    })

    it('WebTable', () => {

        cy.get('.right-align > :nth-child(2)').scrollIntoView()

        cy.get('.tableFixHead > #product > tbody > :nth-child(1) > :nth-child(1)').each(($e1, index, $list) => {

            const name = $e1.text();

            if(name.includes("Alex")){

            }

            cy.get('.tableFixHead > #product > tbody > :nth-child(1) > :nth-child(1)')
            .eq(index)
            .then((Field) =>{

                const FieldName = Field.text();
                expect(FieldName).to.equal("Alex")

            })
        })

        cy.get('.tableFixHead > #product > tbody > :nth-child(1) > :nth-child(2)').each(($e1, index, $list) =>{

            const position = $e1.text();

            if(position.includes("Engineer")) {

            }

            cy.get('.tableFixHead > #product > tbody > :nth-child(1) > :nth-child(2)')
            .eq(index)
            .then((Field) => {

                const FieldPo = Field.text();
                expect(FieldPo).to.equal("Engineer")
            })
        })

        cy.get('.tableFixHead > #product > tbody > :nth-child(1) > :nth-child(3)').each(($e1, index, $list) =>{

            const city = $e1.text();

            if(city.includes("Chennai")) {

            }

            cy.get('.tableFixHead > #product > tbody > :nth-child(1) > :nth-child(3)')
            .eq(index)
            .then((Field) => {

                const FieldCity = Field.text();
                expect(FieldCity).to.equal("Chennai")
            })
        })

        cy.get('#product > tbody > :nth-child(1) > :nth-child(4)').each(($e1, index, $list) =>{

            const amount = $e1.text();

            if(amount.includes("28")) {

            }

            cy.get('#product > tbody > :nth-child(1) > :nth-child(4)')
            .eq(index)
            .then((Field) => {

                const FieldAmount = Field.text();
                expect(FieldAmount).to.equal("28")
            })
        })
        
        cy.get('.totalAmount').contains('Total Amount Collected: 296')
    })

    it('mouseHover', () => {

        cy.get('#mousehover').invoke('show')
        cy.get('.mouse-hover-content').find('a').contains('Top').click({force: true})
    })

    it('iFrames', () => {
        const iFrame = cy.get('#courses-iframe').scrollIntoView()
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        
    })
});


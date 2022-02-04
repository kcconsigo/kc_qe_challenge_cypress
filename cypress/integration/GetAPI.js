/// <reference types="cypress" />


describe('Get API', () => {


    it('Get Api testing', () =>{
        //cy.request('https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New')

        cy.request({
            method : 'GET',
            url : 'https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New',
            header : {
                'authorization' : 'VGVzdFNlY3JldFR5cGU='
            },
            body : {
                "ctaLabel": "Add to cart",
                
            },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(403)
            // expect(response.body.plans[1].id).to.equal('AU12274')
            // expect(response.body.plans[1].ctaLabel).to.eq('Add to cart')
            //expect(response.body).to.have.property('altText','$45 SIM Only Lite+ Plan')
        })
    })

    it('Get Request', () =>{
        cy.request('https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New').then((response) =>{

        
 
            expect(response.status).to.equal(207)
            //expect(response.body).to.have.property('ctaLabel','Add to cart')
        })

    })
})
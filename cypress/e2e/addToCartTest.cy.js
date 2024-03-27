import {homePage} from "../pages/homePage"
const homePageObj = new homePage()
import testData from "../fixtures/testData.json"

describe("test automation", ()=>{
    before(()=>{
        //Got from commands.js
        cy.login(testData.login.username, testData.login.password)
    })

    it("Add to Cart Flow", ()=>{
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should("contain", testData.message.successMessage).and("contain", testData.product.productName)


    })
})


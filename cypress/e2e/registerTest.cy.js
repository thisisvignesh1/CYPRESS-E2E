import { registerPage } from "../pages/registerPage"
const registerObj = new registerPage()
import registerData from "../fixtures/registerData.json"

describe("Test Automation",()=>{
    it("register flow", ()=>{
        registerObj.openUrl()
        registerObj.enterFirstName(registerData.fistname)
        registerObj.enterLastName(registerData.lastname)
        registerObj.enterEmail(registerData.emailaddress)
        registerObj.enterTelephone(registerData.telephonenumber)
        registerObj.enterPassword(registerData.passwords)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    })
})
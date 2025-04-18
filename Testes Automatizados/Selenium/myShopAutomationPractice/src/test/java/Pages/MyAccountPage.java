package Pages;

import Runners.RunCucumberTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static Utils.Utils.clickElement;
import static Utils.Utils.verifyText;

public class MyAccountPage extends RunCucumberTest {

    @FindBy(className = "account")
    private WebElement myCustomerAccount;

    @FindBy(className = "page-heading")
    private WebElement titlePage;

    @FindBy(className = "logout")
    private WebElement logout;

    public MyAccountPage() {
        PageFactory.initElements(getDriver(), this);
    }

    public String checkMyCustomerAccount(){
        return verifyText(myCustomerAccount);
    }

    public String checkTitlePage(){
        return verifyText(titlePage);
    }

    public void clickLogout(){
        clickElement(logout);
    }

}

package Pages;

import Runners.RunCucumberTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static Utils.Utils.*;

public class ForgotYourPasswordPage extends RunCucumberTest {

    @FindBy(id = "email")
    private WebElement inputEmail;

    @FindBy(id = "passwd")
    private WebElement inputPassword;

    @FindBy(id = "SubmitLogin")
    private WebElement buttonSignIn;

    @FindBy(css = "div.alert.alert-danger > ol > li")
    private WebElement errorMessage;

    public ForgotYourPasswordPage() {
        PageFactory.initElements(getDriver(), this);
    }

    public void insertEmail() {
        insertContentElement(inputEmail, System.getenv("userEmail"));
    }

    public void insertUnregistredEmail() {
        insertContentElement(inputEmail, "nome_qualquer@provedorqualquer.com");
    }

    public void insertInvalidEmail() {
        insertContentElement(inputEmail, "nome_qualquer@");
    }

    public void insertPassword() {
        insertContentElement(inputPassword, System.getenv("UserPassword"));
    }

    public void insertIncorretPassword() {
        insertContentElement(inputPassword, "blá-blá-blá");
    }

    public void clickButtonSignIn() {
        clickElement(buttonSignIn);
    }

    public String checkErrorMessageAuthenticationFailed() {
        return verifyText(errorMessage);
    }

}


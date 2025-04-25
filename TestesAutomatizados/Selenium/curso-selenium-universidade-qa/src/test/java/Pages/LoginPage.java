package Pages;

import Runners.RunCucumberTest;
import Runners.RunnerBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static Utils.Utils.clicar;
import static Utils.Utils.digitar;

public class LoginPage extends RunCucumberTest {
    @FindBy(id = "customer_email")
    private WebElement userEmail;

    @FindBy(id = "customer_password")
    private WebElement userPassword;

    @FindBy(css = "input[value='Sign In']")//#customer_login > div.action_bottom > input
    private WebElement btnLogin;

    //Page Factory
    public LoginPage(){
        PageFactory.initElements(getDriver(), this);
    }

    public void digitarEmail(){
        digitar(userEmail, "cursouniversidadeqa@gmail.com");
    }

    public void digitarSenha(){
        digitar(userPassword, System.getenv("senha"));
    }

    public void clicarBtnLogin(){
        clicar(btnLogin);
    }

}



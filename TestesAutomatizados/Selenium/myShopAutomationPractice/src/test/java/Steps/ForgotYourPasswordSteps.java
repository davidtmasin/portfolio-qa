package Steps;

import Pages.LoginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import static Runners.RunnerBase.getDriver;

public class ForgotYourPasswordSteps {
    LoginPage loginPage = new LoginPage();

    @Given("que estou na pagina de login do site My Shop")
    public void queEstouNaPaginaDeLoginDoSiteMyShop() {
        getDriver().manage().window().maximize();
        getDriver().get(System.getenv("loginUrl"));
    }

    @And("digito um endereço de email")
    public void digitoUmEnderecoDeEmail() {
        loginPage.insertEmail();
    }

    @And("digito um email fora da base de dados")
    public void digitoUmEmailForaDaBaseDeDados() {
        loginPage.insertUnregistredEmail();
    }

    @And("digito um email inválido")
    public void digitoUmEmailInvalido() {
        loginPage.insertInvalidEmail();
    }

    @And("digito uma senha")
    public void digitoUmaSenha() {
        loginPage.insertPassword();
    }

    @And("digito uma senha incorreta")
    public void digitoUmaSenhaIncorreta() {
        loginPage.insertIncorretPassword();
    }

    @When("clico no botao Sign In")
    public void clicoNoBotaoSignIn() {
        loginPage.clickButtonSignIn();
    }

    @Then("a mensagem {string} é exibida na página")
    public void aMensagemEExibidaNaPagina(String errorMessage) {
        Assert.assertEquals(loginPage.checkErrorMessageAuthenticationFailed(), errorMessage);
    }

    @And("realizo o login com sucesso")
    public void realizoOLoginComSucesso() {
        digitoUmEnderecoDeEmail();
        digitoUmaSenha();
        clicoNoBotaoSignIn();
    }

    @Then("retorno para a pagina de login")
    public void retornoParaAPaginaDeLogin() {
        Assert.assertEquals(getDriver().getCurrentUrl(),System.getenv("loginUrl"));
    }
}

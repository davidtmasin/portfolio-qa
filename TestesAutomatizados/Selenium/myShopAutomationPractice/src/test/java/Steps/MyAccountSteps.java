package Steps;

import Pages.MyAccountPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class MyAccountSteps {
    private static final String USER_ACCOUNT = "Xablau Master";
    private static final String TITLE_PAGE = "MY ACCOUNT";

    MyAccountPage myAccountPage = new MyAccountPage();

    @Then("sou redirecionado para a pagina da minha conta pessoal no site My Shop")
    public void souRedirecionadoParaAPaginaDaMinhaContaPessoalNoSiteMyShop() {
        Assert.assertEquals(myAccountPage.checkMyCustomerAccount(), USER_ACCOUNT);
        Assert.assertEquals(myAccountPage.checkTitlePage(), TITLE_PAGE);
        myAccountPage.clickLogout();
    }

    @When("clico no botao de logout")
    public void clicoNoBotaoDeLogout() {
        myAccountPage.clickLogout();
    }
}

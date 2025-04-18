package Steps;

import Pages.ProductPage;
import io.cucumber.java.en.And;

public class ProductSteps {
    ProductPage productPage = new ProductPage();

    @And("escolho o tamanho {string}")
    public void escolhoOTamanho(String tamanhoJacket) {
        productPage.setComboBoxTamanho(tamanhoJacket);
    }

    @And("escolho a cor {string}")
    public void escolhoACor(String corJacket) {
        productPage.setComboBoxCor(corJacket);

    }

    @And("clico no botão adicionar ao carrinho")
    public void clicoNoBotaoAdicionarAoCarrinho() {
        productPage.clicarBotaoCarrinho();
    }
}

package Steps;

import Pages.CheckoutPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class CheckoutSteps {
    private static final String TITULO_PEDIDO = "Noir jacket - L / Red";
    CheckoutPage checkoutPage = new CheckoutPage();


    @Then("verifico se o título do pedido esta correto")
    public void verificoSeOTituloDoPedidoEstaCorreto() {
        Assert.assertEquals(checkoutPage.pegarTituloPedido(), TITULO_PEDIDO);
    }
}

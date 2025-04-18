package Pages;

import Runners.RunCucumberTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static Utils.Utils.clicar;

public class HomePage extends RunCucumberTest {
    @FindBy(css = "#logo > a")
    private WebElement btnSimple;

    @FindBy(id = "product-2")
    private WebElement jacket2;

    @FindBy(className = "checkout")
    private WebElement btnCheckout;


    public HomePage(){
        PageFactory.initElements(getDriver(), this);
    }

    public void clicarBtnSimples(){
         clicar(btnSimple);
    }

    public void clicarJacket2(){
        clicar(jacket2);
    }

    public void clicarBotaoCheckout() throws InterruptedException{
        Thread.sleep(2000);
        getDriver().navigate().to("https://sauce-demo.myshopify.com/cart");
    }
}

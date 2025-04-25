package Pages;

import Runners.RunCucumberTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static Utils.Utils.clicar;
import static Utils.Utils.digitar;

public class GooglePage extends RunCucumberTest {

    @FindBy(id = "input ")
//    @FindBy(css = "input[type='search'][placeholder='Pesquise no Google ou digite um URL']")
    private WebElement barraDeBusca;

    @FindBy(css = "div.gb_Cd.gb_Zd.gb_xd > div:nth-child(1) > div > div:nth-child(1) > a")
    private WebElement btnGmail;

    @FindBy(xpath = "//a[contains(.,'Imagens')]")
    private WebElement btnImagens;

    public void GooglePage(){
        //Aqui serão inicializados os elementos antes de sua utilização
        PageFactory.initElements(getDriver(), this);
    }

    public void digitarNaBarraDeBusca(){

        //barraDeBusca.sendKeys("Cursos gratuitos de Selenium");
        //clicar(barraDeBusca);
        digitar(barraDeBusca, "Teste de Velocidade");
    }

}

package Pages;

import Runners.RunCucumberTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static Utils.Utils.clicar;
import static Utils.Utils.selecionarComboBox;

public class ProductPage extends RunCucumberTest {
    @FindBy(id = "product-select-option-0")
    private WebElement comboBoxTamanho;

    @FindBy(id = "product-select-option-1")
    private WebElement comboBoxCor;

    @FindBy(id = "add")
    private WebElement btnCarrinho;

    public ProductPage(){
        PageFactory.initElements(getDriver(), this);
    }

    public void setComboBoxTamanho(String tamanhoJacket){
        selecionarComboBox(comboBoxTamanho, tamanhoJacket);
    }

    public void setComboBoxCor(String corJacket){
        selecionarComboBox(comboBoxCor, corJacket);
    }

    public void clicarBotaoCarrinho(){
        clicar(btnCarrinho);
    }

}

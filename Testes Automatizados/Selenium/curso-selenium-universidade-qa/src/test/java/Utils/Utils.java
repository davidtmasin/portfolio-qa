package Utils;

import Runners.RunCucumberTest;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Utils extends RunCucumberTest {
    public static void clicar(WebElement element){
        esperarElementoAparecer(element);
        element.click();
    }

    public static void digitar(WebElement element, String text) {
        esperarElementoAparecer(element);
        element.sendKeys(text);
    }

    public static String pegarTexto(WebElement element){
        esperarElementoAparecer(element);
        return element.getText();
    }

    public static void esperarElementoAparecer(WebElement element){
        //Instancia uma classe do Selenium
        //responsável por esperar o elemento aparecer
        //Necessita do Driver e do tempo de duração
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(30));
        //Chamada da classe criada e usa-se o método until para definir uma condição
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static void esperarElementoDesaparecer(WebElement element){
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(30));
        wait.until(ExpectedConditions.invisibilityOf(element));
    }

    public static void selecionarComboBox(WebElement element, String text){
        esperarElementoAparecer(element);
        Select dropDown = new Select(element);
        dropDown.selectByVisibleText(text);
    }

    public static String validarPopUp() throws InterruptedException{
        Alert alert = getDriver().switchTo().alert();
        String mensagemDoAlert = alert.getText();
        alert.accept();

        return mensagemDoAlert;
    }
}

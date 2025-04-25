package Utils;

import Runners.RunCucumberTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Utils extends RunCucumberTest {
    public static void clickElement(WebElement clickableElement){
        waitUntilBeVisible(clickableElement);
        clickableElement.click();
    }

    public static void insertContentElement(WebElement elementContent, String content){
        waitUntilBeVisible(elementContent);
        elementContent.sendKeys(content);
    }

    public static String verifyText(WebElement targetText){
        waitUntilBeVisible(targetText);
        return targetText.getText();
    }

    public static void waitUntilBeVisible(WebElement element){
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(5));
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }
}

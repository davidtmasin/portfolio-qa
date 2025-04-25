package Runners;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class RunnerBase {

    static WebDriver driver = new ChromeDriver();


    public static WebDriver getDriver() {

        if (driver == null){
            getDriverChrome();
        }
        return driver;
    }

    public static WebDriver getDriverChrome() {

        ChromeOptions options = new ChromeOptions();
// options.addArguments(“–headless”); //Descomentar essa linha caso queira rodar o chrome em modo minimizado
        driver = new ChromeDriver(options);

        return driver;
    }
}

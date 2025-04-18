package Runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

/**O arquivo RunCucumberTest.java tem o objetivo de orientar
 * o Selenium sobre quais BDDs deverão ser executados.**/
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {},
        features = {"src/test/resources/Features"},//Aqui é o caminho onde ficam as features
        tags = "@checkout", //Tags que identificam as features ou scenarios que serão executados
        glue = {"Steps"} //Aqui é o caminho das Steps que serão executadas
)

//Essa classe herda (extends) as variáveis e métodos da classe RunnerBase
public class RunCucumberTest extends RunnerBase {

    @AfterClass //Executa após finalizar o teste
    public static void stop(){
        driver.quit();
    }

}

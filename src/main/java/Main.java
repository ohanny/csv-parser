import javax.script.*;

public class Main {
    public static void main(String[] args) throws Exception {
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
        Bindings globalScope = engine.getBindings(ScriptContext.GLOBAL_SCOPE);
        globalScope.put("global", globalScope);
        globalScope.put("window", "");// just to avoid fs.js module loading in FileStream.js

        engine.eval("load('src/main/resources/script.js')");

        Invocable invocable = (Invocable) engine;

        String input = "Nom,Prénom,Age\nLampion,Émile,29\nLarosière,Jean,48\n";
        Object result = invocable.invokeFunction("parseCSV", input);

        System.out.println(result);
    }
}

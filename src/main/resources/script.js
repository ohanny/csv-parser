function parseCSV(input) {
    // chargement du script 'require' spécifique nashorn
    load('src/main/resources/lib/require-nashorn.js');
    require.basePath = 'src/main/resources/';

    // chargement du runtime ANTLR
    var antlr4 = require('antlr4/index');

    // chargement de l'analyseur CSV
    var CSVLexer = require('./CSVLexer');
    var CSVParser = require('./CSVParser');

    // chaîne à analyser
    var input = "Nom,Prénom,Age\nLampion,Émile,29\nLarosière,Jean,48\n"

    // préparation des objets pour l'analyse
    var chars = new antlr4.InputStream(input);
    var lexer = new CSVLexer.CSVLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new CSVParser.CSVParser(tokens);
    parser.buildParseTrees = true;

    // invocation de l'analyse
    var tree = parser.document();

    var result = tree.toStringTree(null, parser);
    return result
}

grammar CSV;

@header {
    //package io.diapos.asciidoc.grammar;
}

document        : hdr row+ EOF;

hdr : row ;

row : field (',' field)* '\r'? '\n' ;

field : TEXT | STRING | ;

TEXT : ~[,\n\r"]+ ;
STRING : '"' ('""'|~'"')* '"' ;
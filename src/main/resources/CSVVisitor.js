// Generated from /Users/Olivier/Documents/work/projets/csv-parser/src/main/antlr/CSV.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

    //package io.diapos.asciidoc.grammar;


// This class defines a complete generic visitor for a parse tree produced by CSVParser.

function CSVVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CSVVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CSVVisitor.prototype.constructor = CSVVisitor;

// Visit a parse tree produced by CSVParser#document.
CSVVisitor.prototype.visitDocument = function(ctx) {
};


// Visit a parse tree produced by CSVParser#hdr.
CSVVisitor.prototype.visitHdr = function(ctx) {
};


// Visit a parse tree produced by CSVParser#row.
CSVVisitor.prototype.visitRow = function(ctx) {
};


// Visit a parse tree produced by CSVParser#field.
CSVVisitor.prototype.visitField = function(ctx) {
};



exports.CSVVisitor = CSVVisitor;
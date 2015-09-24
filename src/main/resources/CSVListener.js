// Generated from /Users/Olivier/Documents/work/projets/csv-parser/src/main/antlr/CSV.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CSVParser.
function CSVListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CSVListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CSVListener.prototype.constructor = CSVListener;

// Enter a parse tree produced by CSVParser#document.
CSVListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by CSVParser#document.
CSVListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by CSVParser#hdr.
CSVListener.prototype.enterHdr = function(ctx) {
};

// Exit a parse tree produced by CSVParser#hdr.
CSVListener.prototype.exitHdr = function(ctx) {
};


// Enter a parse tree produced by CSVParser#row.
CSVListener.prototype.enterRow = function(ctx) {
};

// Exit a parse tree produced by CSVParser#row.
CSVListener.prototype.exitRow = function(ctx) {
};


// Enter a parse tree produced by CSVParser#field.
CSVListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by CSVParser#field.
CSVListener.prototype.exitField = function(ctx) {
};



exports.CSVListener = CSVListener;
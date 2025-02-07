// Generated from ./Combination.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CombinationListener from './CombinationListener.js';
import CombinationVisitor from './CombinationVisitor.js';

const serializedATN = [4,1,8,45,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,
1,4,1,5,1,5,1,5,5,5,33,8,5,10,5,12,5,36,9,5,3,5,38,8,5,1,6,1,6,1,6,3,6,43,
8,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,41,0,14,1,0,0,0,2,17,1,0,0,0,4,20,1,0,
0,0,6,22,1,0,0,0,8,27,1,0,0,0,10,37,1,0,0,0,12,42,1,0,0,0,14,15,3,2,1,0,
15,16,5,0,0,1,16,1,1,0,0,0,17,18,3,4,2,0,18,19,5,6,0,0,19,3,1,0,0,0,20,21,
3,6,3,0,21,5,1,0,0,0,22,23,5,1,0,0,23,24,5,3,0,0,24,25,3,10,5,0,25,26,5,
4,0,0,26,7,1,0,0,0,27,28,5,1,0,0,28,9,1,0,0,0,29,34,3,12,6,0,30,31,5,5,0,
0,31,33,3,12,6,0,32,30,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,
35,38,1,0,0,0,36,34,1,0,0,0,37,29,1,0,0,0,37,38,1,0,0,0,38,11,1,0,0,0,39,
43,3,8,4,0,40,43,3,4,2,0,41,43,5,2,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,
1,0,0,0,43,13,1,0,0,0,3,34,37,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CombinationParser extends antlr4.Parser {

    static grammarFileName = "Combination.g4";
    static literalNames = [ null, null, null, "'('", "')'", "','", "';'" ];
    static symbolicNames = [ null, "Identifier", "NUMBER", "OPEN_PAR", "CLOSE_PAR", 
                             "COMMA", "SEMICOLON", "LineComment", "WS" ];
    static ruleNames = [ "program", "express", "func", "functionCall", "variable", 
                         "arguments", "argument" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CombinationParser.ruleNames;
        this.literalNames = CombinationParser.literalNames;
        this.symbolicNames = CombinationParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CombinationParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.express();
	        this.state = 15;
	        this.match(CombinationParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	express() {
	    let localctx = new ExpressContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CombinationParser.RULE_express);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.func();
	        this.state = 18;
	        this.match(CombinationParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CombinationParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.functionCall();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CombinationParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(CombinationParser.Identifier);
	        this.state = 23;
	        this.match(CombinationParser.OPEN_PAR);
	        this.state = 24;
	        this.arguments();
	        this.state = 25;
	        this.match(CombinationParser.CLOSE_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CombinationParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(CombinationParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CombinationParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || _la===2) {
	            this.state = 29;
	            this.argument();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 30;
	                this.match(CombinationParser.COMMA);
	                this.state = 31;
	                this.argument();
	                this.state = 36;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CombinationParser.RULE_argument);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.func();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.match(CombinationParser.NUMBER);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CombinationParser.EOF = antlr4.Token.EOF;
CombinationParser.Identifier = 1;
CombinationParser.NUMBER = 2;
CombinationParser.OPEN_PAR = 3;
CombinationParser.CLOSE_PAR = 4;
CombinationParser.COMMA = 5;
CombinationParser.SEMICOLON = 6;
CombinationParser.LineComment = 7;
CombinationParser.WS = 8;

CombinationParser.RULE_program = 0;
CombinationParser.RULE_express = 1;
CombinationParser.RULE_func = 2;
CombinationParser.RULE_functionCall = 3;
CombinationParser.RULE_variable = 4;
CombinationParser.RULE_arguments = 5;
CombinationParser.RULE_argument = 6;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CombinationParser.RULE_program;
    }

	express() {
	    return this.getTypedRuleContext(ExpressContext,0);
	};

	EOF() {
	    return this.getToken(CombinationParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CombinationVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CombinationParser.RULE_express;
    }

	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	SEMICOLON() {
	    return this.getToken(CombinationParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.enterExpress(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.exitExpress(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CombinationVisitor ) {
	        return visitor.visitExpress(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CombinationParser.RULE_func;
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.exitFunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CombinationVisitor ) {
	        return visitor.visitFunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CombinationParser.RULE_functionCall;
    }

	Identifier() {
	    return this.getToken(CombinationParser.Identifier, 0);
	};

	OPEN_PAR() {
	    return this.getToken(CombinationParser.OPEN_PAR, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	CLOSE_PAR() {
	    return this.getToken(CombinationParser.CLOSE_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CombinationVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CombinationParser.RULE_variable;
    }

	Identifier() {
	    return this.getToken(CombinationParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CombinationVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CombinationParser.RULE_arguments;
    }

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CombinationParser.COMMA);
	    } else {
	        return this.getToken(CombinationParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.exitArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CombinationVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CombinationParser.RULE_argument;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	NUMBER() {
	    return this.getToken(CombinationParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CombinationListener ) {
	        listener.exitArgument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CombinationVisitor ) {
	        return visitor.visitArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CombinationParser.ProgramContext = ProgramContext; 
CombinationParser.ExpressContext = ExpressContext; 
CombinationParser.FuncContext = FuncContext; 
CombinationParser.FunctionCallContext = FunctionCallContext; 
CombinationParser.VariableContext = VariableContext; 
CombinationParser.ArgumentsContext = ArgumentsContext; 
CombinationParser.ArgumentContext = ArgumentContext; 

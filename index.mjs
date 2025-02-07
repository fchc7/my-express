import antlr4 from "antlr4";
import CombinationLexer from "./target/javascript/CombinationLexer.js";
import CombinationParser from "./target/javascript/CombinationParser.js";
import CombinationVisitor from "./target/javascript/CombinationVisitor.js";

class FunctionNameVisitor extends CombinationVisitor {
  visitFunctionCall(ctx) {
    const functionName = ctx.Identifier().getText();
    console.log(`Function name in function call: ${functionName}`);
    return this.visitChildren(ctx);
  }

  visitFuncDef(ctx) {
    const functionName = ctx.Identifier().getText();
    console.log(`Function name in function definition: ${functionName}`);
    return this.visitChildren(ctx);
  }
}

const input = "即刻(设计2开, somethingElse);";
const chars = new antlr4.InputStream(input);
const lexer = new CombinationLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CombinationParser(tokens);
const tree = parser.program();
console.log(tree);

const visitor = new FunctionNameVisitor();
visitor.visit(tree);

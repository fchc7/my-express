// Generated from /Users/zjx/Developer/point-express/Combination.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CombinationParser}.
 */
public interface CombinationListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CombinationParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(CombinationParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link CombinationParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(CombinationParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link CombinationParser#express}.
	 * @param ctx the parse tree
	 */
	void enterExpress(CombinationParser.ExpressContext ctx);
	/**
	 * Exit a parse tree produced by {@link CombinationParser#express}.
	 * @param ctx the parse tree
	 */
	void exitExpress(CombinationParser.ExpressContext ctx);
	/**
	 * Enter a parse tree produced by {@link CombinationParser#func}.
	 * @param ctx the parse tree
	 */
	void enterFunc(CombinationParser.FuncContext ctx);
	/**
	 * Exit a parse tree produced by {@link CombinationParser#func}.
	 * @param ctx the parse tree
	 */
	void exitFunc(CombinationParser.FuncContext ctx);
	/**
	 * Enter a parse tree produced by {@link CombinationParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(CombinationParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link CombinationParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(CombinationParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link CombinationParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(CombinationParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link CombinationParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(CombinationParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link CombinationParser#argument}.
	 * @param ctx the parse tree
	 */
	void enterArgument(CombinationParser.ArgumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link CombinationParser#argument}.
	 * @param ctx the parse tree
	 */
	void exitArgument(CombinationParser.ArgumentContext ctx);
}
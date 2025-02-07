grammar Combination;

/**  ==== 定义语法 start */
program: express EOF; // 代码可以为空，否则必须以函数调用开头
express: func SEMICOLON; // 表达式必须以分号结尾
func: functionCall;
functionCall: Identifier OPEN_PAR arguments CLOSE_PAR; 
variable: Identifier;

arguments: (argument (COMMA argument)*)?;

argument: variable | func | NUMBER;

/**  ==== 定义词法 start */
Identifier: IdentifierStart IdentifierPart*;

fragment IdentifierPart:
    IdentifierStart
    | [\p{Mn}]
    | [\p{Nd}]
    | [\p{Pc}]
    | '\u200C'
    | '\u200D';

fragment IdentifierStart:
    [\p{L}]
    | [$_]
    | '\\' UnicodeEscapeSequence
    | [\u4e00-\u9fa5]; // 显式添加中文字符范围

fragment UnicodeEscapeSequence:
    'u' HexDigit HexDigit HexDigit HexDigit
    | 'u' '{' HexDigit HexDigit+ '}';

fragment HexDigit: [_0-9a-fA-F];

NUMBER: DIGIT+ | DIGIT+ ('.' DIGIT*)?;
fragment DIGIT: [0-9];

OPEN_PAR: '(';
CLOSE_PAR: ')';
COMMA: ',';
SEMICOLON: ';';

// 单行注释
LineComment: '//' ~[\u000A\u000D]* -> channel(HIDDEN);
WS: [ \t\n\r]+ -> channel(HIDDEN); // 系统级规则 ，即忽略换行与空格
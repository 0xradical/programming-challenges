# Math Expression Parser

For the purpose of this exercise,
a Mathematical Expression is an expression composed of
the main mathematical operations: addition, subtraction, multiplication
and division. The evaluated expression is dependent on 
the implicit precedence of operators. So for example:

1 + 2 * 3 

must be evaluated to 7 instead of 9, because multiplication
has a higher precendence over addition.

Given that addition and subtraction have lower precendence over
multiplication and division, write a program that parses
a mathematical expression such as:

1 + 2 * 3 / 6

Into an AST.

Example:

Input:

```text
  1 + 2 * 3 / 6
```

Output:

```json
  [
    "+",
    [
      "/",
      [ 
        "*",
        2,
        3
      ],
      6
    ],
    1
  ]
```
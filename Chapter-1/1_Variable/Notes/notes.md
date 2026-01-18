<variable>
===========
-> Variables are containers for storing information.
-> Creating a variable in JavaScript is called "declaring" a variable:
-> A variable declared without a value have the value undefined.

JavaScript Variables can be declared in 4 ways:

1) Automatically
2) Using var
3) Using let
4) Using const


<There are some rules while declaring a JavaScript variable (also known as identifiers).>
===========================================================================
a) Variable names must start with a letter, an underscore (_) or a dollar sign ($).

b) Variable names cannot contain spaces.

c) Variables cannot be the same as reserved keywords such as if,var or const.

d) By convention, JavaScript variable names are written in camelCase.

e)Variables should be given descriptive names that indicate their content and usage (e.g. sellingPrice and costPrice rather than x and y).

<difference between var,let and const>
======================================
 var ,let and const is a keyword to define a declared a variable which define the scope of the varible .
 <var>
 =======
-> <Scope:> Function-scoped (or globally-scoped if outside a function).
-> <Hoisting:> Hoisted to the top of its scope, but initialized as undefined.
-> <Re-declaration:> Can be re-declared within the same scope.
-> <Re-assignment:> Can be reassigned.
-> <Block-Scope:> Not block-scoped, so accessible outside block structures (like if or for loops).

 <let>
 =======
-> <Scope:> Block-scoped (limited to the nearest enclosing block {}).
-> <Hoisting:> Hoisted but not initialized, causing a "temporal dead zone" until its declaration.
-> <Re-declaration:> Cannot be re-declared within the same scope.
-> <Re-assignment:> Can be reassigned.

<const>
========
-> <Scope:>  Block-scoped (same as let).
-> <Hoisting:> Hoisted but not initialized, like let, causing a temporal dead zone.
-> <Re-declaration:> Cannot be re-declared within the same scope.
-> <Re-assignment:> Cannot be reassigned after its initial assignment, though object/array properties can be modified.
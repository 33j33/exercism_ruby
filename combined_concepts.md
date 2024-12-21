# Index

- [BASICS](#1-basics)
- [NUMBERS](#2-numbers)
- [FLOATING-POINT-NUMBERS](#3-floating-point-numbers)
- [STRINGS](#4-strings)
- [BOOLEANS](#5-booleans)
- [INSTANCE-VARIABLES](#6-instance-variables)
- [NIL](#7-nil)
- [CONDITIONALS](#8-conditionals)
- [CASE](#9-case)
- [TERNARY-OPERATOR](#10-ternary-operator)
- [LOOPS](#11-loops)
- [ARRAYS](#12-arrays)
- [RANGES](#13-ranges)
- [SYMBOLS](#14-symbols)
- [ENUMERATION](#15-enumeration)
- [ADVANCED-ENUMERATION](#16-advanced-enumeration)
- [BLOCKS](#17-blocks)
- [MULTIPLE-ASSIGNMENT-AND-DECOMPOSITION](#18-multiple-assignment-and-decomposition)
- [EXCEPTIONS](#19-exceptions)
- [MODULES](#20-modules)
- [OSTRUCT](#21-ostruct)


# 1. BASICS

# About

Ruby is a dynamic and strongly typed language. In dynamic languages the type of a variable or object is resolved at runtime, which means that its value or type can be changed up to the very last moment (when it gets parsed by the interpreter).
And what do we mean with strongly typed? Once we know the type of a variable or object, Ruby is strict about what you can do with it, for example:

```ruby
x = '2'
y = x + 'n'
# =>  '2n'
```

**But**

```ruby
x = '2'
y = x + 2
# => TypeError (no implicit conversion of Integer into String)
```

Remember, in Ruby everything is an object. Even classes are instances of the class `Class`. For example:

```ruby
1.class
# => Integer

Integer.is_a?(Object)
# => true

Class.is_a?(Object)
# => true
```

This means that we can also define classes like this:

```ruby
Car = Class.new do
  def run
    'running'
  end
end

Car.new.run
# => 'running'
```

Finally, bear in mind that the `Integer` object holds values that may be defined as one or more (consecutive) digits and its methods support many of the [mathematical operators][integers-docs].

[integers-docs]: https://ruby-doc.org/core-2.7.0/Integer.html

~~~~exercism/note
The communication in documentation often will reference instance methods using syntax like `Class#method_name` while class or module level methods are referenced as `Class::method_name`.
The `::` is called the _Scope Resolution Operator_, the constant or method at the class or module level being referenced.
You will encounter this in the Ruby documentation, and in mailing lists and other support areas.
You will find that we reference class and module methods in our writing as `ClassName.method_name` or `ModuleName.method_name`, instead.
~~~~


# Introduction

Ruby is a dynamic [object-oriented language][object-oriented-programming]. Everything in Ruby is an [object][object].

There are two primary ways to assign objects to names in Ruby - using variables or constants. Variables are always written in [snake case][snake-case]. A variable can reference different objects over its lifetime. For example, `my_first_variable` can be defined and redefined many times using the `=` operator:

```ruby
my_first_variable = 1
my_first_variable = "Some string"
my_first_variable = SomeComplexObject.new
```

Constants, however, are meant to be assigned once. They must start with capital letters and are normally written in block capitals with words separated by underscores. For example:

```ruby
MY_FIRST_CONSTANT = 10

# Redefining not allowed
# MY_FIRST_CONSTANT = "Some String"
```

Ruby is organised into classes. Classes are defined using the `class` keyword followed by the name of the class. Objects are generally created by instantiating classes using the `.new` method. For example:

```ruby
# Define the class
class Calculator
  #...
end

# Create an instance of it and assign it to a variable
my_first_calc = Calculator.new
```

Units of functionality are encapsulated in methods - similar to _functions_ in other languages. A method can optionally be defined with positional arguments, and/or keyword arguments that are defined and called using the `:` syntax. Methods either implicitly return the result of the last evaluated statement, or can explicitly return an object via the `return` keyword. Methods are invoked using `.` syntax.

```ruby
class Calculator

  # Unnamed params
  def add(num1, num2)
    return num1 + num2 # Explicit return
  end

  # Named params
  def multiply(num1:, num2:)
    num1 * num2 # Implicit return
  end
end

calc = Calculator.new
calc.add(1, 3)
calc.multiply(num1: 2, num2: 5)
```

[object-oriented-programming]: https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/oothinking.html
[object]: https://github.com/exercism/v3/blob/main/reference/concepts/objects.md
[snake-case]: https://en.wikipedia.org/wiki/Snake_case


# Introduction

This exercise will teach the fundamental building blocks of Ruby.
It covers a lot of ground, but do not worry if it feels overwhelming, we will go into everything in much more depth as we continue through the track.

One of the key things to understand about Ruby is that it is an [object-oriented language][object-oriented-programming], and that **everything in Ruby is an [object][object]**. Numbers, strings, arrays - they're all objects.

## Variables and Constants

We tend to make use of objects by assigning them names, either using variables or constants.

Variables are always written in [snake case][snake-case].
A variable can reference different objects over its lifetime.
For example, `my_first_variable` can be defined and redefined many times using the `=` operator:

```ruby
my_first_variable = 1
my_first_variable = "Some string"
my_first_variable = SomeComplexObject.new
```

Constants, however, are meant to be assigned once.
They must start with capital letters and are normally written in block capitals with words separated by underscores.
For example:

```ruby
MY_FIRST_CONSTANT = 10

# Redefining not allowed
# MY_FIRST_CONSTANT = "Some String"
```

## Classes

Ruby is organised into classes.
Classes are defined using the `class` keyword followed by the name of the class.
Objects are generally created by instantiating classes using the `.new` method.
For example:

```ruby
# Define the class
class Calculator
  #...
end

# Create an instance of it and assign it to a variable
my_first_calc = Calculator.new
```

## Methods

Units of functionality are encapsulated in methods - similar to _functions_ in other languages.

A method can be defined with positional arguments, keyword arguments (which are defined and called using the `:` syntax) or have no arguments at all.

Methods either implicitly return the result of the last evaluated statement, or can explicitly return an object via the `return` keyword.

```ruby
class Calculator

  # Positional arguments
  def add(num1, num2)
    return num1 + num2 # Explicit return
  end

  # Keyword arguments
  def multiply(num1:, num2:)
    num1 * num2 # Implicit return
  end
end
```

Methods are invoked using `.` syntax:

```ruby
calc = Calculator.new
calc.add(1, 3)
calc.multiply(num1: 2, num2: 5)
```

[object-oriented-programming]: https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/oothinking.html
[object]: https://github.com/exercism/v3/blob/main/reference/concepts/objects.md
[snake-case]: https://en.wikipedia.org/wiki/Snake_case


---

---

# 2. NUMBERS

# About

One of the key aspects of working with numbers in Ruby is the distinction between integers (numbers with no digits after the decimal separator) and floating-point numbers (numbers with zero or more digits after the decimal separator).
They are implemented through the [`Integer`][integer-ruby] and [`Float`][float-ruby] class.

```ruby
a = 1
b = 1.0
a.class
#=> Integer
b.class
#=> Float
```

- Arithmetic is done using the basic [arithmetic operators][arithmetic-operators] (`+`, `-`, `*`, `/`). Numbers can be compared using the standard [comparison operators][comparison-operators].
- Basic arithmetic operations between instances of `Integer`, will always result in an instance of `Integer`.
- Basic arithmetic operations between instances of `Float` will result in other instances of `Float`.
- Basic arithmetic operations between instances of `Integer` and instances of `Float` will result in instances of `Float`.
- The `Float` and `Integer` classes have methods that will coerce values from one to the other. `Integer` numbers are precise to a whole unit, while `Float` has precision that is fractional to an whole number. This means that coercing a float to an integer may result in loss of precision.

```ruby
4.9.to_i
#=> 4

5.to_f
#=> 5.0

7 - 3.0
#=> 4.0

2 == 4
#=> false

1.0 == 1
#=> true
```

An `if` statement can be used to conditionally execute code:

```ruby
x = 5

if x == 5
  # Execute logic if x equals 5
elsif x > 7
  # Execute logic if x greater than 7
else
  # Execute logic in all other cases
end
```

Sometimes you want to execute a statement (or statements) if a condition is _not_ true, for situations like that, Ruby implements the `unless` keyword:

```ruby
x = 4
unless x == 5
  # Execute logic if x does not equal 5
else
  # Execute logic if x == 5
end
```

If you want to execute different code depending on the value of a variable, Ruby's `case` statement might come useful:

```ruby
y = 5
case y
when 3
  # Execute logic if y equals 3
when 5
  # Execute logic if y equals 5
else
  # Execute logic in all other cases
end
```

The same problem can sometimes be solved using different types of conditional statements, sometimes one might be more suited for the problem than the other. It's a good idea to stop for a moment and also consider the other two options when using any of the three conditional statements.

[arithmetic-operators]: https://www.tutorialspoint.com/ruby/ruby_operators.htm
[comparison-operators]: https://www.w3resource.com/ruby/ruby-comparison-operators.php
[if-else-unless]: https://www.w3resource.com/ruby/ruby-if-else-unless.php
[integer-ruby]: https://ruby-doc.org/core-2.7.1/Integer.html
[float-ruby]: https://ruby-doc.org/core-2.7.1/Float.html


# Introduction

Two common types of numbers in Ruby are:

- Integers: numbers with no digits behind the decimal separator (whole numbers). Examples are `-6`, `0`, `1`, `25`, `976` and `500_000`.
- Floating-point numbers: numbers with zero or more digits behind the decimal separator. Examples are `-2.4`, `0.1`, `3.14`, `16.984025` and `1024.0`, (they also can use the `_` as a separator for readability as shown above such as `1_024.0`).

They are implemented through the `Integer` and `Float` classes.

The `Float` and `Integer` classes have methods that will coerce values from one to the other. `Integer` numbers are precise to a whole unit, while `Float` has precision that is fractional to a whole number.


---

---

# 3. FLOATING-POINT-NUMBERS

# About

A floating-point number is a number with zero or more digits behind the decimal separator. Examples are `4.0`, `0.1`, `3.14`, `-6.4` `16.984025` and `1024.0`. In Ruby, floating-point numbers are implemented through the [Float](https://ruby-doc.org/core-2.7.0/Float.html) class.

You can find a short introduction to floating-point numbers at [0.30000000000000004.com][0.30000000000000004.com].

The [Float Toy page][evanw.github.io-float-toy] has a nice, graphical explanation how a floating-point numbers' bits are converted to an actual floating-point value.

To repeatedly execute logic, one can use loops. In this example the `while` loop is useful because it keeps on looping _while_ a condition evaluates to some truthy value (i.e. not `false` or `nil`). Ruby implements a loop similar to the `while` loop. It's called the `until` loop, and you've probably guessed what it does. It keeps looping _until_ a boolean condition evaluates to `true`. In some languages, to make a piece of code execute an unlimited number of times, constructs like `while true` are used. In Ruby, the `loop` loop exists for that purpose. Even though the `loop` loop does not depend on a single condition, it can be canceled by using a `return` or `break` keyword.

The `#years_before_desired_balance` method from the previous exercise could have been written by using any of the three mentioned loops:

## `while`

```ruby
def self.years_before_desired_balance(current_balance, desired_balance)
  years = 0
  while current_balance < desired_balance
    current_balance = annual_balance_update(current_balance)
    years += 1
  end
  years
end
```

## `until`

```ruby
def self.years_before_desired_balance(current_balance, desired_balance)
  years = 0
  until current_balance >= desired_balance
    current_balance = annual_balance_update(current_balance)
    years += 1
  end
  years
end
```

## `loop`

```ruby
def self.years_before_desired_balance(current_balance, desired_balance)
  years = 0
  loop do
    current_balance = annual_balance_update(current_balance)
    years += 1
    return years if current_balance >= desired_balance
  end
end
```

As you have probably noticed, Ruby has no increment operator (`i++`) like some other languages do. Instead, constructs like `i += 1` (which is equal to `i = i + 1`) can be used.

[0.30000000000000004.com]: https://0.30000000000000004.com/
[evanw.github.io-float-toy]: https://evanw.github.io/float-toy/


# Loops

A floating-point number is a number with zero or more digits behind the decimal separator. Examples are `4.0`, `0.1`, `3.14`, `-6.4` `16.984025` and `1024.0`.
In Ruby, floating-point numbers are implemented through the [Float](https://ruby-doc.org/core-2.7.0/Float.html) class.


---

---

# 4. STRINGS

# About

The key thing to remember about Ruby strings is that they are objects that you call methods on. You can find all the methods in the [Ruby docs][ruby-doc.org-string]

It's also worth knowing that strings can be created using single quotes (`'`) or double quotes (`"`). Single-quoted strings don't process ASCII escape codes(\n, \t etc.), and they don't do [string interpolation][ruby-for-beginners.rubymonstas.org-interpolation] while double-quoted does both.

You can also create strings using the [heredoc syntax][ruby-heredoc] or using the `%q` and `%Q` helpers.

[ruby-for-beginners.rubymonstas.org-interpolation]: http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html
[ruby-doc.org-string]: https://ruby-doc.org/core-2.7.0/String.html
[ruby-heredoc]: https://www.rubyguides.com/2018/11/ruby-heredoc/


# Introduction

A `String` in Ruby is an object that holds and manipulates an arbitrary sequence of bytes, typically representing characters. Strings are manipulated by calling the string's methods.


# Introduction

Like everything in Ruby, a `String` is an object.
Strings are made up of an arbitrary sequence of bytes (normally characters) and are initialized and manipulated like any other object.
In fact, one of the most useful things about Ruby is the numerous methods that can be called on strings (and other objects) to save you a lot of time writing code.
In this exercise we are going to explore and play with some of those helper methods.

## Creating a string

Although you can use `String.new(...)` to create a string, it is much more common to use a literal.
There are lots of different literals you can use - and they split into two categories: those that allow interpolation and those that don't.

The most common literals are single and double quotes (`'...'` and `"..."`).
Single quotes do not allow interpolation, whereas double quotes do.
Interpolation is where one string is included in another using the `#{}` syntax.

```
# Use single quotes when not interpolated
location = 'World'

# And double quotes when interpolated
puts "Hello, #{location}!"   #=> "Hello, World!"
```

You can also use other literals such `%{... }` for interpolated strings and `%q{...}` for non-interpolated strings.
These are useful if your strings have the characters `'` or `"` in them.

_Note: There's no absolute rule saying you have to use non-interpolated strings if your string does not contain interpolation._

## Interacting with strings

It is helpful to think of Strings in Ruby in a similar way to how you think of Arrays.
They have a size and their characters are indexed (with `0` as the first index):

```ruby
my_string = "Some string"

my_string.size   #=> 11

my_string[0]    #=> 'S'
my_string[1]    #=> 'o'
my_string[-1]   #=> 'g'

# Find the first index of a character
my_string.index('m')   #=> 2
```

Parts of strings can be extracted using indexes or `slice`:
```ruby
my_string = "Some string"

# Find three characters starting with the second character (index 1)
my_string[1, 3]         #=> "ome"
my_string.slice(1, 3)   #=> "ome"
```

The semantic values of strings can also be manipulated.
It's worth exploring the [Ruby docs][docs-string] to learn about all the methods, but here are a few commonly used examples:
```
"hello".capitalize   #=> "Hello"
"HELLO".downcase     #=> "hello"
"hello".center(9)    #=> "  hello  "
"  hello  ".strip    #=> "hello"

"hello world".split(" ")   #=> ["hello", "world"]
```

You can also use methods such as `gsub` to substitute characters:
```
# Replace one character with another
"noob".gsub("o","0")   #=> "n00b"

# (Advanced) Replace a regular expression
"Ruby really rocks".gsub(/[aieou]/,'')   #=> "Rby rlly rcks"
```

In all of the examples above, a new `String` is returned.
However, many methods have equivalents which end in `!` which actually modify the string itself.

```
# Use normal methods to return new strings
my_string = "hello"
my_string.capitalize   #=> "Hello"
puts my_string         #=> "hello"

# And bang-methods (...!) to modify the object
my_string = "hello"
my_string.capitalize!  #=> "Hello"
puts my_string         #=> "Hello"
```

[docs-string]: https://ruby-doc.org/core-2.7.0/String.html


---

---

# 5. BOOLEANS

# About

## True, False

- `true` and `false` are used to represent boolean logical states.
  - They are singleton instances of the [`TrueClass`][true-class] and [`FalseClass`][false-class] objects.
  - they may occur as literals in code, or as the result of logical (`&&`, `||`, `!`) or [comparison][comparable-class] (`<`, `>`, `==`) methods.

## _Truthy_ and _falsey_

- When not using strict Boolean values, _truthy_ and _falsey_ evaluation rules are applied:

  - Only `false` and `nil` evaluates as _falsey_.
  - Everything else evaluates as _truthy_.

  ```ruby
  # A simplified definition
  def falsey
    nil || false
  end

  def truthy
    not falsey
  end
  ```

[c-family]: https://en.wikipedia.org/wiki/List_of_C-family_programming_languages
[control-expressions]: https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures
[true-class]: https://docs.ruby-lang.org/en/master/TrueClass.html
[false-class]: https://docs.ruby-lang.org/en/master/FalseClass.html
[nil-class]: https://docs.ruby-lang.org/en/master/NilClass.html
[comparable-class]: https://docs.ruby-lang.org/en/master/Comparable.html
[constants]: https://www.rubyguides.com/2017/07/ruby-constants/
[integer-class]: https://docs.ruby-lang.org/en/master/Integer.html
[kernel-class]: https://docs.ruby-lang.org/en/master/Kernel.html
[methods]: https://launchschool.com/books/ruby/read/methods
[returns]: https://www.freecodecamp.org/news/idiomatic-ruby-writing-beautiful-code-6845c830c664/


# Introduction

## True and False

True and false logical states are represented with `true` and `false` in Ruby. These may either be used as literals on their own, or as a result of logical or comparison methods.

```ruby
happy = true
sad = false

true && false
# => false

1 < 2
# => true
```

## _Truthy_ and _falsey_

When evaluating objects in `if` statements or other boolean contexts, all objects evaluate as _truthy_ **except** for `false` and `nil`.

## Control flow

_Truthy_ and _falsey_ evaluations are useful in the context of control flow. Like in procedural languages, Ruby has an `if`...`else` construct, but it may be more common to use `if` as a "guarding" statement to modify the evaluation of an expression.

```ruby
def falsey
  nil || false
end

def truthy
  not falsey
end

if truthy
  # this block is evaluated
end

if falsey
  # this block is not evaluated
else
  # this block is evaluated
end

1 + 1 if truthy
# this will evaluate and return 2

2 + 2 if falsey
# the numbers are not added because of the modifier, nil is returned
```

Ruby provides `unless` to make code read well. E.g.) Rather than `eat_desert if not too_full`, we can also write `eat_desert unless too_full`.

```ruby
3 + 3 unless truthy
# the numbers are not added because of the modifier, nil is returned

4 + 4 unless falsey
# this will evaluate and return 8
```

[nil-dictionary]: https://www.merriam-webster.com/dictionary/nil


# Introduction

## True and False

True and false logical states are represented with `true` and `false` in Ruby. 

```ruby
happy = true
sad = false
```

## Equality and comparison

Ruby allows you to compare objects to each other using the normal equality symbols:
- Use `==` to see if two objects are equal
- Use `>` to see if the object on the left is **greater than** the object on the right
- Use `<` to see if the object on the left is **less than** the object on the right.
- Use `>=` or `<=` to test for "greater than or equal to" and "less than or equal to" respectively.

You can also use boolean logic with the normal operators:
- Use `&&` or `and` to check if `x and y` are true
- Use `||` or `or` to check if `x or y` is true.
- Use `!` or `not` to invert equality - e.g. `x != y` (x does not equal y)

Here are some examples:
```ruby
# Is "true equal to false"? 
true == false # false

# Is "true not equal to false"
true != false # true

# Is 5 greater than 4?
5 > 4 # true

# Is 3 less than or equal to 2?
3 <= 2 # false
```

[nil-dictionary]: https://www.merriam-webster.com/dictionary/nil


---

---

# 6. INSTANCE-VARIABLES

# About

## Key Points:

- When a class' `.new` method is called to create an object instance, the `.initialize` method is passed all arguments to initialize the instance's state.
- instance variable names are prefixed with `@`.
- instance variables default to `nil` until they are explicitly set.
- instance variables are private by default, and they should be manipulated with getters and setters

```ruby
class Backpack
  initialize(owner)
    @owner = owner
  end

  def owner
    @owner
  end

  def owner=(new_owner)
    @owner = new_owner
  end
end
```

- Methods named with a trailing `=` are recognized as setters by Ruby, and allow the syntactic "sugar" use of the assignment syntax, e.g. `Backpack.new("Sven").owner = "Ayah"`. Notice the space between `owner` and `=` while the actual method name is `owner=`.
- Getters and setters can be created using the `attr_reader`, `attr_writer`, and `attr_accessor` methods:
  - `attr_reader`: Create getters for the symbols listed
  - `attr_writer`: Create setters for the symbols listed
  - `attr_accessor`: Create getters and setters for the symbols listed

```ruby
class Backpack
  attr_accessor :owner

  initialize(owner)
    @owner = owner
  end
end
```

- Why use getters and setters rather than the instance variable directly?
  - If there was a typographical error (we call these "typo") in the previous example (e.g. `@ownar`), it would fail silently, potentially introducing a bug into the system.
  - Getters and setters make this explicit, and will raise an error when a typo is made

## References

### Initializing object instances

- [Ruby Guides: Initialize Method][rg-initialize-method]

### Instance variables

- [Ruby For Beginners: Instance variables][rfb-instance-variables]
- [Ruby Guides: Instance variables][rg-instance-variables]
- [Ruby User's Guide: Instance variables][rug-instance-variables]
- [Geeks for Geeks: Ruby Getters and Setters Methods][gfg-getter-setters]
- [Mix & Go: Ruby's attr_accessor, attr_reader, attr_writer][mg-attr]

[mg-attr]: https://mixandgo.com/learn/ruby_attr_accessor_attr_reader_attr_writer
[rfb-instance-variables]: http://ruby-for-beginners.rubymonstas.org/writing_classes/instance_variables.html
[rg-initialize-method]: https://www.rubyguides.com/2019/01/ruby-initialize-method/
[rg-instance-variables]: https://www.rubyguides.com/2019/07/ruby-instance-variables/
[rug-instance-variables]: https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/instancevars.html
[gfg-getter-setters]: https://www.geeksforgeeks.org/ruby-getters-and-setters-method/


# Introduction

Objects can hold their own state by setting _instance variables_, which are created by prefixing `@` to a variable name.

```ruby
@name = 2
```

Objects usually set their initial state in an `initialize` method, which is automatically called when calling `new` on a class.

```ruby
class Airplane
  def initialize
    @wings = 2
  end
end
```

The `initialize` method may also take arguments, so that each instance can start with a custom state:

```ruby
class Suitcase
  def initialize(locked)
    @locked = locked
  end
end
```

Consider _instance_ variables to be private from external read and writes. _Instance_ methods should be used for getting and setting instance variables:

```ruby
class Suitcase
  #...

  def locked? # Query methods should be named with a trailing `?`
    @locked
  end

  def unlock! # Methods which mutate state should have trailing `!`
    @locked = false
  end
end
```


# Introduction

## Instance Variables

Objects can hold their own state by setting _instance variables_.
These variables live within an object and are normally used to store some internal state.

Instance variables always start with an `@`.
You can create a new instance variable by setting a variable starting with an `@`.
For example:

```ruby
class Repeater
  def hear(something)
    # Save what's been heard into a new instance variable called @heard
    @heard = something
  end

  def repeat
    # Return the value of the instance variable
    @heard
  end
end

repeater = Repeater.new
repeater.hear("Hello, friend!")
print repeater.repeat # Prints "Hello, friend!"
```

Objects usually set their initial state in an `initialize` method, which is automatically called when calling `new` on a class.

```ruby
class Airplane
  def initialize
    @wings = 2
  end

  def wings
    @wings
  end
end

plane = Airplane.new
plane.wings # returns 2
```

The `initialize` method may also take arguments, so that each instance can start with a custom state:

```ruby
class Suitcase
  def initialize(locked)
    @locked = locked
  end
end
```

It is good practice to consider _instance_ variables to be private from external read and writes.
We instead define methods to get and set their values.
For example:

```ruby
class Suitcase
  def initialize
    @locked = false
  end

  def locked? # Query methods should be named with a trailing `?`
    @locked
  end

  def lock! # Methods which mutate state should have trailing `!`
    @locked = true
  end
end

suitcase = Suitcase.new
suitcase.locked? # false
suitcase.lock!
suitcase.locked? # true
```

## Nil

[Nil][nil-dictionary] is an English word meaning "nothing" or "zero".
In Ruby, `nil` is used to express the _absence_ of an object.
In other programming languages, `null` or `none` values may play a similar role.

```ruby
# I do not have a favorite color
favorite_color = nil
```

Ruby gives any instance variable the default value of `nil` when it is first encountered, until it is otherwise given a value.

```ruby
print @favourite_color # prints nil
@favourite_color = "blue"
print @favourite_color # prints "blue"
```

[nil-dictionary]: https://www.merriam-webster.com/dictionary/nil


---

---

# 7. NIL

# About

[Nil][nil-dictionary] is an English word meaning "nothing" or "zero". In Ruby, `nil` is an object which is used to express the _absence_ of a value. In other programming languages, `null` or `none` values may play a similar role.

```ruby
# I do not have a favorite color
favorite_color = nil
```

Ruby gives any instance variable the default value of `nil` when it is first encountered, until it is set otherwise.

[nil-dictionary]: https://www.merriam-webster.com/dictionary/nil


# Introduction


[Nil][nil-dictionary] is an English word meaning "nothing" or "zero". In Ruby, `nil` is used to express the _absence_ of an object. In other programming languages, `null` or `none` values may play a similar role.

```ruby
# I do not have a favorite color
favorite_color = nil
```

Ruby gives any instance variable the default value of `nil` when it is first encountered, until it is set otherwise.

[nil-dictionary]: https://www.merriam-webster.com/dictionary/nil


---

---

# 8. CONDITIONALS

# Conditionals

Ruby has what is known as flow control expressions, these are used to control the way the program will run and they take a truthy or falsey value.
There are operators that can be used to create truthy or falsey values, these are known as [comparison operators][comparison-operators].

There are two main control expressions that are used to control which code will run and which will not.
Also known as which given branch will run.

Those two are: `if` and the `unless` expression.

## Comparison operators

[Comparison operators][comparison-operators] are used to compare values and return a `true` or `false` value.
The following operators require two values to be compared of the same type.
If the values are not of the same type then the compiler will throw an error.
Here is a list of the operators and an example of when they give a `true` value:

| Method | Description           | Example |
| ------ | --------------------- | ------- |
| <      | less than             | 5 < 4   |
| <=     | less than or equal    | 4 <= 4  |
| >      | greater than          | 3 > 1   |
| >=     | greater than or equal | 2 >= 2  |

The equal and not equal operators can be used to compare any type of value contrary to the operators already mentioned.
The `==` operator is used to check if two values are equal, and that includes checking the type of the value.
The `!=` works the same way but it will return `true` if the values are not equal and `false` if they are equal.
Here is a list of the equal and not equal operators and an example of when they give a `true` value:

| Method | Description  | Example |
| ------ | ------------ | ------- |
| ==     | equal        | 4 == 4  |
| !=     | not equal    | 5 != 4  |

## Combined comparison operator

The combined comparison operator (sometimes called spaceship operator) is a special comparison operator.
It is special in the sense that it doesn't return a truthy or falsey value but it returns a number.
It is written as `<=>` and it is used to compare 2 values.
It will return `1` if the left value is greater than the right value, `-1` if the left value is less than the right value, and `0` if the values are equal.

```ruby
1 <=> 2 # => -1
2 <=> 2 # => 0
3 <=> 2 # => 1
```

## If statement

The [`if`][if] statement is used to check if a given condition is "truthy" or "falsey".
If the condition is truthy then the code inside the if statement will run.
An `if` statement ends with the `end` keyword.

```ruby
value = 1
if value == 1
  "1 is equal to 1"
end
# => "1 is equal to 1"

if value > 2
  "1 is greater than 2"
end
# => nil
```

## Unless statement

The `unless`unless statement works very similarly to the `if` statement but it will run the code inside the `unless` statement if the condition is falsey.

```ruby
value = 1
unless value == 1
  "1 is not equal to 1"
end
# => nil

unless value > 2
  "1 is not greater than 2"
end
# => "1 is not greater than 2"
```

## Else statement

The `else` statement can be used in conjunction with the `if` and `unless` statements.
The `else` statement will be executed if the `if` branch or the `unless` branch is not executed.

```ruby
value = 1
if value == 1
  "1 is equal to 1"
else
  "1 is not equal to 1"
end
# => "1 is equal to 1"

unless value < 2
  "1 is not greater than 2"
end
# => "1 is greater than 2"
```

## "Cascading-if" statements

The `elsif` statement can be used in conjunction with the if statement.
The `elsif` statement will be executed if the if branch is not executed and the condition of the elsif statement is truthy.
Elsif statements can be chained together and the first truthy condition will be executed.
There can also be an else statement at the end of the if statement which will run if non of the earlier statement has been true.

```ruby
value = 1
if value != 1
  "1 is not equal to 1"
elsif value > 2
  "1 is greater than 2"
else
  "1 is not equal to 1 and 1 is not greater than 2"
end
# => "1 is not equal to 1 and 1 is not greater than 2"
```

## if and unless as suffix

The if and unless statement can also be used as a [suffix][if-as-suffix], this is useful when you want to run a single line of code if a condition is true.
It is done by putting the if or unless statement after the code that you want to run.

```ruby
value = 1
"1 is equal to 1" if value == 1
# => 1 is equal to 1

"1 is not equal to 1" unless value == 1
# => nil
```

[comparison-operators]: https://www.w3resource.com/ruby/ruby-comparison-operators.php
[if]: https://www.rubyguides.com/ruby-tutorial/ruby-if-else/


# Conditionals

Ruby has what is known as flow control expressions, these are used to control the way the program will run and they take a truthy or falsey value.
There are operators that can be used to create truthy or falsey values, these are known as [comparison operators][comparison-operators].

There are two main control expressions that are used to control which code will run and which will not.
Also known as which given branch will run.

Those two are: `if` and the `unless` expression.

## Comparison operators

[Comparison operators][comparison-operators] are used to compare values and return a `true` or `false` value.
The following operators require two values to be compared of the same type.
If the values are not of the same type then the compiler will throw an error.
Here is a list of the operators and an example of when they give a `true` value:

| Method | Description           | Example |
| ------ | --------------------- | ------- |
| <      | less than             | 5 < 4   |
| <=     | less than or equal    | 4 <= 4  |
| >      | greater than          | 3 > 1   |
| >=     | greater than or equal | 2 >= 2  |

The equal and not equal operators can be used to compare any type of value contrary to the operators already mentioned.
The `==` operator is used to check if two values are equal, and that includes checking the type of the value.
The `!=` works the same way but it will return `true` if the values are not equal and `false` if they are equal.
Here is a list of the equal and not equal operators and an example of when they give a `true` value:

| Method | Description  | Example |
| ------ | ------------ | ------- |
| ==     | equal        | 4 == 4  |
| !=     | not equal    | 5 != 4  |

## If statement

The [`if`][if] statement is used to check if a given condition is "truthy" or "falsey".
If the condition is truthy then the code inside the if statement will run.
An `if` statement ends with the `end` keyword.

```ruby
value = 1
if value == 1
  "1 is equal to 1"
end
# => "1 is equal to 1"

if value > 2
  "1 is greater than 2"
end
# => nil
```

## Unless statement

The `unless`unless statement works very similarly to the `if` statement but it will run the code inside the `unless` statement if the condition is falsey.

```ruby
value = 1
unless value == 1
  "1 is not equal to 1"
end
# => nil

unless value > 2
  "1 is not greater than 2"
end
# => "1 is not greater than 2"
```

## Else statement

The `else` statement can be used in conjunction with the `if` and `unless` statements.
The `else` statement will be executed if the `if` branch or the `unless` branch is not executed.

```ruby
value = 1
if value == 1
  "1 is equal to 1"
else
  "1 is not equal to 1"
end
# => "1 is equal to 1"

unless value < 2
  "1 is not greater than 2"
end
# => "1 is greater than 2"
```

## "Cascading-if" statements

The `elsif` statement can be used in conjunction with the if statement.
The `elsif` statement will be executed if the if branch is not executed and the condition of the elsif statement is truthy.
Elsif statements can be chained together and the first truthy condition will be executed.
There can also be an else statement at the end of the if statement which will run if non of the earlier statement has been true.

```ruby
value = 1
if value != 1
  "1 is not equal to 1"
elsif value > 2
  "1 is greater than 2"
else
  "1 is not equal to 1 and 1 is not greater than 2"
end
# => "1 is not equal to 1 and 1 is not greater than 2"
```

[comparison-operators]: https://www.w3resource.com/ruby/ruby-comparison-operators.php
[if]: https://www.rubyguides.com/ruby-tutorial/ruby-if-else/


# Introduction

## Numbers

The two most common types of numbers in Ruby are:

- **Integers:** numbers with no digits behind the decimal separator (whole numbers). Examples are `-6`, `0`, `1`, `25`, `976` and `500000`.
- **Floating-point numbers:** numbers with one or more digits behind the decimal separator. Examples are `-2.4`, `0.1`, `3.14`, `16.984025` and `1024.0`.

They are implemented through the `Integer` and `Float` classes.

These classes have methods that will coerce values from one to the other. `Integer` numbers are precise to a whole unit, while `Float` has precision that is fractional to a whole number:
- `Integer#to_f`: Coerce to a new float
- `Float#ceil`: Round up to the nearest integer
- `Float#floor`: Round down to the nearest integer
- `Float#round`: Round to the nearest integer
- `Float#to_i`: Truncate to the nearest integer

## Conditionals

Ruby has what is known as flow control expressions, these are used to control the way the program will run and they take a truthy or falsey value.
There are operators that can be used to create truthy or falsey values, these are known as [comparison operators][comparison-operators].

There are two main control expressions that are used to control which code will run and which will not.
Also known as which given branch will run.

Those two are: `if` and the `unless` expression.

## Comparison operators

[Comparison operators][comparison-operators] are used to compare values and return a `true` or `false` value.
The following operators require two values to be compared of the same type.
If the values are not of the same type then the compiler will throw an error.
Here is a list of the operators and an example of when they give a `true` value:

| Method | Description           | Example |
| ------ | --------------------- | ------- |
| <      | less than             | 5 < 4   |
| <=     | less than or equal    | 4 <= 4  |
| >      | greater than          | 3 > 1   |
| >=     | greater than or equal | 2 >= 2  |

The equal and not equal operators can be used to compare any type of value contrary to the operators already mentioned.
The `==` operator is used to check if two values are equal, and that includes checking the type of the value.
The `!=` works the same way but it will return `true` if the values are not equal and `false` if they are equal.
Here is a list of the equal and not equal operators and an example of when they give a `true` value:

| Method | Description  | Example |
| ------ | ------------ | ------- |
| ==     | equal        | 4 == 4  |
| !=     | not equal    | 5 != 4  |

## If statement

The [`if`][if] statement is used to check if a given condition is "truthy" or "falsey".
If the condition is truthy then the code inside the if statement will run.
An `if` statement ends with the `end` keyword.

```ruby
value = 1
if value == 1
  "1 is equal to 1"
end
# => "1 is equal to 1"

if value > 2
  "1 is greater than 2"
end
# => nil
```

## Unless statement

The `unless`unless statement works very similarly to the `if` statement but it will run the code inside the `unless` statement if the condition is falsey.

```ruby
value = 1
unless value == 1
  "1 is not equal to 1"
end
# => nil

unless value > 2
  "1 is not greater than 2"
end
# => "1 is not greater than 2"
```

## Else statement

The `else` statement can be used in conjunction with the `if` statement.
The `else` statement will be executed if the `if` branch is not executed.

```ruby
value = 1
if value == 1
  "1 is equal to 1"
else
  "1 is not equal to 1"
end
# => "1 is equal to 1"
```

## "Cascading-if" statements

The `elsif` statement can be used in conjunction with the if statement.
The `elsif` statement will be executed if the if branch is not executed and the condition of the elsif statement is truthy.
Elsif statements can be chained together and the first truthy condition will be executed.
There can also be an else statement at the end of the if statement which will run if non of the earlier statement has been true.

```ruby
value = 1
if value != 1
  "1 is not equal to 1"
elsif value > 2
  "1 is greater than 2"
else
  "1 is not equal to 1 and 1 is not greater than 2"
end
# => "1 is not equal to 1 and 1 is not greater than 2"
```

[comparison-operators]: https://www.w3resource.com/ruby/ruby-comparison-operators.php
[if]: https://www.rubyguides.com/ruby-tutorial/ruby-if-else/


---

---

# 9. CASE

# Case

[Case][case] (often referred to as switch in other languages) is a form of control expression like if-else.
Case allows for chaining of multiple if-else-if statements and can be more readable while still providing flow control.

A case is defined by the keyword `case` followed by an optional expression.
Then for each case, the keyword `when` is used followed by an expression which is compared to the case expression.
The `when` keyword should not be indented from the `case` keyword.
After the `when` keyword is the code that should be executed if the case expression matches the when expression.
Case allows for an optional `else` statement which is executed if no other case matches.

The case expression is evaluated and then compared to each `when` expression.
The expression is compared using the case equality operator (`===`).

```ruby
value = 1
case value
when 1
  "One"
when 2
  "Two"
else
  "Other"
end

# This is the same as:
value = 1
if 1 === value
  "One"
elsif 2 === value
  "Two"
else
  "Other"
end
```

## Case equality operator (`===`)

The case equality operator (`===`) is a bit different from the equality operator (`==`).
The operator checks if the right side is a member of the set described by the left side.
This means that it does matter where each operand is placed.
How this works depends on the type of the left side, for example a `Range` would check if the right side is in the range or a `Object` would check if the right side is an instance of the `Object`.

```ruby
(1..3) == 1  # => false
(1..3) === 1 # => true

String == "foo"  # => false
String === "foo" # => true
```

## Case with multiple expressions

Cases allow for matching multiple expressions in a single case with each possible value separated by a comma.
It will execute the code if any of the expressions match.
This can be useful when you want a single case to have multiple possible values.

```ruby
case var
when 1, 2
  "One or two"
else
  "Other"
end
```

## Cases with ranges

Cases can also check if a value is in a range.
This is done by having a range as the when expression.

```ruby
case var
when 1..3
  puts "One to three"
else
  puts "Other"
end
```

## Cases with no case expression

When there is no need for a case expression, it is possible to omit it.
Doing this will make it so that each case expression is evaluated for truthiness.
And makes them behave like if-else-if statements.

```ruby
case
when 1 == 1
  "One is equal to one"
when 1 > 2
  "One is greater than two"
else
  "Other"
end
```

## Single line when

Ruby allows for single line case statements.
This can be used when you have a simple single line statement.
The single line when statement is written as `when <expression> then <statement>`.
And when used in the else statement it is written as `else <statement>`.

```ruby
case var
when 1 then "One"
when 2 then "Two"
else "Other"
end
```

## Case with types

Case allows for the matching with types.
This is useful when wanting different behavior depending on the type of a variable.

```ruby
case var
when Integer
  "Integer"
when String
  "String"
else
  "Other"
end
```

[case]: https://www.rubyguides.com/2015/10/ruby-case/


# Case

[Case][case] (often referred to as switch in other languages) is a form of control expression like if-else.
Case allows for chaining of multiple if-else-if statements and can be more readable while still providing flow control.

A case is defined by the keyword `case` followed by an optional expression.
Then for each case, the keyword `when` is used followed by an expression which is compared to the case expression.
The `when` keyword should not be indented from the `case` keyword.
After the `when` keyword is the code that should be executed if the case expression matches the when expression.
Case allows for an optional `else` statement which is executed if no other case matches.

The case expression is evaluated and then compared to each `when` expression.
The expression is compared using the case equality operator (`===`).

```ruby
value = 1
case value
when 1
  "One"
when 2
  "Two"
else
  "Other"
end

# This is the same as:
value = 1
if 1 === value
  "One"
elsif 2 === value
  "Two"
else
  "Other"
end
```

## Case equality operator (`===`)

The case equality operator (`===`) is a bit different from the equality operator (`==`).
The operator checks if the right side is a member of the set described by the left side.
This means that it does matter where each operand is placed.
How this works depends on the type of the left side, for example a `Range` would check if the right side is in the range or a `Object` would check if the right side is an instance of the `Object`.

```ruby
(1..3) == 1  # => false
(1..3) === 1 # => true

String == "foo"  # => false
String === "foo" # => true
```

## Case with multiple expressions

Cases allow for matching multiple expressions in a single case with each possible value separated by a comma.
It will execute the code if any of the expressions match.
This can be useful when you want a single case to have multiple possible values.

```ruby
case var
when 1, 2
  "One or two"
else
  "Other"
end
```

## Cases with ranges

Cases can also check if a value is in a range.
This is done by having a range as the when expression.

```ruby
case var
when 1..3
  puts "One to three"
else
  puts "Other"
end
```

## Cases with no case expression

When there is no need for a case expression, it is possible to omit it.
Doing this will make it so that each case expression is evaluated for truthiness.
And makes them behave like if-else-if statements.

```ruby
case
when 1 == 1
  "One is equal to one"
when 1 > 2
  "One is greater than two"
else
  "Other"
end
```

## Single line when

Ruby allows for single line case statements.
This can be used when you have a simple single line statement.
The single line when statement is written as `when <expression> then <statement>`.
And when used in the else statement it is written as `else <statement>`.

```ruby
case var
when 1 then "One"
when 2 then "Two"
else "Other"
end
```

## Case with types

Case allows for the matching with types.
This is useful when wanting different behavior depending on the type of a variable.

```ruby
case var
when Integer
  "Integer"
when String
  "String"
else
  "Other"
end
```

[case]: https://www.rubyguides.com/2015/10/ruby-case/


# Case

[Case][case] (often referred to as switch in other languages) is a form of control expression like if-else.
Case allows for chaining of multiple if-else-if statements and can be more readable while still providing flow control.

A case is defined by the keyword `case` followed by an optional expression.
Then for each case, the keyword `when` is used followed by an expression which is compared to the case expression.
The `when` keyword should not be indented from the `case` keyword.
After the `when` keyword is the code that should be executed if the case expression matches the when expression.
Case allows for an optional `else` statement which is executed if no other case matches.

The case expression is evaluated and then compared to each `when` expression.
The expression is compared using the case equality operator (`===`).

```ruby
value = 1
case value
when 1
  "One"
when 2
  "Two"
else
  "Other"
end

# This is the same as:
value = 1
if 1 === value
  "One"
elsif 2 === value
  "Two"
else
  "Other"
end
```

## Case equality operator (`===`)

The case equality operator (`===`) is a bit different from the equality operator (`==`).
The operator checks if the right side is a member of the set described by the left side.
This means that it does matter where each operand is placed.
How this works depends on the type of the left side, for example a `Range` would check if the right side is in the range or a `Object` would check if the right side is an instance of the `Object`.

```ruby
(1..3) == 1  # => false
(1..3) === 1 # => true

String == "foo"  # => false
String === "foo" # => true
```

## Case with multiple expressions

Cases allow for matching multiple expressions in a single case with each possible value separated by a comma.
It will execute the code if any of the expressions match.
This can be useful when you want a single case to have multiple possible values.

```ruby
case var
when 1, 2
  "One or two"
else
  "Other"
end
```

## Cases with ranges

Cases can also check if a value is in a range.
This is done by having a range as the when expression.

```ruby
case var
when 1..3
  puts "One to three"
else
  puts "Other"
end
```

## Cases with no case expression

When there is no need for a case expression, it is possible to omit it.
Doing this will make it so that each case expression is evaluated for truthiness.
And makes them behave like if-else-if statements.

```ruby
case
when 1 == 1
  "One is equal to one"
when 1 > 2
  "One is greater than two"
else
  "Other"
end
```

## Single line when

Ruby allows for single line case statements.
This can be used when you have a simple single line statement.
The single line when statement is written as `when <expression> then <statement>`.
And when used in the else statement it is written as `else <statement>`.

```ruby
case var
when 1 then "One"
when 2 then "Two"
else "Other"
end
```

## Case with types

Case allows for the matching with types.
This is useful when wanting different behavior depending on the type of a variable.

```ruby
case var
when Integer
  "Integer"
when String
  "String"
else
  "Other"
end
```

[case]: https://www.rubyguides.com/2015/10/ruby-case/


---

---

# 10. TERNARY-OPERATOR

# The ternary operator

A ternary conditional is a shorter way of writing simple `if/else` statements. 
If an `if/else` statement contains only two branches, one for when the condition is true and one for when it is false, it can be re-written as a ternary conditional.

Ternaries use a combination of the `?` and `:` symbols to split up a conditional:
```ruby
condition ? true_branch : false_branch
```

The code on the left side of the `?` is the condition and the code on the right contains the two possible branches, separated by the `:`. 
If the condition is _true_, the code on the _left_ side of the `:` is executed.
If the condition is _false_, then the code on the _right_ of the `:` gets executed.

For example:

```ruby
if traffic_light == 'green'
  cross_the_road
else
  wait
end
```

can be re-written as:

```ruby
traffic_light == 'green' ? cross_the_road : wait
```



# The ternary operator

A ternary conditional is a shorter way of writing simple `if/else` statements. 
If an `if/else` statement contains only two branches, one for when the condition is true and one for when it is false, it can be re-written as a ternary conditional.

Ternaries use a combination of the `?` and `:` symbols to split up a conditional:
```ruby
condition ? true_branch : false_branch
```

The code on the left side of the `?` is the condition and the code on the right contains the two possible branches, separated by the `:`. 
If the condition is _true_, the code on the _left_ side of the `:` is executed.
If the condition is _false_, then the code on the _right_ of the `:` gets executed.

For example:

```ruby
if traffic_light == 'green'
  cross_the_road
else
  wait
end
```

can be re-written as:

```ruby
traffic_light == 'green' ? cross_the_road : wait
```



# Introduction

## The ternary operator

A ternary conditional is a shorter way of writing simple `if/else` statements.
If an `if/else` statement contains only two branches, one for when the condition is true and one for when it is false, it can be re-written as a ternary conditional.

Ternaries use a combination of the `?` and `:` symbols to split up a conditional:

```ruby
condition ? true_branch : false_branch
```

The code on the left side of the `?` is the condition and the code on the right contains the two possible branches, separated by the `:`.
If the condition is _true_, the code on the _left_ side of the `:` is executed.
If the condition is _false_, then the code on the _right_ of the `:` gets executed.

For example:

```ruby
if traffic_light == 'green'
  cross_the_road
else
  wait
end
```

can be re-written as:

```ruby
traffic_light == 'green' ? cross_the_road : wait
```


---

---

# 11. LOOPS

# About

## `while`

```ruby
def self.years_before_desired_balance(current_balance, desired_balance)
  years = 0
  while current_balance < desired_balance
    current_balance = annual_balance_update(current_balance)
    years += 1
  end
  years
end
```

## `until`

```ruby
def self.years_before_desired_balance(current_balance, desired_balance)
  years = 0
  until current_balance >= desired_balance
    current_balance = annual_balance_update(current_balance)
    years += 1
  end
  years
end
```

## `loop`

```ruby
def self.years_before_desired_balance(current_balance, desired_balance)
  years = 0
  loop do
    current_balance = annual_balance_update(current_balance)
    years += 1
    return years if current_balance >= desired_balance
  end
end
```

As you have probably noticed, Ruby has no increment operator (`i++`) like some other languages do. Instead, constructs like `i += 1` (which is equal to `i = i + 1`) can be used.

[0.30000000000000004.com]: https://0.30000000000000004.com/
[evanw.github.io-float-toy]: https://evanw.github.io/float-toy/


# Introduction

There are several ways to write loops in Ruby, one of them is the `while` loop:

```ruby
counter = 0

while counter < 5
  counter += 1
end
```


---

---

# 12. ARRAYS

# About

Data structures that can hold zero or more elements are known as _collections_. An **array** in Ruby is a collection that maintains the ordering in which its objects are added. Arrays can hold any object. Objects can be added to an array or retrieved from it using an index. Ruby array indexing is zero-based, meaning that the first element's index is always zero:

```ruby
# Declare an array containing two values
two_ints = [1,2]

# Assign first and second element by index
two_ints[0] = 7
two_ints[1] = 8

# Retrieve the second element by index
two_ints[1] # => 8

# Check the length of the array
two_ints.size # => 2
```

In Ruby there are multiple ways of creating an Array:

- Using the literal constructor `[]` _(most common)_
- Explicitly calling `Array.new`
- Calling the Kernel `Array()` method

The `Array.new` method supports two optional arguments: the initial size of the array and a default object.

When a size and default are provided, the array is populated with `size` copies of default object.

```ruby
a = Array.new(2, Hash.new)
# => [{}, {}]
```

Since all the Array elements store the same hash, changes to one of them will affect them all.

```ruby
a[0]['cat'] = 'feline'
a # => [{"cat"=>"feline"}, {"cat"=>"feline"}]

a[1]['cat'] = 'Felix'
a # => [{"cat"=>"Felix"}, {"cat"=>"Felix"}]
```

If multiple copies are what you want, you should use the block version which uses the result of that block each time an element of the array needs to be initialized:

```ruby
a = Array.new(2) {Hash.new}
a[0]['cat'] = 'feline'
a # => [{"cat"=>"feline"}, {}]
```

Another characteristic of Ruby arrays is that they mix in the [Enumerable][enumerable-module] module, which adds a lot of handy methods to iterate, search, sort, filter, etc. elements of an array.

[enumerable-module]: https://ruby-doc.org/core-2.7.1/Enumerable.html
[for-loop]: https://launchschool.com/books/ruby/read/loops_iterators#forloops


# Introduction

In Ruby, **arrays** are ordered, integer-indexed collections of any object. Array indexing starts at `0`. A negative index is assumed to be relative to the end of the array — i.e. an index of `-1` indicates the last element of the array, `-2` is the next to last element in the array, and so on.
Ruby arrays mix in the [Enumerable module][enumerable-module], which adds several traversal and searching methods, and with the ability to sort.

## Create Array

- An array in Ruby can contain different types of objects.

```ruby
array = [1, "two", 3.0] #=> [1, "two", 3.0]
```

## Element Assignment

Elements can be accessed or changed using indexes. Subarrays can be accessed by specifying a start index and a size.

```ruby
a = ["", "", "", "", ""]

a[4] = "hello"  #=> [nil, nil, nil, nil, "hello"]
a[0, 3] = [ 'a', 'b', 'c' ] #=> ["a", "b", "c", nil, "hello"]
```

- Negative indices will count backward from the end of the array.

```ruby
a = ['a', 'b']

a[-1] = "Z"
a #=> ["a", "Z"]
```

## Element Reference

- Elements in an array can be retrieved using the #[] method. It returns the element at index, or returns a subarray starting at the start index and continuing for length elements.

```ruby
a = [ "a", "b", "c", "d", "e" ]

a[2]    #=> "c"
a[6]    #=> nil
a[1, 2] #=> [ "b", "c" ]
```

- Negative indices count backward from the end of the array (-1 is the last element)

```ruby
a = [ "a", "b", "c", "d", "e" ]

a[-2]    #=> "d"
a[-3, 3] #=> [ "c", "d", "e" ]
```

## Obtaining Information about an Array

Arrays keep track of their own length at all times. To query an array about the number of elements it contains, use length, count or size.

```ruby
browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.length #=> 5
browsers.count  #=> 5
browsers.size   #=> 5
```

## Adding Items to Arrays

Items can be added to the end of an array by using either push or <<

```ruby
arr = [1, 2, 3, 4]
arr.push(5) #=> [1, 2, 3, 4, 5]
arr << 6    #=> [1, 2, 3, 4, 5, 6]
```

## Removing Items from an Array

The method pop removes the last element in an array and returns it

```ruby
arr =  [1, 2, 3, 4, 5, 6]
arr.pop #=> 6
arr     #=> [1, 2, 3, 4, 5]
```

[enumerable-module]: https://ruby-doc.org/core-2.7.1/Enumerable.html


# Introduction

## Arrays

In Ruby, **arrays** are ordered, integer-indexed collections of any object.
Array indexing starts at `0`.
A negative index is assumed to be relative to the end of the array — e.g.. an index of `-1` indicates the last element of the array, `-2` is the next to last element in the array, and so on.

### Creating arrays

Arrays are normally created using the `[]` notation.
They can create any different type of object.

```ruby
array = [1, "two", 3.0]
```

### Element Reference

Elements in an array can be retrieved by their indexes using the `#[]` method.
This returns the element at index, or returns a subarray starting at the start index and continuing for a specified length.
Negative indices count backward from the end of the array.

```ruby
a = [ "a", "b", "c", "d", "e" ]

a[2]       #=> "c"
a[6]       #=> nil
a[1, 3]    #=> [ "b", "c", "d" ]

a[-1]      #=> "e"
a[-2]      #=> "d"
a[-3, 2]   #=> ["c", "d"]
```

### Helper Methods

There are lots of useful helper methods on arrays.
Here are some of the more common:

```ruby
fibonacci = [0, 1, 1, 2, 3, 5, 8, 13]

fibonacci.size      #=> 8
fibonacci.sum       #=> 33
fibonacci.reverse   #=> [13, 8, 5, 3, 2, 1, 1, 0]
```

## Enumeration

Rather than using loops to iterate through collections, in Ruby we use enumeration.

Enumeration is the act of stepping through a collection (in this case an array) and performing some action on each object.  Enumeration is a key concept in Ruby and is used for things like sorting, grouping, mapping, reducing, and much more.

An enumeration to print each word in an array would look like this:

```ruby
words = ["the", "cat", "sat"]
words.each do |word|
  puts word
end

# Output:
# the
# cat
# sat
```

In this example, we have called the `.each` method on our array and passed in a _block_ that takes one parameter (`word`) and prints it out.

We'll look at _blocks_ in much more depth later in the Track, but for now think of them as anonymous functions that can take zero or more arguments.
They can be defined using the `do...end` syntax (above), or the `{}` syntax (below).

Here are some other examples of array methods that use blocks:

```ruby
fibonacci = [0, 1, 1, 2, 3, 5, 8, 13]

fibonacci.count  { |number| number == 1 }   #=> 2
fibonacci.any?   { |number| number == 6 }   #=> false
fibonacci.select { |number| number.odd? }   #=> [1, 1, 3, 5, 13]
fibonacci.all?   { |number| number < 20 }   #=> true
fibonacci.map    { |number| number * 2  }   #=> [0, 2, 2, 4, 6, 10, 16, 26]
```


---

---

# 13. RANGES

# Ranges

[Ranges][range] represent an interval between two values.
The most common types that support ranges are `Integer` and `String`.
They can be used for many things like quickly creating a collection, slicing strings, checking if a value is in a range, and iteration.
They are created using the range operator `..` or `...` (inclusive and exclusive, respectively).

```ruby
1..5  # => 1..5
1...5 # => 1...5

(1..5).to_a # => [1, 2, 3, 4, 5]
(1...5).to_a # => [1, 2, 3, 4]
```

The reason for having two range operators is to allow to create ranges that are inclusive or exclusive of the end value, which can be useful when for example working with indexes that are zero based.

Ranges can also be created using the `Range` initializer.

```ruby
Range.new(1, 5) # A range containing 1, 2, 3, 4, 5
```

~~~~exercism/note
When creating a range in Ruby using the range operators `..` or `...`, and wanting to call a method on the range, you need to wrap the range in parentheses.
This is because the otherwise will the method be called on the 2nd argument of the range operator.

```ruby
(1..5).sum # => 15
1..5.sum # => Error: undefined method `sum' for 5:Integer (NoMethodError)
```
~~~~

## Getting substrings

When wanting to slice a string, you can use the range operator to get a substring.
That is, by creating a range with the start and end index of the sub-string.

```ruby
"Hello World"[0..4] # => "Hello"
"Hello World"[6..10] # => "World"
```

You can also use negative indexes to get the substring from the end of the string.

```ruby
"Hello World"[-5..-1] # => "World"
"Hello World"[6..-4] # => "Wo"
```

## Range methods

Ranges do have a set of methods that can be used to work with them.
For example, these methods can be used to get the sum of all the values in the range or check if the range includes a value.

| Method                  | Description                                                             | Example                         |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------- |
| [`sum`][sum]            | Returns the sum of all the values in the range                          | `(1..5).sum # => 15`            |
| [`size`][size]          | Returns the size of the range                                           | `(1..5).size # => 5`            |
| [`include?`][indlude]   | Returns `true` if the range includes the given value, otherwise `false` | `(1..5).include?(3) # => true` |

## Endless & Beginless ranges

A range can be endless and beginless.
The endless or beginless range has their start or end value being `nil`, but when defining the range the `nil` can be omitted.

Using beginless and endless ranges is useful when you want to, for example, slice a string from the beginning or to the end.

```ruby
"Hello World"[0..] # => "Hello World"
"Hello World"[4..] # => "o World"
"Hello World"[..5] # => "Hello "
```

~~~~exercism/caution
If not used on a collection, the endless range can cause an endless sequence, if not used with caution.
~~~~

## String ranges

Strings can also be used in ranges and allow one to get an interval of strings between two strings.
Its behavior can be a bit unexpected when using certain strings, so use it with caution.

```ruby
"aa".."az".to_a # => ["aa", "ab", "ac", ..., "az"]
```

## Custom objects in ranges

~~~~exercism/advanced
Ruby allows you to use custom objects in ranges. 
The requirement for this is that the object implements the following:

- include the `Comparable` module
- `succ` method
- `<=>` method

These methods make it so that the range can iterate over the object and compare the objects in the range.

```ruby
class Foo
  include Comparable
  
  attr_reader :value
  
  def initialize(value)
    @value = value
  end

  def succ
    Foo.new(value + 1)
  end

  def <=>(other)
    value <=> other.value
  end
end

(Foo.new(1)..Foo.new(5))
# => #<Foo:0x7f3552bebe70 @value=1>, #<Foo:0x7f3552bebe50 @value=2>, #<Foo:0x7f3552bebe40 @value=3>, #<Foo:0x7f3552bebe30 @value=4>, #<Foo:0x7f3552bebe20 @value=5>
```
~~~~

[range]: https://rubyapi.org/o/range
[sum]: https://rubyapi.org/o/enumerable#method-i-sum
[size]: https://rubyapi.org/o/range#method-i-size
[indlude]: https://rubyapi.org/o/range#method-i-include-3F


# Ranges

[Ranges][range] represent an interval between two values.
The most common types that support ranges are `Integer` and `String`.
They can be used for many things like quickly creating a collection, slicing strings, checking if a value is in a range, and iteration.
They are created using the range operator `..` or `...` (inclusive and exclusive, respectively).

```ruby
1..5  # => 1..5
1...5 # => 1...5

(1..5).to_a # => [1, 2, 3, 4, 5]
(1...5).to_a # => [1, 2, 3, 4]
```

The reason for having two range operators is to allow to create ranges that are inclusive or exclusive of the end value, which can be useful when for example working with indexes that are zero based.

Ranges can also be created using the `Range` initializer.

```ruby
Range.new(1, 5) # A range containing 1, 2, 3, 4, 5
```

~~~~exercism/note
When creating a range in Ruby using the range operators `..` or `...`, and wanting to call a method on the range, you need to wrap the range in parentheses.
This is because the otherwise will the method be called on the 2nd argument of the range operator.

```ruby
(1..5).sum # => 15
1..5.sum # => Error: undefined method `sum' for 5:Integer (NoMethodError)
```
~~~~

## Getting substrings

When wanting to slice a string, you can use the range operator to get a substring.
That is, by creating a range with the start and end index of the sub-string.

```ruby
"Hello World"[0..4] # => "Hello"
"Hello World"[6..10] # => "World"
```

You can also use negative indexes to get the substring from the end of the string.

```ruby
"Hello World"[-5..-1] # => "World"
"Hello World"[6..-4] # => "Wo"
```

## Range methods

Ranges do have a set of methods that can be used to work with them.
For example, these methods can be used to get the sum of all the values in the range or check if the range includes a value.

| Method                  | Description                                                             | Example                         |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------- |
| [`sum`][sum]            | Returns the sum of all the values in the range                          | `(1..5).sum # => 15`            |
| [`size`][size]          | Returns the size of the range                                           | `(1..5).size # => 5`            |
| [`include?`][indlude]   | Returns `true` if the range includes the given value, otherwise `false` | `(1..5).include?(3) # => true` |

## Endless & Beginless ranges

A range can be endless and beginless.
The endless or beginless range has their start or end value being `nil`, but when defining the range the `nil` can be omitted.

Using beginless and endless ranges is useful when you want to, for example, slice a string from the beginning or to the end.

```ruby
"Hello World"[0..] # => "Hello World"
"Hello World"[4..] # => "o World"
"Hello World"[..5] # => "Hello"
```

~~~~exercism/caution
If not used on a collection, the endless range can cause an endless sequence, if not used with caution.
~~~~

## String ranges

Strings can also be used in ranges and allow one to get an interval of strings between two strings.
Its behavior can be a bit unexpected when using certain strings, so use it with caution.

```ruby
"aa".."az".to_a # => ["aa", "ab", "ac", ..., "az"]
```

[range]: https://rubyapi.org/o/range
[sum]: https://rubyapi.org/o/enumerable#method-i-sum
[size]: https://rubyapi.org/o/range#method-i-size
[indlude]: https://rubyapi.org/o/range#method-i-include-3F


# Ranges

[Ranges][range] represent an interval between two values.
The most common types that support ranges are `Integer` and `String`.
They can be used for many things like quickly creating a collection, slicing strings, checking if a value is in a range, and iteration.
They are created using the range operator `..` or `...` (inclusive and exclusive, respectively).

```ruby
1..5  # => 1..5
1...5 # => 1...5

(1..5).to_a # => [1, 2, 3, 4, 5]
(1...5).to_a # => [1, 2, 3, 4]
```

The reason for having two range operators is to allow to create ranges that are inclusive or exclusive of the end value, which can be useful when for example working with indexes that are zero based.

Ranges can also be created using the `Range` constructor, `new`.

```ruby
Range.new(1, 5) # A range containing 1, 2, 3, 4, 5
```

~~~~exercism/note
When creating a range in Ruby using the range operators `..` or `...`, and wanting to call a method on the range, you need to wrap the range in parentheses.
This is because, otherwise, the method will be called on the 2nd argument of the range operator.

```ruby
(1..5).sum # => 15
1..5.sum # => Error: undefined method `sum' for 5:Integer (NoMethodError)
```
~~~~

## Getting substrings

When wanting to slice a string, you can use the range operator to get a substring.
That is, by creating a range with the start and end index of the sub-string.

```ruby
"Hello World"[0..4] # => "Hello"
"Hello World"[6..10] # => "World"
```

You can also use negative indexes to get the substring from the end of the string.

```ruby
"Hello World"[-5..-1] # => "World"
"Hello World"[6..-4] # => "Wo"
```

## Range methods

Ranges do have a set of methods that can be used to work with them.
For example, these methods can be used to get the sum of all the values in the range or check if the range includes a value.

| Method                  | Description                                                             | Example                         |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------- |
| [`sum`][sum]            | Returns the sum of all the values in the range                          | `(1..5).sum # => 15`            |
| [`size`][size]          | Returns the size of the range                                           | `(1..5).size # => 5`            |
| [`include?`][indlude]   | Returns `true` if the range includes the given value, otherwise `false` | `(1..5).include?(3) # => true` |

## Endless & Beginless ranges

A range can be endless and beginless.
The endless or beginless range has their start or end value being `nil`, but when defining the range the `nil` can be omitted.

Using beginless and endless ranges is useful when you want to, for example, slice a string from the beginning or to the end.

```ruby
"Hello World"[0..] # => "Hello World"
"Hello World"[4..] # => "o World"
"Hello World"[..5] # => "Hello "
```

~~~~exercism/caution
If not used on a collection, the endless range can cause an endless sequence, if not used with caution.
~~~~

## String ranges

Strings can also be used in ranges and allow one to get an interval of strings between two strings.
Its behavior can be a bit unexpected when using certain strings, so use it with caution.

```ruby
("aa".."az").to_a # => ["aa", "ab", "ac", ..., "az"]
```

[range]: https://rubyapi.org/o/range
[sum]: https://rubyapi.org/o/enumerable#method-i-sum
[size]: https://rubyapi.org/o/range#method-i-size
[indlude]: https://rubyapi.org/o/range#method-i-include-3F


---

---

# 14. SYMBOLS

# About

[Symbols][symbols] are named identifiers that can be used to refer to a value.
Symbols are created through a symbol literal, which is by prefixing a name with a `:` character, e.g. `:foo`.
They also allow for being written with quotes, e.g. `:"foo"`, which allows, for example, spaces in the name.

```ruby
:foo # => :foo
:"foo boo" # => :"foo boo"
```

Symbols are used in many places in the language, including as keys in hashes, to represent method names and variable names.

## Identifier

What makes symbols different from strings is that they are identifiers, and do not represent data or text.
This means that two symbols with the same name are always the same object.

```ruby
"foo".object_id # => 60
"foo".object_id # => 80
:foo.object_id # => 1086748
:foo.object_id # => 1086748
```

## Modifying Symbols

Symbols are immutable, which means that they cannot be modified.
This means that when you "modify" a symbol, you are actually creating a new symbol.
There are a few methods that can be used to manipulate symbols, they all return new symbols.
All methods can be found in the [Symbol API][symbols-api].

```ruby
:foo.upcase # => :FOO

:foo.object_id # => 1086748
:foo.upcase.object_id # => 60
```

The benefit of symbols being immutable is that they are more memory efficient than strings, but also safer to use as identifiers.

## Conversion

Symbols can be converted to strings and vice versa.
This can be useful when you want to modify a symbol, or when you want to use a symbol as a string.
To present a string as a symbol, you can use the `String#to_sym` method, and to do the opposite, you can use the `Symbol#to_s` method.
Due to symbols having a limited set of methods, it can be useful to convert a symbol to a string to use string methods on it, if a new symbol is needed.

```ruby
:foo.to_s # => "foo"
"foo".to_sym # => :foo
```

## Getting names in scopes

In Ruby you can get names in scopes by using various methods to get names of constants, methods, and variables.
These methods returns arrays of symbols.

Some methods are `Module#constants`, `Module#instance_methods`, `Module#class_variables`, `global_variables` and `local_variables`.

```ruby
module Foo
  BAR = 1
  def self.baz; end
end

a = 1

Foo.constants # => [:BAR]
Foo.instance_methods # => [:baz]

local_variables # => [:a]
```

All methods can be found in the [Kernel API][kernal-api] and [Module API][module-api].

[symbols]: https://www.rubyguides.com/2018/02/ruby-symbols/
[symbols-api]: https://rubyapi.org/o/symbol
[kernal-api]: https://rubyapi.org/o/kernel
[module-api]: https://rubyapi.org/o/module


# About

[Symbols][symbols] are named identifiers that can be used to refer to a value.
Symbols are created through a symbol literal, which is by prefixing a name with a `:` character, e.g. `:foo`.
They also allow for being written with quotes, e.g. `:"foo"`, which allows, for example, spaces in the name.

```ruby
:foo # => :foo
:"foo boo" # => :"foo boo"
```

Symbols are used in many places in the language, including as keys in hashes, to represent method names and variable names.

## Identifier

What makes symbols different from strings is that they are identifiers, and do not represent data or text.
This means that two symbols with the same name are always the same object.

```ruby
"foo".object_id # => 60
"foo".object_id # => 80
:foo.object_id # => 1086748
:foo.object_id # => 1086748
```

## Modifying Symbols

Symbols are immutable, which means that they cannot be modified.
This means that when you "modify" a symbol, you are actually creating a new symbol.
There are a few methods that can be used to manipulate symbols, they all return new symbols.
All methods can be found in the [Symbol API][symbols-api].

```ruby
:foo.upcase # => :FOO

:foo.object_id # => 1086748
:foo.upcase.object_id # => 60
```

The benefit of symbols being immutable is that they are more memory efficient than strings, but also safer to use as identifiers.

## Conversion

Symbols can be converted to strings and vice versa.
This can be useful when you want to modify a symbol, or when you want to use a symbol as a string.
To present a string as a symbol, you can use the `String#to_sym` method, and to do the opposite, you can use the `Symbol#to_s` method.
Due to symbols having a limited set of methods, it can be useful to convert a symbol to a string to use string methods on it, if a new symbol is needed.

```ruby
:foo.to_s # => "foo"
"foo".to_sym # => :foo
```

[symbols]: https://www.rubyguides.com/2018/02/ruby-symbols/
[symbols-api]: https://rubyapi.org/o/symbol


# About

[Symbols][symbols] are named identifiers that can be used to refer to a value.
Symbols are created through a symbol literal, which is by prefixing a name with a `:` character, e.g. `:foo`.
They also allow for being written with quotes, e.g. `:"foo"`, which allows, for example, spaces in the name.

```ruby
:foo # => :foo
:"foo boo" # => :"foo boo"
```

Symbols are used in many places in the language, including as keys in hashes, to represent method names and variable names.

## Identifier

What makes symbols different from strings is that they are identifiers, and do not represent data or text.
This means that two symbols with the same name are always the same object.

```ruby
"foo".object_id # => 60
"foo".object_id # => 80
:foo.object_id # => 1086748
:foo.object_id # => 1086748
```

## Modifying Symbols

Symbols are immutable, which means that they cannot be modified.
This means that when you "modify" a symbol, you are actually creating a new symbol.
There are a few methods that can be used to manipulate symbols, they all return new symbols.
All methods can be found in the [Symbol API][symbols-api].

```ruby
:foo.upcase # => :FOO

:foo.object_id # => 1086748
:foo.upcase.object_id # => 60
```

The benefit of symbols being immutable is that they are more memory efficient than strings, but also safer to use as identifiers.

## Conversion

Symbols can be converted to strings and vice versa.
This can be useful when you want to modify a symbol, or when you want to use a symbol as a string.
To present a string as a symbol, you can use the `String#to_sym` method, and to do the opposite, you can use the `Symbol#to_s` method.
Due to symbols having a limited set of methods, it can be useful to convert a symbol to a string to use string methods on it, if a new symbol is needed.

```ruby
:foo.to_s # => "foo"
"foo".to_sym # => :foo
```

[symbols]: https://www.rubyguides.com/2018/02/ruby-symbols/
[symbols-api]: https://rubyapi.org/o/symbol


---

---

# 15. ENUMERATION

# About

Enumeration is the act of stepping through a collection (`Array`, `Hash`, etc) and performing some action on each object.

Enumeration is a key concept in Ruby and is used for sorting (`sort_by`), grouping (`group_by`), mapping (`map`), reducing (`reduce`), and much more. 
You'll most frequently see enumeration as the idiomatic way iterating through collections rather than using loops.

A simple enumeration to print each word in an array would look like this:

```ruby
words = %w[the cat sat on the mat]
words.each do |word| 
  puts word 
end

# Output:
# the
# cat
# sat
# on
# the
# mat
```

In this example, we have called the `Array#each` method and passed in a _block_, which takes one parameter (`word`) and prints it. 

We can also chain enumerable methods. 
For example, we can chain `.with_index` onto `each` to print out the index of an object as well as it's value:

```ruby
words = %w[the cat sat on the mat]
list = words.map.with_index { |word, index| "#{index}: #{word}" }
puts list

# Output:
# 0. the
# 1. cat
# ...
# 5. mat
```

Enumerating `Hash` objects is exactly the same as enumerating `Array` objects, except that the block receives two arguments: the key and the value:

```ruby
pet_names = {cat: "bob", horse: "caris", mouse: "arya"}
words.each { |animal, name| ... }

# The two arguments should be put in brackets when chaining
words.each.with_index { |(animal, name), index| ... }
```

The methods described above are part of the [`Enumerable` module](https://ruby-doc.org/core-2.7.1/Enumerable.html) which is included in `Array`, `Hash` and other classes that require the ability to enumerate.


# Introduction

Enumeration is the act of stepping through a collection (`Array`, `Hash`, etc) and performing some action on each object.

Enumeration is a key concept in Ruby and is used for sorting (`sort_by`), grouping (`group_by`), mapping (`map`), reducing (`reduce`), and much more. 
You'll most frequently see enumeration as the idiomatic way iterating through collections rather than using loops.

A simple enumeration making use of `map` and `with_index` looks like this:

```ruby
words = %w[the cat sat on the mat]
list = words.map.with_index do |word, index| 
  "#{index} #{word}"
end

puts list

# Output:
# 0. the
# 1. cat
# 2. sat
# 3. on
# 4. the
# 5. mat
```


# Introduction

## More enumeration methods

In Bird Count, you were introduced to the `count`, `any?`, `select`, `all?` and `map` enumeration methods.
Here's a recap of those, with a few extras added:

```ruby
fibonacci = [0, 1, 1, 2, 3, 5, 8, 13]

fibonacci.count  { |number| number == 1 }   #=> 2
fibonacci.any?   { |number| number > 20 }   #=> false
fibonacci.none?  { |number| number > 20 }   #=> true
fibonacci.select { |number| number.odd? }   #=> [1, 1, 3, 5, 13]
fibonacci.all?   { |number| number < 20 }   #=> true
fibonacci.map    { |number| number * 2  }   #=> [0, 2, 2, 4, 6, 10, 16, 26]
fibonacci.select { |number| number >= 5}    #=> [5, 8, 13]
fibonacci.find   { |number| number >= 5}    #=> 5

# Some methods work with or without a block
fibonacci.sum  #=> 33
fibonacci.sum {| number | number * number }  #=> 273

# There are also methods to help with nested arrays:
animals = [ ['cat', 'bob'], ['horse', 'caris'], ['mouse', 'arya'] ]
animals.flatten  #=> ["cat", "bob", "horse", "caris", "mouse", "arya"]
```

## Enumerating Hashes

Enumerating `Hash` objects is exactly the same as enumerating `Array` objects, except that the block receives two arguments: the key and the value:

```ruby
pet_names = {cat: "bob", horse: "caris", mouse: "arya"}
pet_names.each { |animal, name| ... }
```

If you only need one of the values, you can use the special `_` symbol to indicate that one value is not needed.
This helps both in terms of developer clarity and also is a performance optimisation.

```ruby
pet_names = {cat: "bob", horse: "caris", mouse: "arya"}
pet_names.map { |_, name| name }  #=> ["bob, "caris", "arya"]
```

## Nested Enumerations

You can also enumerate in nested blocks, and daisy chain methods together.
For example, if we have an array of hashes of animals, and we want to extract the animals with short names, we might want to do something like:

```ruby
pets = [
  { animal: "cats", names: ["bob", "fred", "sandra"] },
  { animal: "horses", names: ["caris", "black beard", "speedy"] },
  { animal: "mice", names: ["arya", "jerry"] }
]

pets.map { |pet|
  pet[:names].select { |name| name.length <= 5 }
}.flatten.sort
#=> ["arya", "bob", "caris", "fred", "jerry"]
```


---

---

# 16. ADVANCED-ENUMERATION

# About

## More enumeration methods

In Enumeration, you were introduced to the `count`, `any?`, `select`, `all` and `map` enumeration methods.
Here's a recap of those, with a few extras added:

```ruby
fibonacci = [0, 1, 1, 2, 3, 5, 8, 13]

fibonacci.count  { |number| number == 1 }   #=> 2
fibonacci.any?   { |number| number > 20 }   #=> false
fibonacci.none?  { |number| number > 20 }   #=> true
fibonacci.select { |number| number.odd? }   #=> [1, 1, 3, 5, 13]
fibonacci.all?   { |number| number < 20 }   #=> true
fibonacci.map    { |number| number * 2  }   #=> [0, 2, 2, 4, 6, 10, 16, 26]
fibonacci.select { |number| number >= 5}    #=> [5, 8, 13]
fibonacci.find   { |number| number >= 5}    #=> 5

# Some methods work with or without a block
fibonacci.sum  #=> 33
fibonacci.sum {| number | number * number }  #=> 273

# There are also methods to help with nested arrays:
animals = [ ['cat', 'bob'], ['horse', 'caris'], ['mouse', 'arya'] ]
animals.flatten  #=> ["cat", "bob", "horse", "caris", "mouse", "arya"]
```

## Enumerating Hashes

Enumerating `Hash` objects is exactly the same as enumerating `Array` objects, except that the block receives two arguments: the key and the value:

```ruby
pet_names = {cat: "bob", horse: "caris", mouse: "arya"}
pet_names.each { |animal, name| ... }
```

If you only need one of the values, you can use the special `_` symbol to indicate that one value is not needed.
This helps both in terms of developer clarity and also is a performance optimisation.

```ruby
pet_names = {cat: "bob", horse: "caris", mouse: "arya"}
pet_names.map { |_, name| name }  #=> ["bob, "caris", "arya"]
```

## Nested Enumerations

You can also enumerate in nested blocks, and daisy chain methods together.
For example, if we have an array of hashes of animals, and we want extract the animals with short names, we might want to do something like:

```ruby
pets = [
  { animal: "cats", names: ["bob", "fred", "sandra"] },
  { animal: "horses", names: ["caris", "black beard", "speedy"] },
  { animal: "mice", names: ["arya", "jerry"] }
]

pets.map { |pet|
  pet[:names].select { |name| name.length <= 5 }
}.flatten.sort
#=> ["arya", "bob", "caris", "fred", "jerry"]
```


# Introduction

## More enumeration methods

In Enumeration, you were introduced to the `count`, `any?`, `select`, `all` and `map` enumeration methods.
Here's a recap of those, with a few extras added:

```ruby
fibonacci = [0, 1, 1, 2, 3, 5, 8, 13]

fibonacci.count  { |number| number == 1 }   #=> 2
fibonacci.any?   { |number| number > 20 }   #=> false
fibonacci.none?  { |number| number > 20 }   #=> true
fibonacci.select { |number| number.odd? }   #=> [1, 1, 3, 5, 13]
fibonacci.all?   { |number| number < 20 }   #=> true
fibonacci.map    { |number| number * 2  }   #=> [0, 2, 2, 4, 6, 10, 16, 26]
fibonacci.select { |number| number >= 5}    #=> [5, 8, 13]
fibonacci.find   { |number| number >= 5}    #=> 5

# Some methods work with or without a block
fibonacci.sum  #=> 33
fibonacci.sum {| number | number * number }  #=> 273

# There are also methods to help with nested arrays:
animals = [ ['cat', 'bob'], ['horse', 'caris'], ['mouse', 'arya'] ]
animals.flatten  #=> ["cat", "bob", "horse", "caris", "mouse", "arya"]
```

## Enumerating Hashes

Enumerating `Hash` objects is exactly the same as enumerating `Array` objects, except that the block receives two arguments: the key and the value:

```ruby
pet_names = {cat: "bob", horse: "caris", mouse: "arya"}
pet_names.each { |animal, name| ... }
```

If you only need one of the values, you can use the special `_` symbol to indicate that one value is not needed.
This helps both in terms of developer clarity and also is a performance optimisation.

```ruby
pet_names = {cat: "bob", horse: "caris", mouse: "arya"}
pet_names.map { |_, name| name }  #=> ["bob, "caris", "arya"]
```

## Nested Enumerations

You can also enumerate in nested blocks, and daisy chain methods together.
For example, if we have an array of hashes of animals, and we want extract the animals with short names, we might want to do something like:

```ruby
pets = [
  { animal: "cats", names: ["bob", "fred", "sandra"] },
  { animal: "horses", names: ["caris", "black beard", "speedy"] },
  { animal: "mice", names: ["arya", "jerry"] }
]

pets.map { |pet|
  pet[:names].select { |name| name.length <= 5 }
}.flatten.sort
#=> ["arya", "bob", "caris", "fred", "jerry"]
```


---

---

# 17. BLOCKS

# About

Blocks are small groupings of statements that can be executed multiple times. 
They can be thought of as closures or anonymous functions. 
Blocks are defined using the `do...end` syntax (above), or the `{}` (below). 
The styles are interchangeable and differing opinions exist about when each should be used.

## Shortcut Syntax
In situations where a block calls a single method, you can replace the block with `&:` followed by the method name. For example, these two lines are synonymous:

```ruby
people.sum { |person| person.age }
people.sum(&:age)
```


# Introduction

Blocks are small groupings of statements that can be executed multiple times. 
They can be thought of as closures or anonymous functions. 
Blocks are defined using the `do...end` syntax (above), or the `{}` (below). 
The styles are interchangeable and differing opinions exist about when each should be used.


---

---

# 18. MULTIPLE-ASSIGNMENT-AND-DECOMPOSITION

# Decomposition and Multiple Assignment

Decomposition refers to the act of extracting the elements of a collection, such as an `Array` or `Hash`.
Decomposed values can then be assigned to variables within the same statement.

[Multiple assignment][multiple assignment] is the ability to assign multiple variables to decompose values within one statement.
This allows for code to be more concise and readable, and is done by separating the variables to be assigned with a comma such as `first, second, third = [1, 2, 3]`.

The splat operator(`*`), and double splat operator, (`**`), are often used in decomposition contexts.
Splat operator, (`*`), can be used to combine multiple **arrays** into one **array** by _decomposing_ each into a new common **array**.
Double splat operator, (`**`), can be used to combine multiple **hashes** into one **hash** by _decomposing_ each into a new common **hash**.
This is syntax used to differentiate from multiple values accepted as a positional argument, to one where we accept any/many key word arguments.

When the splat operator, (`*`), is used without a collection, it _packs_ (or composes) a number of values into an **array**.
This is often used in multiple assignment to group all "remaining" elements that do not have individual assignments into a single variable.

It is common in Ruby to use this decomposing/composing behavior when using or defining methods that take an arbitrary number of positional or keyword arguments.
You will often see these arguments defined as `def some_method(*arguments, **keyword_arguments)` and the arguments used as `some_method(*some_array, **some_hash)`.

~~~~exercism/caution
`*<variable_name>` and `**<variable_name>` should not be confused with `*` and `**`.
While `*` and `**` are used for multiplication and exponentiation, respectively, `*<variable_name>` and `**<variable_name>` are used as composition and decomposition operators.
~~~~

## Multiple assignment

Multiple assignment allows you to assign multiple variables in one line.
To separate the values, use a comma `,`:

```irb
>> a, b = 1, 2
=> [1, 2]
>> a
=> 1
```

Multiple assignment is not limited to one data type:

```irb
>> x, y, z = 1, "Hello", true
=> [1, "Hello", true]
>> x
=> 1
>> y
=> 'Hello'
>> z
=> true
```

Multiple assignment can be used to swap elements in **arrays**.
This practice is pretty common in [sorting algorithms][sorting algorithms].
For example:

```irb
>> numbers = [1, 2]
=> [1, 2]
>> numbers[0], numbers[1] = numbers[1], numbers[0]
=> [2, 1]
>> numbers
=> [2, 1]
```

~~~~exercism/note
This is also known as "Parallel Assignment", and can be used to avoid a temporary variable.
~~~~

If there are more variables than values, the extra variables will be assigned `nil`:

```irb
>> a, b, c = 1, 2
=> [1, 2]
>> b
=> 2
>> c
=> nil
```

If there are more values than variables, the extra values will be ignored:


```irb
>> a, b, c = 1, 2, 3, 4
>> b
=> 2
>> c
=> 3
```

## Decomposition

In Ruby, it is possible to [decompose the elements of **arrays**/**hashes**][decompose] into distinct variables.
Since values appear within **arrays** in a index order, they are unpacked into variables in the same order:

```irb
>> fruits = ["apple", "banana", "cherry"]
>> x, y, z = fruits
>> x
=> "apple"
```

If there are values that are not needed then you can use `_` to indicate "collected but not used":

```irb
>> fruits = ["apple", "banana", "cherry"]
>> _, _, z = fruits
>> z
=> "cherry"
```

### Deep decomposing

Decomposing and assigning values from **arrays** inside of an **array** (_also known as a nested array_), works in the same way a shallow decomposing does, but needs [delimited decomposition expression (`()`)][delimited decomposition expression] to clarify the values context or position:

```irb
>> fruits_vegetables = [["apple", "banana"], ["carrot", "potato"]]
>> (a, b), (c, d) = fruits_vegetables
>> a
=> "apple"
>> d
=> "potato"
```

You can also deeply unpack just a portion of a nested **array**:

```irb
>> fruits_vegetables = [["apple", "banana"], ["carrot", "potato"]]
>> a, (c, d) = fruits_vegetables
>> a
=> ["apple", "banana"]
>> c
=> "carrot"
```

If the decomposition has variables with incorrect placement and/or an incorrect number of values, you will get a **syntax error**:

```ruby
fruits_vegetables = [["apple", "banana"], ["carrot", "potato"]]
(a, b), (d) = fruits_vegetables

syntax error, unexpected ')', expecting '.' or &. or :: or '['
((a, b), (d)) = fruits_vegetables
```

Experiment here, and you will notice that the first pattern dictates, not the available values on the right hand side.
The syntax error is not tied to the data structure.

### Decomposing an array with the single splat operator (`*`)

When [decomposing an **array**][decomposition] you can use the splat operator (`*`) to capture the "leftover" values.
This is clearer than slicing the **array** (_which in some situations is less readable_).
For example, we can extract the first element and then assign the remaining values into a new **array** without the first element:

```irb
>> fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
>> x, *last = fruits
>> x
=> "apple"
>> last
=> ["banana", "cherry", "orange", "kiwi", "melon", "mango"]
```

We can also extract the values at the beginning and end of the **array** while grouping all the values in the middle:

```irb
>> fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
>> x, *middle, y, z = fruits
>> y
=> "melon"
>> middle
=> ["banana", "cherry", "orange", "kiwi"]
```

We can also use `*` in deep decomposition:

```irb
>> fruits_vegetables = [["apple", "banana", "melon"], ["carrot", "potato", "tomato"]]
>> (a, *rest), b = fruits_vegetables
>> a
=> "apple"
>> rest
=> ["banana", "melon"]
```

### Decomposing a `Hash`

Decomposing a **hash** is a bit different than decomposing an **array**.
To be able to unpack a **hash** you need to convert it to an **array** first.
Otherwise there will be no decomposing:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> x, y, z = fruits_inventory
>> x
=> {:apple=>6, :banana=>2, :cherry=>3}
>> y
=> nil
```

To coerce a `Hash` to an **array** you can use the `to_a` method:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> fruits_inventory.to_a
=> [[:apple, 6], [:banana, 2], [:cherry, 3]]
>> x, y, z = fruits_inventory.to_a
>> x
=> [:apple, 6]
```

If you want to unpack the keys then you can use the `keys` method:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> x, y, z = fruits_inventory.keys
>> x
=> :apple
```

If you want to unpack the values then you can use the `values` method:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> x, y, z = fruits_inventory.values
>> x
=> 6
```

## Composition

Composing is the ability to group multiple values into one **array** that is assigned to a variable.
This is useful when you want to _decomposition_ values, make changes, and then _composition_ the results back into a variable.
It also makes it possible to perform merges on 2 or more **arrays**/**hashes**.

### Composition an array with splat operator(`*`)

Composing an **array** can be done using the splat operator, (`*`).
This will pack all the values into an **array**.

```irb
>> fruits = ["apple", "banana", "cherry"]
>> more_fruits = ["orange", "kiwi", "melon", "mango"]

# fruits and more_fruits are unpacked and then their elements are packed into combined_fruits
>> combined_fruits = *fruits, *more_fruits

>> combined_fruits
=> ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
```

### Composition a hash with double splat operator(`**`)

Composing a hash is done by using the double splat operator(`**`).
This will pack all **key**/**value** pairs from one hash into another hash, or combine two hashes together.

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> more_fruits_inventory = {orange: 4, kiwi: 1, melon: 2, mango: 3}

# fruits_inventory and more_fruits_inventory are unpacked into key-values pairs and combined.
>> combined_fruits_inventory = {**fruits_inventory, **more_fruits_inventory}

# then the pairs are packed into combined_fruits_inventory
>> combined_fruits_inventory
=> {:apple=>6, :banana=>2, :cherry=>3, :orange=>4, :kiwi=>1, :melon=>2, :mango=>3}
```

## Usage of splat operator(`*`) and double splat operator(`**`) with methods

### Composition with method parameters

When you create a method that accepts an arbitrary number of arguments, you can use [`*arguments`][arguments] or [`**keyword_arguments`][keyword arguments] in the method definition.
`*arguments` is used to pack an arbitrary number of positional (non-keyworded) arguments and
`**keyword_arguments` is used to pack an arbitrary number of keyword arguments.

Usage of `*arguments`:

```irb
# This method is defined to take any number of positional arguments
# (Using the single line form of the definition of a method.)

>> def my_method(*arguments)= arguments

# Arguments given to the method are packed into an array

>> my_method(1, 2, 3)
=> [1, 2, 3]

>> my_method("Hello")
=> ["Hello"]

>> my_method(1, 2, 3, "Hello", "Mars")
=> [1, 2, 3, "Hello", "Mars"]
```

Usage of `**keyword_arguments`:

```irb
# This method is defined to take any number of keyword arguments

>> def my_method(**keyword_arguments)= keyword_arguments

# Arguments given to the method are packed into a dictionary

>> my_method(a: 1, b: 2, c: 3)
=> {:a => 1, :b => 2, :c => 3}
```

If the method defined does not have any defined parameters for keyword arguments(`**keyword_arguments` or `<key_word>: <value>`) then the keyword arguments will be packed into a hash and assigned to the last parameter.

```irb
>> def my_method(a)= a

>> my_method(a: 1, b: 2, c: 3)
=> {:a => 1, :b => 2, :c => 3}
```

`*arguments` and `**keyword_arguments` can also be used in combination with one another:

```ruby
def my_method(*arguments, **keyword_arguments)
  p arguments.sum
  for (key, value) in keyword_arguments.to_a
    p key.to_s + " = " + value.to_s
  end
end


my_method(1, 2, 3, a: 1, b: 2, c: 3)
6
"a = 1"
"b = 2"
"c = 3"
```

You can also write arguments before and after `*arguments` to allow for specific positional arguments.
This works the same way as decomposing an array.

~~~~exercism/caution
Arguments have to be structured in a specific order:

`def my_method(<positional_arguments>, *arguments, <positional_arguments>, <key-word_arguments>, **keyword_arguments)`

If you don't follow this order then you will get an error.
~~~~

```ruby
def my_method(a, b, *arguments)
  p a
  p b
  p arguments
end

my_method(1, 2, 3, 4, 5)
1
2
[3, 4, 5]
```

You can write positional arguments before and after `*arguments`:

```irb
>> def my_method(a, *middle, b)= middle

>> my_method(1, 2, 3, 4, 5)
=> [2, 3, 4]
```

You can also combine positional arguments, \*arguments, key-word arguments and \*\*keyword_arguments:

```irb
>> def my_method(first, *many, last, a:, **keyword_arguments)
     p first
     p many
     p last
     p a
     p keyword_arguments
     end

>> my_method(1, 2, 3, 4, 5, a: 6, b: 7, c: 8)
1
[2, 3, 4]
5
6
{:b => 7, :c => 8}
```

Writing arguments in an incorrect order will result in an error:

```ruby
def my_method(a:, **keyword_arguments, first, *arguments, last)
  arguments
end

my_method(1, 2, 3, 4, a: 5)

syntax error, unexpected local variable or method, expecting & or '&'
... my_method(a:, **keyword_arguments, first, *arguments, last)
```

### Decomposing into method calls

You can use splat operator (`*`) to unpack an **array** of arguments into a method call:

```ruby
def my_method(a, b, c)
  p c
  p b
  p a
end

numbers = [1, 2, 3]
my_method(*numbers)
3
2
1
```

You can also use double splat operator(`**`) to unpack a **hash** of arguments into a method call:

```ruby
def my_method(a:, b:, c:)
  p c
  p b
  p a
end

numbers = {a: 1, b: 2, c: 3}
my_method(**numbers)
3
2
1
```

[arguments]: https://docs.ruby-lang.org/en/3.1/syntax/methods_rdoc.html#label-Array-2FHash+Argument
[keyword arguments]: https://docs.ruby-lang.org/en/3.1/syntax/methods_rdoc.html#label-Keyword+Arguments
[multiple assignment]: https://docs.ruby-lang.org/en/3.1/syntax/assignment_rdoc.html#label-Multiple+Assignment
[sorting algorithms]: https://en.wikipedia.org/wiki/Sorting_algorithm
[decompose]: https://docs.ruby-lang.org/en/3.1/syntax/assignment_rdoc.html#label-Array+Decomposition
[delimited decomposition expression]: https://riptutorial.com/ruby/example/8798/decomposition


# Decomposition and Multiple Assignment

Decomposition refers to the act of extracting the elements of a collection, such as an `Array` or `Hash`.
Decomposed values can then be assigned to variables within the same statement.

[Multiple assignment][multiple assignment] is the ability to assign multiple variables to decompose values within one statement.
This allows for code to be more concise and readable, and is done by separating the variables to be assigned with a comma such as `first, second, third = [1, 2, 3]`.

The splat operator(`*`), and double splat operator, (`**`), are often used in decomposition contexts.
Splat operator, (`*`), can be used to combine multiple **arrays** into one **array** by _decomposing_ each into a new common **array**.
Double splat operator, (`**`), can be used to combine multiple **hashes** into one **hash** by _decomposing_ each into a new common **hash**.
This is syntax used to differentiate from multiple values accepted as a positional argument, to one where we accept any/many key word arguments.

When the splat operator, (`*`), is used without a collection, it _packs_ (or composes) a number of values into an **array**.
This is often used in multiple assignment to group all "remaining" elements that do not have individual assignments into a single variable.

It is common in Ruby to use this decomposing/composing behavior when using or defining methods that take an arbitrary number of positional or keyword arguments.
You will often see these arguments defined as `def some_method(*args, **kwargs)` and the arguments used as `some_method(*some_array, **some_hash)`.

~~~~exercism/caution
`*<variable_name>` and `**<variable_name>` should not be confused with `*` and `**`.
While `*` and `**` are used for multiplication and exponentiation, respectively, `*<variable_name>` and `**<variable_name>` are used as composition and decomposition operators.
~~~~

[multiple assignment]: https://docs.ruby-lang.org/en/3.1/syntax/assignment_rdoc.html#label-Multiple+Assignment


# Decomposition and Multiple Assignment

Decomposition refers to the act of extracting the elements of a collection, such as an `Array` or `Hash`.
Decomposed values can then be assigned to variables within the same statement.

[Multiple assignment][multiple assignment] is the ability to assign multiple variables to decompose values within one statement.
This allows for code to be more concise and readable, and is done by separating the variables to be assigned with a comma such as `first, second, third = [1, 2, 3]`.

The splat operator(`*`), and double splat operator, (`**`), are often used in decomposition contexts.

~~~~exercism/caution
`*<variable_name>` and `**<variable_name>` should not be confused with `*` and `**`.
While `*` and `**` are used for multiplication and exponentiation, respectively, `*<variable_name>` and `**<variable_name>` are used as composition and decomposition operators.
~~~~

## Multiple assignment

Multiple assignment allows you to assign multiple variables in one line.
To separate the values, use a comma `,`:

```irb
>> a, b = 1, 2
=> [1, 2]
>> a
=> 1
```

Multiple assignment is not limited to one data type:

```irb
>> x, y, z = 1, "Hello", true
=> [1, "Hello", true]
>> x
=> 1
>> y
=> 'Hello'
>> z
=> true
```

Multiple assignment can be used to swap elements in **arrays**.
This practice is pretty common in [sorting algorithms][sorting algorithms].
For example:

```irb
>> numbers = [1, 2]
=> [1, 2]
>> numbers[0], numbers[1] = numbers[1], numbers[0]
=> [2, 1]
>> numbers
=> [2, 1]
```

~~~~exercism/note
This is also known as "Parallel Assignment", and can be used to avoid a temporary variable.
~~~~

If there are more variables than values, the extra variables will be assigned `nil`:

```irb
>> a, b, c = 1, 2
=> [1, 2]
>> b
=> 2
>> c
=> nil
```

## Decomposition

In Ruby, it is possible to [decompose the elements of **arrays**/**hashes**][decompose] into distinct variables.
Since values appear within **arrays** in a index order, they are unpacked into variables in the same order:

```irb
>> fruits = ["apple", "banana", "cherry"]
>> x, y, z = fruits
>> x
=> "apple"
```

If there are values that are not needed then you can use `_` to indicate "collected but not used":

```irb
>> fruits = ["apple", "banana", "cherry"]
>> _, _, z = fruits
>> z
=> "cherry"
```

### Deep decomposing

Decomposing and assigning values from **arrays** inside of an **array** (_also known as a nested array_), works in the same way a shallow decomposing does, but needs [delimited decomposition expression (`()`)][delimited decomposition expression] to clarify the values context or position:

```irb
>> fruits_vegetables = [["apple", "banana"], ["carrot", "potato"]]
>> (a, b), (c, d) = fruits_vegetables
>> a
=> "apple"
>> d
=> "potato"
```

You can also deeply unpack just a portion of a nested **array**:

```irb
>> fruits_vegetables = [["apple", "banana"], ["carrot", "potato"]]
>> a, (c, d) = fruits_vegetables
>> a
=> ["apple", "banana"]
>> c
=> "carrot"
```

If the decomposition has variables with incorrect placement and/or an incorrect number of values, you will get a **syntax error**:

```ruby
fruits_vegetables = [["apple", "banana"], ["carrot", "potato"]]

(a, b), (d) = fruits_vegetables
# syntax error, unexpected '=', expecting '.' or &. or :: or '['

((a, b), (d)) = fruits_vegetables
# syntax error, unexpected ')', expecting '.' or &. or :: or '['
```

Experiment here, and you will notice that the first pattern dictates, not the available values on the right hand side.
The syntax error is not tied to the data structure.

### Decomposing an array with the single splat operator (`*`)

When [decomposing an **array**][decompose] you can use the splat operator (`*`) to capture the "leftover" values.
This is clearer than slicing the **array** (_which in some situations is less readable_).
For example, we can extract the first element and then assign the remaining values into a new **array** without the first element:

```irb
>> fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
>> x, *last = fruits
>> x
=> "apple"
>> last
=> ["banana", "cherry", "orange", "kiwi", "melon", "mango"]
```

We can also extract the values at the beginning and end of the **array** while grouping all the values in the middle:

```irb
>> fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
>> x, *middle, y, z = fruits
>> y
=> "melon"
>> middle
=> ["banana", "cherry", "orange", "kiwi"]
```

We can also use `*` in deep decomposition:

```irb
>> fruits_vegetables = [["apple", "banana", "melon"], ["carrot", "potato", "tomato"]]
>> (a, *rest), b = fruits_vegetables
>> a
=> "apple"
>> rest
=> ["banana", "melon"]
```

### Decomposing a `Hash`

Decomposing a **hash** is a bit different than decomposing an **array**.
To be able to unpack a **hash** you need to convert it to an **array** first.
Otherwise there will be no decomposing:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> x, y, z = fruits_inventory
>> x
=> {:apple=>6, :banana=>2, :cherry=>3}
>> y
=> nil
```

To coerce a `Hash` to an **array** you can use the `to_a` method:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> fruits_inventory.to_a
=> [[:apple, 6], [:banana, 2], [:cherry, 3]]
>> x, y, z = fruits_inventory.to_a
>> x
=> [:apple, 6]
```

If you want to unpack the keys then you can use the `keys` method:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> x, y, z = fruits_inventory.keys
>> x
=> :apple
```

If you want to unpack the values then you can use the `values` method:

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> x, y, z = fruits_inventory.values
>> x
=> 6
```

## Composition

Composing is the ability to group multiple values into one **array** that is assigned to a variable.
This is useful when you want to _decomposition_ values, make changes, and then _composition_ the results back into a variable.
It also makes it possible to perform merges on 2 or more **arrays**/**hashes**.

### Composition an array with splat operator(`*`)

Composing an **array** can be done using the splat operator, (`*`).
This will pack all the values into an **array**.

```irb
>> fruits = ["apple", "banana", "cherry"]
>> more_fruits = ["orange", "kiwi", "melon", "mango"]

# fruits and more_fruits are unpacked and then their elements are packed into combined_fruits
>> combined_fruits = *fruits, *more_fruits

>> combined_fruits
=> ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
```

### Composition a hash with double splat operator(`**`)

Composing a hash is done by using the double splat operator(`**`).
This will pack all **key**/**value** pairs from one hash into another hash, or combine two hashes together.

```irb
>> fruits_inventory = {apple: 6, banana: 2, cherry: 3}
>> more_fruits_inventory = {orange: 4, kiwi: 1, melon: 2, mango: 3}

# fruits_inventory and more_fruits_inventory are unpacked into key-values pairs and combined.
>> combined_fruits_inventory = {**fruits_inventory, **more_fruits_inventory}

# then the pairs are packed into combined_fruits_inventory
>> combined_fruits_inventory
=> {:apple=>6, :banana=>2, :cherry=>3, :orange=>4, :kiwi=>1, :melon=>2, :mango=>3}
```

## Usage of splat operator(`*`) and double splat operator(`**`) with methods

### Composition with method parameters

When you create a method that accepts an arbitrary number of arguments, you can use [`*arguments`][arguments] or [`**keyword_arguments`][keyword arguments] in the method definition.
`*arguments` is used to pack an arbitrary number of positional (non-keyworded) arguments and
`**keyword_arguments` is used to pack an arbitrary number of keyword arguments.

Usage of `*arguments`:

```irb
# This method is defined to take any number of positional arguments
# (Using the single line form of the definition of a method.)

>> def my_method(*arguments)= arguments

# Arguments given to the method are packed into an array

>> my_method(1, 2, 3)
=> [1, 2, 3]

>> my_method("Hello")
=> ["Hello"]

>> my_method(1, 2, 3, "Hello", "Mars")
=> [1, 2, 3, "Hello", "Mars"]
```

Usage of `**keyword_arguments`:

```irb
# This method is defined to take any number of keyword arguments

>> def my_method(**keyword_arguments)= keyword_arguments

# Arguments given to the method are packed into a dictionary

>> my_method(a: 1, b: 2, c: 3)
=> {:a => 1, :b => 2, :c => 3}
```

If the method defined does not have any defined parameters for keyword arguments(`**keyword_arguments` or `<key_word>: <value>`) then the keyword arguments will be packed into a hash and assigned to the last parameter.

```irb
>> def my_method(a)= a

>> my_method(a: 1, b: 2, c: 3)
=> {:a => 1, :b => 2, :c => 3}
```

`*arguments` and `**keyword_arguments` can also be used in combination with one another:

```ruby
def my_method(*arguments, **keyword_arguments)
  p arguments.sum
  for (key, value) in keyword_arguments.to_a
    p key.to_s + " = " + value.to_s
  end
end


my_method(1, 2, 3, a: 1, b: 2, c: 3)
6
"a = 1"
"b = 2"
"c = 3"
```

You can also write arguments before and after `*arguments` to allow for specific positional arguments.
This works the same way as decomposing an array.

~~~~exercism/caution
Arguments have to be structured in a specific order:

`def my_method(<positional_arguments>, *arguments, <positional_arguments>, <keyword_arguments>, **keyword_arguments)`

If you don't follow this order then you will get an error.
~~~~

```ruby
def my_method(a, b, *arguments)
  p a
  p b
  p arguments
end

my_method(1, 2, 3, 4, 5)
1
2
[3, 4, 5]
```

You can write positional arguments before and after `*arguments`:

```irb
>> def my_method(a, *middle, b)= middle

>> my_method(1, 2, 3, 4, 5)
=> [2, 3, 4]
```

You can also combine positional arguments, \*arguments, key-word arguments and \*\*keyword_arguments:

```irb
>> def my_method(first, *many, last, a:, **keyword_arguments)
     p first
     p many
     p last
     p a
     p keyword_arguments
     end

>> my_method(1, 2, 3, 4, 5, a: 6, b: 7, c: 8)
1
[2, 3, 4]
5
6
{:b => 7, :c => 8}
```

Writing arguments in an incorrect order will result in an error:

```ruby
def my_method(a:, **keyword_arguments, first, *arguments, last)
  arguments
end

my_method(1, 2, 3, 4, a: 5)

syntax error, unexpected local variable or method, expecting & or '&'
... my_method(a:, **keyword_arguments, first, *arguments, last)
```

### Decomposing into method calls

You can use splat operator (`*`) to unpack an **array** of arguments into a method call:

```ruby
def my_method(a, b, c)
  p c
  p b
  p a
end

numbers = [1, 2, 3]
my_method(*numbers)
3
2
1
```

You can also use double splat operator(`**`) to unpack a **hash** of arguments into a method call:

```ruby
def my_method(a:, b:, c:)
  p c
  p b
  p a
end

numbers = {a: 1, b: 2, c: 3}
my_method(**numbers)
3
2
1
```

[arguments]: https://docs.ruby-lang.org/en/3.1/syntax/methods_rdoc.html#label-Array-2FHash+Argument
[keyword arguments]: https://docs.ruby-lang.org/en/3.1/syntax/methods_rdoc.html#label-Keyword+Arguments
[multiple assignment]: https://docs.ruby-lang.org/en/3.1/syntax/assignment_rdoc.html#label-Multiple+Assignment
[sorting algorithms]: https://en.wikipedia.org/wiki/Sorting_algorithm
[decompose]: https://docs.ruby-lang.org/en/3.1/syntax/assignment_rdoc.html#label-Array+Decomposition
[delimited decomposition expression]: https://riptutorial.com/ruby/example/8798/decomposition


---

---

# 19. EXCEPTIONS

# About

Exceptions are a form of error handling.
They are called exceptions, as they normally appear when dealing with some unexpected event.

At any point in our code, we can "raise" an exception.
We do this using the `raise` method, passing in an object - normally an Exception object, although we can also use basic strings.
For example, you'll see in the exercise stubs that we use the built-in `RuntimeError` to tell Ruby that a method hasn't been implemented.
You can also use the shorthand syntax of `raise(ExceptionObject, params)`.
If the exception class is omitted, `RuntimeError` is used by default.
For example:

```ruby
# These are equivalent
raise RuntimeError.new("Please implement this method")
raise RuntimeError, "Please implement this method"
raise "Please implement this method"
```

When Ruby sees this it bubbles the error to the top of the program and then exits.
For example, if you try dividing something by zero, you will see something like this:
```ruby
5/0

#=> Traceback (most recent call last):
#=> ...
#=> ZeroDivisionError (divided by 0)
```

It is important to note that exceptions should be used in cases where something exceptional happens, an error that needs special handling.
Exceptions should not be used for control-flow of a program, as that is considered bad design, which often leads to bad performance and maintainability.

## Class hierarchy

In Ruby exceptions follow a class hierarchy where `Exception` is the base class. These are the most common Ruby's built-in exceptions:

```
Exception
  NoMemoryError
  ScriptError
    LoadError
    NotImplementedError
    SyntaxError
  SignalException
    Interrupt
  StandardError
    ArgumentError
    IOError
    EOFError
    IndexError
    LocalJumpError
    NameError
      NoMethodError
    RangeError
      FloatDomainError
    RegexpError
    RuntimeError
    SecurityError
    SystemCallError
    SystemStackError
    ThreadError
    TypeError
    ZeroDivisionError
  SystemExit
```

Rescuing errors of a specific class also rescues errors of its children. This is why rescuing from `Exception` can be dangerous.
Ruby uses exceptions to also handle messages from the operative system "Signals", for example `ctrl-c`.
This means that rescuing from `Exception` will also capture this system "Signals".
So in order to prevent unexpected behaviours the common practice to capture "all errors" is to rescue form `StandardError`.

## Rescue Syntax
Ruby also provide extended rescue clauses for situations that require an special treatment:

```ruby
begin
  # ...
rescue CustomError => error
  # This block is run if a CustomError occurs
rescue AnotherCustomError => error
  # This block is run if a AnotherCustomError occurs
else
  # This block is run if no exception occurred at all
ensure
  # This block always run, regardless of whether an exception occurred
end
```

This can be useful for example when working with network IO where we always need to remember to close a connection.

Ruby rescue blocks can also use the `retry` keyword which re-runs everything between begin and rescue:

```ruby
counter = 0
begin
  counter += 1
  api_request
rescue
  retry if counter <= 3
end
```


# Introduction

Exceptions are a form of error handling.
They are called exceptions, as they normally appear when dealing with some unexpected event.

At any point in our code, we can "raise" an exception. 
We do this using the `raise` method, passing in an object - normally an Exception object, although we can also use basic strings.
For example, you'll see in the exercise stubs that we use the built-in `RuntimeError` to tell Ruby that a method hasn't been implemented.
You can also use the shorthand syntax of `raise(ExceptionObject, params)`.
If the exception class is omitted, `RuntimeError` is used by default.
For example:

```ruby
# These are equivalent
raise RuntimeError.new("Please implement this method")
raise RuntimeError, "Please implement this method"
raise "Please implement this method"
```

When Ruby sees this it bubbles the error to the top of the program and then exits.
For example, if you try dividing something by zero, you will see something like this:
```ruby
5/0

#=> Traceback (most recent call last):
#=> ...
#=> ZeroDivisionError (divided by 0)
```


# Introduction

Exceptions in Ruby, as in many languages, provide a way of dealing with unexpected events. Proper handling of exceptions is important when trying to prevent your program from crashing.

When an exception is raised, either by raising it explicitly or by the Ruby interpreter raising it, the program diverts normal operation and eventually exits with an error message:

```ruby
raise ArgumentError.new("Something went wrong!")
=> Traceback (most recent call last):
.
.
ArgumentError (Something went wrong!)
```

```ruby
1/0
=> Traceback (most recent call last):
.
.
ZeroDivisionError (divided by 0)
```

In case we want to stop this shut down process we need to react to the exception. This is called "rescuing" an exception:

```ruby
begin
  # ...any code that raises an exception
rescue
  puts 'Got an exception'
end
```

This program will not crash and it'll output "Got an exception". Instead of exiting, Ruby runs the code in the rescue block, which prints out a message.

As everything in Ruby, exceptions are also objects and they usually hold data about the exception. This is how we can get the exception object:

```ruby
begin
  # ...any code that raises an exception
rescue => e
  puts "Exception class: #{ e.class.name }"
  puts "Exception Message:#{e.message}"
end
```

In Ruby it's also possible to raise your own exceptions. For example:

```ruby
begin
  raise ArgumentError.new("Invalid argument")
rescue ArgumentError => e
  puts e.message
end
```

The previous exception is one of the Ruby's built in exceptions but it's also possible to define custom exceptions and raise them:

```ruby
class CustomError < StandardError
end

raise CustomError.new("Something went wrong")
```


---

---

# 20. MODULES

# About

Some times you don't need the overhead of creating an object with state.
In these cases, a `module` can be used.

A module is very similar to a class (in fact, `Module` is `Classes` parent in the object hierarchy) - the main difference being that rather than using instance methods, we use class methods.
Class methods start with `self.` and are directly called on a module. 
For example:

```ruby
module Speaker
  def self.echo(something)
    "#{something} ... #{something}"
  end
end

Speaker.echo("Hello")   #=> "Hello ... Hello"
```

# Introduction

Some times you don't need the overhead of creating an object with state.
In these cases, a `module` can be used.

A module is very similar to a class (in fact, `Module` is an ancestor of `Class` in the object hierarchy) - the main difference being that rather than using instance methods, we use class methods.
Class methods start with `self.` and are directly called on a module. 
For example:

```ruby
module Speaker
  def self.echo(something)
    "#{something} ... #{something}"
  end
end

Speaker.echo("Hello")   #=> "Hello ... Hello"
```


# Introduction

## Modules

So far all the exercises you have seen have used classes.
Sometimes we do not need the overhead of creating an object with state, so instead we use `module`.

A module is very similar to a class (in fact, `Module` is `Class`' parent in the object hierarchy) - the main difference being that rather than using instance methods, we use class methods.
Class methods start with `self.` and are directly called on a module.

For example:

```ruby
module Speaker
  def self.echo(something)
    "#{something} ... #{something}"
  end
end

Speaker.echo("Hello")   #=> "Hello ... Hello"
```

## Loops

There are several ways to write loops in Ruby, but as we tend to use enumeration rather than looping in general, the most commonly seen loop perhaps is the `while` loop:

```ruby
counter = 0

while counter < 5
  counter += 1
end
```

You can also use its sibling `until`

```ruby
counter = 0

until counter == 5
  counter += 1
end
```


---

---

# 21. OSTRUCT

# About

Ruby comes with a Standard Library (often shortened to "stdlib") - a collection of classes for working with things such as dates, json, and networking.
It also provides some useful functionality for making your code easier to work with.

`OpenStruct` is part of the Standard Library and allows you to easily create an object from a `Hash`. Rather than having to access using `Hash` keys, `OpenStruct` instead allows us to use methods to access and set values.

When using classes from the Standard Library, or any other library, you need to require that class using the `require` method.

```ruby
require 'ostruct'

attributes = { name: "Jeremy Walker", age: 21, location: "Nomadic" }
person = OpenStruct.new(attributes)

person.name
#=> Jeremy Walker

person.location
#=> Nomadic

# Update the age
person.age = 35

# It sets correctly
person.age
#=> 35
```

One bonus advantage of this is that you can take advantage of a shortcut when using block syntax. In situations where a block calls a single method, you can replace the block with `&:` followed by the method name. For example, these two lines are synonymous:

```ruby
people.sum { |person| person.age }
people.sum(&:age)
```



# Introduction

Ruby comes with a Standard Library (often shortened to "stdlib") - a collection of classes for working with things such as dates, json, and networking.
It also provides some useful functionality for making your code easier to work with.

`OpenStruct` is part of the Standard Library and allows you to easily create an object from a `Hash`. Rather than having to access using `Hash` keys, `OpenStruct` instead allows us to use methods to access and set values.

When using classes from the Standard Library, or any other library, you need to require that class using the `require` method.

```ruby
require 'ostruct'

attributes = { name: "Jeremy Walker", age: 21, location: "Nomadic" }
person = OpenStruct.new(attributes)

person.name
#=> Jeremy Walker

person.location
#=> Nomadic

# Update the age
person.age = 35

# It sets correctly
person.age
#=> 35
```

One bonus advantage of this is that you can take advantage of a shortcut when using block syntax. In situations where a block calls a single method, you can replace the block with `&:` followed by the method name. For example, these two lines are synonymous:

```ruby
people.sum { |person| person.age }
people.sum(&:age)
```



# Introduction

`OpenStruct` allows you to easily create an object from a `Hash`. 
Rather than having to access using `Hash` keys, `OpenStruct` instead allows us to use methods to access and set values.


```ruby
attributes = { name: "Jeremy Walker", age: 21, location: "Nomadic" }
person = OpenStruct.new(attributes)

person.name
#=> Jeremy Walker

person.location
#=> Nomadic

# Update the age
person.age = 35

# It sets correctly
person.age
#=> 35
```

One bonus to this approach is that we can take advantage of a shortcut when using block syntax. 
In situations where a block calls a single method, you can replace the block with `&:` followed by the method name. 
For example, these two lines are synonymous:

```ruby
people.sum { |person| person.age }
people.sum(&:age)
```

## Standard Library

All of the classes you've seen in previous exercises have been part of Ruby's Core Library.

OpenStruct is part of Ruby's Standard Library (often shortened to "stdlib") - a collection of classes for working with things such as dates, json, and networking.
It also provides some useful functionality for making your code easier to work with.

When using classes that are not from the Core Library — your own code in different files, classes from stdlib, or external dependencies — we need to import them using the `require` method before we can use them.
For example:

```ruby
require 'ostruct'

person = OpenStruct.new(name: "Jeremy Walker")
# ...
```




---

---


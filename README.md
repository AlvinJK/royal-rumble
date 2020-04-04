# Royal Rumble

An ordinal number is a word representing rank or sequential order. 
The naming convention for royal names is to follow a given name with an ordinal number using a Roman numeral to indicate the birth order of two people of the same name.
The Roman numerals from 1 to 50 are defined as follows: 
The numbers 1 through 10 are written I, II, III, IV, V, VI, VII, VIII, IX, and X. The Roman numerals corresponding to the numbers 20, 30, 40, and 50 are XX, XXX, XL, and L. For any other two-digit number < 50, its Roman numeral representation is constructed by concatenating the numeral(s) for its multiples of ten with the numeral(s) for its values < 10. 

For example, 47 is 40 + 7 = "XL" + "VII" = "XLVII".
In this challenge, you will be given a list of royal name strings consisting of a given name followed by an ordinal number. You must sort the list first alphabetically by name, then by ordinal increasing within any given name.

## How to install dependencies

```
yarn
```

## How to run 

This command will also run the installation if it's not been installed before.
```
yarn start
```

## Constraints
There will be between 1 and 50 names on the list.
Each name is a single string composed of firstName and ordinal, separated by a space.
ordinal is a valid Roman numeral representing a number between 1 and 50, inclusive.
The length of firstName will be between 1 and 20.
Each firstName comprises only uppercase and lowercase ascii characters [A-Za-z].

## Notes
- To add more input, create txt files named input*.txt
- After running the app, result will be written on output*.txt

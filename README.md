# JavaScript Function Bug: Undefined Parameter Handling

This repository demonstrates a common bug in JavaScript functions: improper handling of undefined parameters.  The `foo` function correctly handles `null` values, but it fails to account for `undefined` parameters, which can lead to unexpected behavior or errors.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version that addresses this issue.

## Bug Description

The original `foo` function only checks for `null` values. If either parameter is `undefined`, the addition operation proceeds, potentially leading to unexpected results or `NaN` (Not a Number) if one of the parameters is not a number.

## Solution

The solution involves explicitly checking for both `null` and `undefined` values using a loose comparison (`==`) or a stricter check (using `typeof`). The corrected function ensures that the parameters are valid numbers before performing the addition.
# LeetCode-JS-in-30-days

![LeetCode JS in 30 Days](https://leetcode.com/studyplan/30-days-of-javascript/)

Welcome to the **LeetCode JS in 30 Days** challenge! This repository contains my journey of solving LeetCode problems using JavaScript over 30 days.

## Table of Contents

- [About the Challenge](#about-the-challenge)
- [Problem List](#problem-list)
- [Solutions](#solutions)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## About the Challenge

The goal of this challenge is to improve my problem-solving skills in JavaScript by tackling a diverse set of problems on LeetCode. Over the next 30 days, I will be solving a new problem every day and sharing my solutions in this repository.

## Problem List

1. [Day 1:Create Hello world](#day-1-Create-Hello-world)
2. [Day 2: Closure](#day-2-Closure)
3. [Day 3: To Be Or Not To Be](#day-3-To-Be-Or-Not-To-Be)
4. [Day 4: Median of Two Sorted Arrays](#day-4-median-of-two-sorted-arrays)
5. [Day 5: Longest Palindromic Substring](#day-5-longest-palindromic-substring)
<!-- Add more days as needed -->

## Solutions

### Day 1: Create Hello world

**Problem:** Create Hello world

**Solution:**

```javascript
// Do it YourSelf
```

### Day 2: Closure

**Problem:** Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)

**Solution:**

```javascript
const createDecementCounter = (n) => {
  let counter = n;
  return function () {
    return counter--;
  };
};

// For practice Purpose

// Create a counter function that takes an initial value start and a step value step. The counter function should start at start and increase by step with each call.

//        Answer in Repo
```

### Day 1: To Be Or Not To Be

**Problem:**Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.

**Solution:**

```javascript
var expect = function (val) {
  let ans = val;
  return {
    toBe: function (expected) {
      if (expected === ans) {
        return true;
      } else throw "Not Equal";
    },
    notToBe: function (expected) {
      if (expected !== ans) {
        return true;
      } else throw "Equal";
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// for Practice   DO this

// Write a function assert that helps developers test their code. It should take in any value val and return an object with the following two functions:

// isEqualTo(val): Accepts another value and returns true if the two values == each other. If they are not equal, it should throw an error "Values are not equal".
// isGreaterThan(val): Accepts another value and returns true if the initial value is greater than the argument. If it is not, it should throw an error "Initial value is not greater".
```

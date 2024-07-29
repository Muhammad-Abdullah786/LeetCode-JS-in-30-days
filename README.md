# LeetCode-JS-in-30-days

# LeetCode JS in 30 Days

![LeetCode JS in 30 Days](https://img.shields.io/badge/LeetCode-JS--in--30--Days-blue)

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

1. [Day 1: Two Sum](#day-1-two-sum)
2. [Day 2: Add Two Numbers](#day-2-add-two-numbers)
3. [Day 3: Longest Substring Without Repeating Characters](#day-3-longest-substring-without-repeating-characters)
4. [Day 4: Median of Two Sorted Arrays](#day-4-median-of-two-sorted-arrays)
5. [Day 5: Longest Palindromic Substring](#day-5-longest-palindromic-substring)
<!-- Add more days as needed -->

## Solutions

### Day 1: Two Sum

**Problem:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Solution:**

```javascript
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
```

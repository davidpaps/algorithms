# Algorithms

This is my learnings from my quest to understand algorithms. It serves as a guide and resource to the core concepts of algorithms, and some of the most commonly used.

---

## Key

### Logarithms

Logs are the flip of exponentials:

- 10<sup>2</sup> = 100 => log<sub>10</sub> 100 = 2
- 10<sup>3</sup> = 1000 => log<sub>10</sub> 1000 = 3
- 10<sup>4</sup> = 10000 => log<sub>10</sub> 10000 = 4

---

## Binary Search

- Its input is a sorted list of elements. If an element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns null. Binary search first accesses the middle element of the sorted list and therefore elimintes half of the numbers straight away. This is then repeated, it searches for the midde number and then eliminates half of the remaining numbers every time.

- Binary search takes **_log<sub>2</sub> n_**.

- If you were 'Simple Searching' (Starting at the first element and searching the next one until the desired element is found or the end is reached) every element of a list of 8 numbers, therefore it's logarithm would be log n in the worst case. For Binary Search, a the worst case you would have to check for would be **_log n_**. For a list of 8 elements **_log 8 == 3_** because 2<sup>3</sup> == 8, sor for a list of 8 numbers, 3 numbers would have to be checked at most.

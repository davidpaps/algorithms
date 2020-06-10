# Algorithms

This is my learnings from my quest to understand algorithms. It serves as a guide and resource to the core concepts of algorithms, and some of the most commonly used.

---

## Concepts

Here a few key concepts you will see coming up in the following algorithm examples:

### Logarithms

Logs are the flip of exponentials:

- 10<sup>2</sup> = 100 => log<sub>10</sub> 100 = 2
- 10<sup>3</sup> = 1000 => log<sub>10</sub> 1000 = 3
- 10<sup>4</sup> = 10000 => log<sub>10</sub> 10000 = 4

### Recursion

Recursion is where a function calls itself inside it's function. Every recursive function has 2 parts, the `Base Case` and the `Recursive Case`. The recursive case is when the function calls itself, the base case is when ths function does not call itself again. This is important as to not cause an infinite loop. Recursion uses the `call stack` to save the variables for multiple functions in memory, it only does one of two things - adds a function call or removes a function call from the stack. A recursive call with the same variable cannot access another variable in the call stack. Using the stack is convenient, however it can use lots of memory as your computer is saving information for many function calls.

### Divide and Conquer

An algorithm design based on multi-branched recursion. It works by recursivly breaking down a problem into two or more sub problems of the same type. You would figure out a simple case to be the base case of the algorithm, and then figure out how to reduce your problem and get to the base case.

### Big O Notation

Big O gives a worst case scenario run time. of an algorithm, it tells us how fast an algorithm is, and how the running time is affected if the list size is changed. Big O doesn’t tell you the speed in seconds. Big O notation lets you compare the number of operations, it tells you how fast the algorithm grows.

`O(n)`
O = 'Big O'
n = Number of operations

**Example:**

- O(log n) _Example:_ Binary search.
- O(n) _Example:_ Simple search.
- O(n \* log n) _Example:_ Quicksort.
- O(n<sup>2</sup>) _Example:_ Selection sort.
- O(n!) _Example:_ A really slow algorithm.

<img src='images/comparison.png'>

---

## Binary Search

- Its input is a sorted list of elements. If an element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns null. Binary search first accesses the middle element of the sorted list and therefore elimintes half of the numbers straight away. This is then repeated, it searches for the midde number and then eliminates half of the remaining numbers every time.

- Binary search takes **_log<sub>2</sub> n_**.

- If you were 'Simple Searching' (Starting at the first element and searching the next one until the desired element is found or the end is reached) every element of a list of 8 numbers, therefore it's logarithm would be log n in the worst case. For Binary Search, the worst case you would have to check for would be **_log n_**. For a list of 8 elements **_log 8 == 3_** because 2<sup>3</sup> == 8. Therefor for a list of 8 numbers, 3 numbers would have to be checked at most.

- Binary Search runs in Logarithmic time (**_O(log n)_**), as opposed to Simple Searching running in Linear Time (**_O(n)_**).

- See the [Binary Search](binary_search.py) file for a working example of the Binary Search algorithm, written in Python.

---

## Sort

### Selection Sort

- This algorithm goes through a list, searches for the smallest/largest element, and adds that element to a new list. It then repeats to find the next element in order. It keeps doing this until we end up with an ordered list.

- Each element in the initial list has to be searched through, this takes **_O(n)_**. You then have to repeat this **_n x n_** times as you keep going through the original list. This therefore has a Big O notation of **_O(n<sup>2</sup>)_**.

- See the [Selection Sort](selection_sort.py) file for a working example of the Selection Sort algorithm, written in Python.

### Quicksort

-

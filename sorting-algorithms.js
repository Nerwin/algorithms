/* 
*  ##########################
*  ### sorting algorithms ###
*  ##########################
*/

/*
## Facts:
time known time complexity for ANY sorting algorithm is O(n * log (n)), aka linearithmic, ON AVERAGE.
BubbleSort:

Starting on the left, compare adjacent items and keep “bubbling” (swapping) the larger one to the right. Eventually the largest element will be at the end of the array in its final place. Bubble sort the remaining N - 1 items.

Best Case: O(n)
Average Case: O(n^2)
Advantages: Easy to implement
MergeSort:

Recursively divide the array into subarrays of length 1. Merge them all back together.

Best Case: O(n * log (n))
Average Case: O(n * log (n))
Advantages: Worst case is O(n * log(n)), which is better than the QuickSort worst case
QuickSort:

Select a pivot element and organize the array such that all elements left of it are less than or equal to it, and all elements right of it are greater than it. Recurse on the elements to two halves outside of the pivot.

Best Case O(n * log (n))
Average Case: O(n * log (n))
Worst Case: O(n^2);
Advantages: It can be done in place, using little amount of memory
*/


/* 
* ## Selection sort ##
*/

/* 
*  ## Merge sort ##
*/

/* 
* ## Insertion sort ##
*/

/* 
* ## Bubble sort ##
*/

/* 
* ## Quick sort ##
*/

/* 
* ## Heap sort ##
*/

/* 
* ## Bucket sort ##
*/

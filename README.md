# Sorting_Visualizer
Sorting Visualizer - Project Overview
The Sorting Visualizer is an interactive web-based application that demonstrates the functionality of various sorting algorithms visually. It is designed to help users understand and learn how sorting algorithms work by observing their step-by-step processes in real-time.
Input Format
The input for the Sorting Visualizer is generated dynamically. It is represented as an array of integers where each integer corresponds to the height of a bar in the visualizer.
Details:
Array Generation: The array is randomized with values typically between a minimum and maximum range (e.g., 5 to 500).
User Inputs:
Array Size Slider: Allows users to adjust the size (number of elements) in the array.
Speed Slider: Determines the speed of the sorting animation.
New Array Button: Regenerates a random array for sorting.

![p1](https://github.com/user-attachments/assets/91a1761e-52cb-496b-9634-3d011b72380c)

Features
Interactive Controls:

New Array: Generates a new random array of bars.
Size Slider: Adjusts the number of bars in the array.
Speed Slider: Controls the sorting speed for better visualization.
Sorting Algorithms Supported:

Bubble Sort: A simple algorithm that repeatedly swaps adjacent elements if they are in the wrong order.
Selection Sort: Finds the smallest element in the unsorted part of the array and swaps it with the first unsorted element.
Insertion Sort: Builds the sorted array one element at a time by shifting elements.
Quick Sort: A divide-and-conquer algorithm that partitions the array based on a pivot and recursively sorts the subarrays.
Merge Sort: Another divide-and-conquer algorithm that divides the array, sorts the parts, and merges them.
Real-Time Visualization:

Bars represent the array elements, where the height of each bar corresponds to the value.
Bars change colors during sorting:
Orange: Elements being compared or processed.
Red: Pivot element (Quick Sort).
Green: Sorted elements.

![p2](https://github.com/user-attachments/assets/e41c3c48-03f5-43db-abf5-890573f218ca)

Sorting Format
The sorting algorithms process the array and animate the changes in real-time. Each algorithm uses its own approach to sort the array, which is reflected visually.

Sorting Steps:
Highlighting Comparisons:
During comparisons, the bars involved are highlighted (e.g., orange or red).
Swapping Elements:
Bars being swapped visually move to their new positions.
Marking Sorted Elements:
Once an element is sorted, it turns green to signify its final position.
Supported Sorting Algorithms:
Bubble Sort:
Repeatedly compares adjacent elements and swaps them if needed.
Selection Sort:
Finds the smallest element in the unsorted section and places it in its correct position.
Insertion Sort:
Inserts elements into their correct position by shifting larger elements.
Quick Sort:
Partitions the array around a pivot and sorts recursively.
Merge Sort:
Divides the array into smaller sections, sorts them, and merges them back.

![p3](https://github.com/user-attachments/assets/a7b8805a-2d4b-4c03-9278-748955b0cdd1)

The output is a fully sorted array where the heights of the bars increase from left to right, visually confirming the correct order.
Details:
Visual Output:
Bars sorted in ascending order from left to right.
All bars turn green once sorted.
Array Representation:
The sorted array can be derived from the bar heights.
Applications
Educational Tool: Helps students and developers understand sorting algorithms visually.
Interactive Learning: Engages users by letting them experiment with array sizes, sorting speeds, and multiple algorithms.
Debugging Aid: Demonstrates step-by-step execution of sorting algorithms, making it easier to identify their logic.
This project is a fun and educational way to learn about sorting algorithms while combining the fundamentals of HTML, CSS, and JavaScript.

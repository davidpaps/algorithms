def quicksort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = [i for i in array[1:] if i <= pivot]
        more = [i for i in array[1:] if i > pivot]

        return quicksort(less) + [pivot] + quicksort(more)


my_array = [12, 34, 2, 6, 7, 82]

print(quicksort(my_array))

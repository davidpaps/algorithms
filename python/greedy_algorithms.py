fruits = set(['avocado', 'tomato', 'banana'])
vegetables = set(['beets', 'carrots', 'tomato'])

# Union
print(fruits | vegetables)

# Intersection
print(fruits & vegetables)

# Difference
print(fruits - vegetables)
print(vegetables - fruits)

# Example
states_needed = set(["a", "b", "c", "d", "e", "f", "g", "h"])

stations = {}
stations["kone"] = set(["d", "e", "f"])
stations["ktwo"] = set(["b", "d", "a"])
stations["kthree"] = set(["c", "e", "g"])
stations["kfour"] = set(["e", "f"])
stations["kfive"] = set(["g", "h"])

final_stations = set()

while states_needed:
    best_station = None
    states_covered = set()
    for station, states_for_station in stations.items():
        covered = states_needed & states_for_station
        if len(covered) > len(states_covered):
            best_station = station
            states_covered = covered

    states_needed -= states_covered
    final_stations.add(best_station)

print(final_stations)

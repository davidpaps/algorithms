letters = {}
letters['A'] = ['B', 'S']
letters['B'] = ['A']
letters['C'] = ['D', 'E', 'F', 'S']
letters['D'] = ['C']
letters['E'] = ['C', 'H']
letters['F'] = ['C', 'G']
letters['G'] = ['F', 'S']
letters['H'] = ['E', 'G']
letters['S'] = ['A', 'C', 'G']

print(letters)


def dfs(graph, node, visited):
    if node not in visited:
        visited.append(node)
        for n in graph[node]:
            dfs(graph, n, visited)
    return visited


print(dfs(letters, 'A', []))

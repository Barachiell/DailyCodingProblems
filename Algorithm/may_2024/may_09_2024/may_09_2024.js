/* 
Given an undirected graph, determine if it contains a cycle.

*/

function hasCycle(graph) {
    const visited = new Set();
    for (let node in graph) {
        if (!visited.has(node) && hasCycleUtil(node, visited, null, graph)) {
            return true;
        }
    }
    return false;
}

function hasCycleUtil(node, visited, parent, graph) {
    visited.add(node);
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            if (hasCycleUtil(neighbor, visited, node, graph)) {
                return true;
            }
        } else if (neighbor !== parent) {
            return true;
        }
    }
    return false;
}
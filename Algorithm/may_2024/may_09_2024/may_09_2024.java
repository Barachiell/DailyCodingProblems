/* 
Given an undirected graph, determine if it contains a cycle.

*/

public class GraphCycle {

    public boolean hasCycleDFS(Map<Integer, List<Integer>> graph) {
        Set<Integer> visited = new HashSet<>();
        for (Integer node : graph.keySet()) {
            if (!visited.contains(node) && hasCycleUtil(node, visited, null, graph)) {
                return true;
            }
        }
        return false;
    }

    private boolean hasCycleUtil(Integer node, Set<Integer> visited, Integer parent, Map<Integer, List<Integer>> graph) {
        visited.add(node);
        for (Integer neighbor : graph.get(node)) {
            if (!visited.contains(neighbor)) {
                if (hasCycleUtil(neighbor, visited, node, graph)) {
                    return true;
                }
            } else if (!neighbor.equals(parent)) {
                return true;
            }
        }
        return false;
    }


/*     TESTING
        
    public static void main(String[] args) {
        GraphCycle detector = new GraphCycle();

        // Example usage:
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(1, 2));
        graph.put(1, Arrays.asList(0, 2));
        graph.put(2, Arrays.asList(0, 1, 3));
        graph.put(3, Arrays.asList(2, 4));
        graph.put(4, Arrays.asList(3));

        boolean hasCycle = detector.hasCycleDFS(graph);
        System.out.println("Does the graph contain a cycle? " + hasCycle);
    } */
}
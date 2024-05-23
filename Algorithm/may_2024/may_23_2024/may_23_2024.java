import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class SquareAndSort {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(-9, -2, 0, 2, 3);
        List<Integer> result = numbers.stream()
                                      .map(x -> x * x)
                                      .sorted()
                                      .collect(Collectors.toList());
        System.out.println(result);  // Output [0, 4, 4, 9, 81]
    }
}
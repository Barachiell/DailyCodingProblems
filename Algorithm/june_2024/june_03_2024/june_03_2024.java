/* 
Multiple Sream Exercises
 */

//Given a list of strings, filter out the strings that contain the letter 'a'.
List<String> words = Arrays.asList("banana", "sol", "lua", "macaco", "lobo");
List<String> wordsWithA = words.stream()
                .filter(word -> word.contains("a"))
                .collect(Collectors.toList());

System.out.println(wordsWithA);


//Given a list of integers, double each number and collect the results into a new list.
List<Integer> numbers = Arrays.asList(1,3,5,3,6,2,5);
List<Integer> squared = numbers.stream()
                .map(n -> n * 2)
                .collect(Collectors.toList());

System.out.println(squared);


//Given a list of integers, count the number of odd numbers in the list.
List<Integer> numbers = Arrays.asList(1,4,3,7,9,11,34,5);
long oddSum = numbers.stream()
                .filter(n -> n %2 !=0)
                .count();

System.out.println(oddSum);


//Given a list of integers, find the maximum value using streams.
List<Integer> numbers = Arrays.asList(1,4,7,10,34,20,45,100,2,8);
Optional<Integer> maxNumber = numbers.stream()
                .max((i,j) -> i.compareTo(j));

System.out.println(maxNumber);


//Given a list of integers, remove duplicate elements and collect the unique elements into a new list.
List<Integer> numbers = Arrays.asList(1,1,2,3,4,3,34,21,34,2,1,25);
List<Integer> uniqueNumbers = numbers.stream()
                .distinct()
                .collect(Collectors.toList());

System.out.println(uniqueNumbers);


//Given a list of strings, group the strings by their starting letter into a map.
List<String> words = Arrays.asList("ananas", "banana", "fox", "avocado", "boo", "car", "flavia");
Map<Character, List<String>> firstCharMap = words.stream()
                .collect(Collectors.groupingBy(s -> s.charAt(0)));

firstCharMap.forEach((firstChar, list) -> System.out.println(firstChar + ": " + list));


//Given a list of doubles, calculate the average value using streams.
List<Double> numbers = Arrays.asList(1.5, 2.8, 3.7, 4.2, 5.1);
double average = numbers.stream()
            .mapToDouble(Double::doubleValue) // Convert each Double to double
            .average()                        
            .orElse(0.0);                   
        
System.out.println("Average: " + average);


//Given a List of Strings retrieve strings from a collection, filtering out those with fewer than x characters?
List<String> words = Arrays.asList("bernard", "joão", "kevin", "ana", "fabio", "lara");
List<String> filteredWords = words.stream()
            .filter(words -> words.length() < 5)
            .collect(Collectors.toList());

System.out.println(filteredWords);


//Given a list of strings, sort the strings based on their length in ascending order.
List<String> wordsToSort = Arrays.asList("one", "four", "fives", "seven" );
List<String> sortedByLength = wordsToSort.stream()
            .sorted((w1, w2) -> w1.length() - w2.length())
            .collect(Collectors.toList());

System.out.println(sortedByLength);


//Given two lists of integers, combine them into a single list and remove duplicate elements.
List<Integer> numberList1 = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> numberlist2 = Arrays.asList(4, 5, 6, 7, 8);
List<Integer> combinedList = Stream.concat(numberList1.stream(), numberList2.stream())
                .distinct()
                .collect(Collectors.toList());
                
System.out.println("Combined List: " + combinedList);

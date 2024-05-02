/* 
This problem was asked by Apple.

A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.
 */

public class FixedPoint {

    public void checkForFixedPoint(int[] arr){
        int fixedPoint = IntStream.range(0, arr.length)
                .filter(i -> arr[i] == i)
                .findFirst()
                .orElse(-1);

        if(fixedPoint != -1){
            System.out.println(fixedPoint);
        } else{
            System.out.println(false);
        }
    }
}
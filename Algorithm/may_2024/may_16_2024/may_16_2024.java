import java.util.ArrayList;
import java.util.List;

public class SevenishNumbers {

    private int currentPotency = 0;
    private List<Integer> sevenishList = new ArrayList<>();

    public int getSevenishNumber(int num) {
        if (num <= 0) {
            System.err.println("Number needs to be higher than 0");
            return -1; 
        }
        return populateSevenishList(num);
    }

    private int populateSevenishList(int num) {
        if (sevenishList.size() >= num) {
            return sevenishList.get(num - 1);
        }
        int nextSevenish = (int) Math.pow(7, (currentPotency));
        sevenishList.add(nextSevenish);
        if(currentPotency > 0){
            addExtras(0, num);
        }
        currentPotency++;
        return populateSevenishList(num);
    }

    private void addExtras(int potencyToAdd, int num) {
        if (potencyToAdd == currentPotency || sevenishList.size() >= num) {
            return;
        }
        int nextExtra = (int) (Math.pow(7, currentPotency) + Math.pow(7, potencyToAdd));
        sevenishList.add(nextExtra);
        potencyToAdd++;
        addExtras(potencyToAdd, num);
    }

    public static void main(String[] args) {
        SevenishNumbers sevenishNumbers = new SevenishNumbers();
        System.out.println(sevenishNumbers.getSevenishNumber(7));
        System.out.println(sevenishNumbers.sevenishList);
    }

}
import java.util.*;

/*
* find most used word, no banned words
* */

class Scratch {
    public static void main(String[] args) {
        Scratch s = new Scratch();
        String t = "Bob hit a ball, the hit BALL flew far after it was hit.";
        String[] banned = new String[1];
        banned[0] = "hit";

        s.mostCommonWord(t, banned);
    }

    public String mostCommonWord(String paragraph, String[] banned) {
        String[] wordArray = paragraph.split("\\W+");
        HashSet<String> bannedSet = new HashSet<String>();
        HashMap<String, Integer> wordMap = new HashMap<>();
        int max = 0;
        String result = "";

        for (String w: banned) bannedSet.add(w);

        for (String currentWord : wordArray) {
            String w  = currentWord.toLowerCase();
            if (!bannedSet.contains(w)) {
                if (wordMap.containsKey(w)) {
                    Integer newVal = wordMap.get(w) + 1;
                    wordMap.put(w, newVal);
                }
                else wordMap.put(w, 1);
            }
        }

        for (Map.Entry<String, Integer> e: wordMap.entrySet()) {
            if (e.getValue() > max) {
                max = e.getValue();
                result = e.getKey();
            }
        }
        return result;
    }
}


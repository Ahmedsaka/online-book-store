package com.interswitch.onlinebookstore;

import lombok.experimental.UtilityClass;

import java.util.Random;

@UtilityClass
public class Utility {
    Random random = new Random();

    public static String generateISBN(String prefix, int length) {
        StringBuilder isbn = new StringBuilder(prefix);
        for (int i = 0; i < length - 2; i++) {
            isbn.append(random.nextInt(10));
        }

        int sum = 0;
        for (int i = 0; i < length - 1; i++) {
            int digit = Integer.parseInt(isbn.charAt(i) + "");
            sum += (i % 2 == 0) ? digit : digit * 3;
        }
        int checksum = (10 - (sum % 10)) % 10;

        isbn.append(checksum);

        return isbn.toString();
    }
}

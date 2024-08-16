package com.example.onlinebookstore.entity;

import java.util.HashMap;
import java.util.Map;



public enum Category {

	SCIENCEFICTION(0),
    ROMANCENOVELS(1),
    FANTASY(2),
    HORROR(3),
    THRILLAR(4),
    BIOGRAPHY(5),
    BUSINESS(6),
	FINANCE(7),
	SELFHELP(8),
	HISTORY(9),
	SPIRITUALITY(10),
	ADVENTURE(11);
	

	    private int value;
	    private static Map map = new HashMap<>();

	    private Category(int value) {
	        this.value = value;
	    }

	    static {
	        for (Category category : Category.values()) {
	            map.put(category.value, category);
	        }
	    }

	    public static Category valueOf(int category) {
	        return (Category) map.get(category);
	    }

	    public int getValue() {
	        return value;
	    }
	

}

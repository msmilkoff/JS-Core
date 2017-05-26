function solve([title, day]) {
    title = title.toLowerCase();
    day = day.toLowerCase();

    let movies = {
        "the godfather" : {
            "monday": 12,
            "tuesday": 10,
            "wednesday": 15,
            "thursday": 12.50,
            "friday": 15,
            "saturday": 25,
            "sunday": 30
        },
        "schindler's list": {
            "monday": 8.50,
            "tuesday": 8.50,
            "wednesday": 8.50,
            "thursday": 8.50,
            "friday": 8.50,
            "saturday": 15,
            "sunday": 15
        },
        "casablanca": {
            "monday": 8,
            "tuesday": 8,
            "wednesday": 8,
            "thursday": 8,
            "friday": 8,
            "saturday": 10,
            "sunday": 10
        },
        "the wizard of oz": {
            "monday": 10,
            "tuesday": 10,
            "wednesday": 10,
            "thursday": 10,
            "friday": 10,
            "saturday": 15,
            "sunday": 15
        }
    }

    if (title in movies && day in movies[title]){
        console.log(movies[title][day]);
    } else {
        console.log("error");
    }
}

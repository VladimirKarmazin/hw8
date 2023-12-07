var birthYear = prompt("Введіть рік народження:");
var city = prompt("Введіть місто, в якому ви живете:");
var favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

if (birthYear !== null && city !== null && favoriteSport !== null) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - parseInt(birthYear);

    var cityInfo;
    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        cityInfo = "Ти живеш у столиці " + getCountryName(city) + "!";
    } else {
        cityInfo = "Ти живеш у місті " + city + ".";
    }

    alert("Вік: " + age + "\n" + cityInfo);

    var sportsChampions = {
        "Футбол": "Ліонель Мессі",
        "Теніс": "Рафаель Надаль",
        "Баскетбол": "Леброн Джеймс"
    };

    var sportInfo = sportsChampions[favoriteSport.toLowerCase()];
    if (sportInfo) {
        alert("Круто! Хочеш стати як " + sportInfo + "?");
    } else {
        alert("Хочеш стати новим чемпiоном з " + favoriteSport + "?");
    }
} else {
    alert("Шкода, що ви не захотіли ввести свій(ю) " + (birthYear === null ? "рік народження" : (city === null ? "місто" : "вид спорту")) + ".");
}

function getCountryName(capital) {
    switch (capital) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Великої Британії";
        default:
            return "";
    }
}
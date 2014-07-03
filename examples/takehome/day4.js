var movies = [
    "back to the future",
    "desperado",
    "donnie darko",
    "date night",
    "iron man",
    "the cell",
    "superman",
    "the jerk",
    "howard the duck",
    "from dusk til dawn"
];

function capitalize(str) {
    if (!str || typeof str !== "string") {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}

for (var i = 0, len = movies.length; i < len; i++) {
    var movie = movies[i];
    movies[i] = capitalize(movie);
}

console.log(movies);
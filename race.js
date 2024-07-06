const moto = [
    "    0_,",
    "::,\\->\\-.",
    "(_)'==(_)"
];

function printRaceTrack(position1, name1, position2, name2) {
    const trackLength = 115;
    const spaceBetween = 100;
    console.log("-".repeat(110) + "|META|");
    for (let line of moto) {
        console.log(" ".repeat(position1) + line + " ".repeat(Math.max(0, spaceBetween - position1)));
    }
    console.log(" ".repeat(position1) + name1);
    console.log("-".repeat(trackLength));
    for (let line of moto) {
        console.log(" ".repeat(position2) + line + " ".repeat(Math.max(0, spaceBetween - position2)));
    }
    console.log(" ".repeat(position2) + name2);
    console.log("-".repeat(trackLength));
}

function clearScreen() {
    console.clear();
}

function startRace() {
    let position1 = 0, position2 = 0;
    const name1 = "Gordo";
    const name2 = "Toretto";
    console.log("Carrera de motos");
    console.log(`${name1} vs ${name2}`);
    setTimeout(() => {
        clearScreen();
        const raceInterval = setInterval(() => {
            if (Math.random() < 0.5) {
                position1 += 1;
            } else {
                position2 += 1;
            }
            clearScreen();
            printRaceTrack(position1, name1, position2, name2);
            if (position1 >= 110 || position2 >= 110) {
                clearInterval(raceInterval);
                const winner = position1 >= 110 ? name1 : name2;
                console.log(`¡GANÓ ${winner}!!!`);
            }
        }, 10);
    }, 3000);
}

startRace();

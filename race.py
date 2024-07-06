import time
import os
from random import randint

moto = [
    "    0_,",
    "::,\\->\\-.",
    "(_)'==(_)"
]

def print_race_track(position1, name1, position2, name2):
    track_length = 115
    space_between = 100
    print(110 * "-" + "|META|")
    for line in moto:
        print((position1 * " ") + line + ((space_between - position1) * " "))
    print((position1 * " ") + name1)
    print(track_length * "-")
    for line in moto:
        print((position2 * " ") + line + ((space_between - position2) * " "))
    print((position2 * " ") + name2)
    print(track_length * "-")

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def start_race():
    position1 = position2 = 0
    name1 = "Gordo"
    name2 = "Toretto"
    print("Carrera de motos")
    print(f"{name1} vs {name2}")
    time.sleep(3)
    clear_screen()

    while position1 < 110 and position2 < 110:
        if randint(1, 2) == 1:
            position1 += 1
        else:
            position2 += 1
        clear_screen()
        print_race_track(position1, name1, position2, name2)
        time.sleep(0.01)

    winner = name1 if position1 == 110 else name2
    print(f"¡GANÓ {winner}!!!")

if __name__ == "__main__":
    start_race()

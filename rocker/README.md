# Rocker

The Rocker is an **experimental** asteroid hauling ship. It is designed to be used in the safe zone and haul small asteroids. It uses a tractor beam to position asteroids into five compartments of cargo lock beams in a circular pattern. It is a more polished and advanced version of the [Pebbler](../pebbler) as it has load automation to approach and load asteroids in the right order as well as a material scanner that gives estimated credits for selling the asteroids.

The blueprint is provided for [free](#download-blueprint). All [feedback](#providing-feedback) is welcome and in game tips (in-game name Egomaniac) are appreciated. However support will be limited but I will try my best.

[Starbase Ship Shop Page](https://sb-creators.org/makers/Egomaniac/ship/%5BFREE%5D%20Rocker)

<img src="photos/20211002134507_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002134515_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002134623_1.jpg" alt="Rocker" width="400" />
<img src="photos/20211002134643_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002134647_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002135839_1.jpg" alt="Rocker" width="400" />
<img src="photos/20211002140030_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002140236_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002140517_1.jpg" alt="Rocker" width="400" />
<img src="photos/20211002140653_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002141207_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002141237_1.jpg" alt="Rocker" width="400" />
<img src="photos/20211002141428_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002144144_1.jpg" alt="Rocker" width="400" /> <img src="photos/20211002144204_1.jpg" alt="Rocker" width="400" />

More photos in the [`photos` folder](photos)

## Features

The ship has the following features:

- Standard Cruise function
- Turtle function with adjustable rate
- 12 T2 generators with four T2 fuel chambers and eight spare rods on racks
- Radiators that provide more than adequate cooling
- Two small and two medium propellant tanks with 10,000,000 units of propellant
- 40 batteries
- 12 T2 box and 28 T2 triangle thrusters providing forward thrust
- 56 T2 manuever thrusters
- Tractor beam which will load asteroids into five compartments with cargo lock beams
- Load automation that will load asteroids into the right container in the right order
- Material scanner that will output the materials in stacks as well as the estimated credits you will get for dropping the asteroid off at Origin stations
- Rangefinders to help judge forward distance and asteroid fit
- Resource bridge for refueling
- Pretty much max speed 150m/s when empty

## Changelog

### v1.0.0 (Current) - 02/10/2021

- Initial release

## Build Cost

![Ship Build Cost](images/build_cost.png)

TIP: You can craft your own generators (T2), box thruster components (T2) and ship tools to reduce assembly cost.

## Download Blueprint

The blueprint file is available in the `blueprints` folder [here](https://github.com/vinteo/starbase-ships/raw/main/rocker/blueprints/rocker.fbe).

## Known Issues

- Loading of asteroids are rather slow, especially the larger ones.
- When asteroids are loaded more on one side, the ship can become unbalanced and thrust efficiency drops
- Ship yaw is not very good.
- Currently there are no navigation features but will possibly add ISAN and Compass in the future if this ship becomes useful to Endos

## Usage

### Flying the Ship

![Pilot Console](images/pilot_center_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

| Interface | Function |
|---|---|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle`, `TurtleRate` | Activates turtle mode which sets all thrust to a maximum limit of `TurtleRate` (percent) of full thrust. |
| `ID` | Toggle for the transponder. |
| `Distance` & `Range` | Distance for rangefinder. `Range` toggles the rangefinders.|
| `Scan`, `Material`, & `Credits` | Material scanning controls. See [Scanning Asteroids](#scanning-asteroids). |
| `Approach`, `Beam`, `Load`, Cargo `Load` & `Toggle` | Cargo loading controls. See [Loading Asteroids](#loading-asteroids). |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| `DurabilityErrors` | Number of durability errors on the ship. If the asteroids are not position correctly it may cause errors |
| `Timer` | See [Timer](#timer). |

### Managing Power and Fuel

![Pilot Right Console](images/pilot_right_console.jpg)

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 10,000,000 units. |
| `Battery` | Shows current battery charge of the 40 batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `MinEPS` & `Min_EPS` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `RadiationRate` | Current radiation rate of the radiators, maximum of 100%. If it is hitting 100% your radiators may be damaged. |
| `Fuel1`, `Fuel2`, `Fuel3`, `Fuel4` | Total fuel remaining on fuel rods, maximum of 300,000 units each. |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |

#### Managing Power

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `MinEPS` value using the switch for the minimum rate and turning on `Min_EPS`.

### Scanning Asteroids

![Scanner](images/scanner.jpg)

`Scan` turns on the material scanner. The beam has a range of 100m. Point the beam at an asteroid and `Material` will show the materials in the asteroid along with the volume of each in stacks. `Credits` will show the _estimated_ amount of credits you will get for the asteroid if you drop it off at Origin stations. The calculation is 158.8% (worked out this with testing) of the cost of ore of the vendor price. **This only has data for safe zone materials.** The total volume of the asteroid in Mv is also shown.

### Loading Asteroids

Approach an asteroid by pointing the center rangefinder at an asteroid and activating `Approach`. This will guide the ship to around 10m of the asteroid.

To load asteroids, activate `Beam` to activate tractor beam and point the beam at an asteroid. Once the beam has locked on, use `Load` to use beam to load to a compartment. The back compartment should be loaded first followed by the left and right back and finally the the front compartments. **The loading of the a compartment will not activate if cargo lock beam of the compartments in front of it is activated**.

Once the asteroid is in place the cargo lock beam should activate itself and the tractor beam will reset. If it does not activate for any reason, you can use `Toggle` to active the cargo lock beam manually and it will also reset the tractor beam.

All these can be done the automated `Load` function. Point the center rangefinder at the asteroid you wish to load and activate `Load`. This is activate `Approach`, `Scan` and `Beam` as well as smartly activating the `Load` of the right compartment. So you can just use `Load` each time and it will load the asteroids to the right compartment in the right order.

### Other Stuff

#### Timer

On the pilot center console there is a `Timer` panel which acts as a timer. It will run when the ship is active and show total time in years, weeks, days, hours, minutes and seconds. To reset the timer, use your universal tool (`U` key) and clear the value of the `Timer` field.

## Providing Feedback

I can be found in-game as Egomaniac and on discord as vinteo#4211. Feel free to contact me and provide feedback or if you need help. Pull requests are also welcomed for scripts changes/fixes.

I would also love to see any modifications or improvements you have made, so feel free to share! I hope to learn from the community and may also incorporate your changes into future versions.

Of course in-game tips are greatly appreciated.

## Frequently Asked Questions

#### Why is the blueprint free?

This ship is experimental, it is not very lucrative to haul small safe zone asteroids and tractor beams are super slow. But I had a lot of fun building it!

Finally, I am hoping to get feedback from the community and learn from it, so hopefully I will be able to design better ships in the future.

#### Can I sell ships based on this blueprint?

No.

#### How much can I make from hauling safe zone asteroids?

It is not very lucrative, but here is an estimated breakdown of 45Mv asteroids (with a rough breakdown of 35Mv shell and 10Mv core) from the safe zone I got during testing.

| Material | Volume | Credits |
| --- | --- | --- |
| Ice/Vokarium | 45Mv | 36k |
| Ajatite/Charodium | 45Mv | 58k |
| Valkite/Bastium | 45Mv | 27k |
| Ice/Nhurgite | 45Mv | 56k |
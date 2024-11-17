export const planetComponents = {
    hGas: {
        title: 'Hydrogen & Helium Gas',
        icon:  "wind",
        paragraph: 'Hydrogen and helium do not condense in the nebula, resulting in their plentiful presence.',
        relativeAbundance: '98%',
    },
    hydrogenComp: {
        title: 'Hydrogen Compounds',
        icon:  "droplet",
        relativeAbundance: '1.4%', 
        condensation: '< 150 K',
        examples: 'Water (H<sub>2</sub>0), Methane (CH<sub>4</sub>), and Ammonia (NH<sub>3</sub>)',
    },
    rocks: {
        title: 'Rocks',
        icon:  "mound",
        relativeAbundance: '0.4%', 
        condensation: '500 - 1300 K',
        examples: 'Various minerals',
    },
    metal: {
        title: 'Metal',
        icon:  "mountain",
        relativeAbundance: '0.2%', 
        condensation: '1000 - 1600 K',
        examples: 'Iron, Nickel, and Aluminum',
    },
};

export const formationParts = {
    protosolarNebula: {
        title: 'Protosolar Nebula',
        icon: 'cloud',
        paragraph: 'A protosolar nebula is a collapsing gas cloud that spins very slowly around a horizontal axis. This horizontal spinning causes the height of the gas cloud to decrease, as it is easier for the gas to fall in the direction perpendicular to its rotation.',
    },
    momentum : {
        title: 'Conservation of Momentum',
        icon: 'rotate-right',
        paragraph: "During its collapse, the material within the protosolar nebula congregates in the center. The aggregation of material, alongside the nebula's decrease in size, permits the nebula to conserve angular momentum, which increases its rotation speed, and causes it to flatten more quickly.",
    },
    energyConversion: {
        title: 'Energy Conversion',
        icon: 'temperature-arrow-up',
        paragraph: "The potential energy in the protosolar nebula is converted into thermal energy, increasing the temperature at the center of the gas cloud. This extremely hot center is where the protostar, which will be the Sun, is formed.",
    }
}

export const coreFormation = {
    paragraph1: "The nebula's center has a very high temperature, which decreases as you move to the outskirts. This temperature distribution affects the formation of protoplanetary cores — specifically their size and composition — by limiting the amount and type of material available.",
    paragraph2: "The <strong>frost line</strong>, located between the orbits of Mars and Jupiter, designates the position within the nebula where elements besides hydrogen begin to condense. Thus, planets formed within the frost line are composed of rock and metal, whereas planets formed outside the frost line are composed of rock, metal, and ice.",
    paragraph3: "For a protoplanetary core to develop a gas envelope, it must have a mass between 10 and 100 Earth masses. Once the core reaches this mass range, its gravity attracts nearby hydrogen and helium gas. This increase in mass allows the protoplanetary core to attract even more gas.",
}

export const frostLine = {
    inside: {
        paragraph: "Due to the higher temperatures, planetary cores formed within the frost line are composed of rock and metal. Little rock and metal are available, affecting the planetary cores' size. Additionally, rock and metal have difficulty sticking together, which is another challenge for forming protoplanetary cores.",
        composition: "Rock & Metal",
        size: "< 2 Earth mass protoplanetary cores"
    },
    outside: {
        paragraph: "Planetary cores formed outside the frost line are composed of rock, metal, and ice. The large availability of ice—three times more ice than rock and metal — plays a vital role in the size of these cores. Ice sticks together better than rock and metal, affecting the protoplanetary core's size. ",
        composition: "Rock, Metal, & Ice",
        size: "> 2 Earth mass protoplanetary cores"
    },
}

export const overviewSteps = {
    one: {
        title: "Nebula contracts, heats up, and spins",
        number: '1'
    },
    two: {
        title: "Condensation of materials such as solid rock and ice particles",
        number: '2'
    },
    three: {
        title: "Rocky, icy planetesimals congregate",
        number: '3'
    },
    four: {
        title: "Remaining gas is blown away due to the sun finishing formation",
        number: '4'
    },
}

export const milkyWayStats = [
    "1 Sun",
    '8 Planets',
    '5 Dwarf Planets',
    '300 Known Moons',
    'Asteroids',
    'Comets',
    'Dust'
]
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
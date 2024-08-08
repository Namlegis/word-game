// Defines the distribution of tiles and their base values
const distribution = {
    A: { count: 9, baseValue: 1 },
    B: { count: 2, baseValue: 3 },
    C: { count: 2, baseValue: 3 },
    D: { count: 4, baseValue: 2 },
    E: { count: 12, baseValue: 1 },
    F: { count: 2, baseValue: 4 },
    G: { count: 3, baseValue: 2 },
    H: { count: 2, baseValue: 4 },
    I: { count: 9, baseValue: 1 },
    J: { count: 1, baseValue: 8 },
    K: { count: 1, baseValue: 5 },
    L: { count: 4, baseValue: 1 },
    M: { count: 2, baseValue: 3 },
    N: { count: 6, baseValue: 1 },
    O: { count: 8, baseValue: 1 },
    P: { count: 2, baseValue: 3 },
    QU: { count: 1, baseValue: 10 },
    R: { count: 6, baseValue: 1 },
    S: { count: 4, baseValue: 1 },
    T: { count: 6, baseValue: 1 },
    U: { count: 4, baseValue: 1 },
    V: { count: 2, baseValue: 4 },
    W: { count: 2, baseValue: 4 },
    X: { count: 1, baseValue: 8 },
    Y: { count: 2, baseValue: 4 },
    Z: { count: 1, baseValue: 10 },
};

// Creates a tiles array holding tile objects
const createTilesFromDistribution = () => {
    const tiles = [];

    for (const letter in distribution) {
        const { count, baseValue } = distribution[letter];
        for (let i = 0; i < count; i++) {
            tiles.push({
                letter,
                value: baseValue + Math.floor(Math.random() * 6),
                modifier: getRandomModifier(),
            });
        }
    }

    return tiles;
};

// Shuffles the tiles randomly using the Fisher-Yates algorithm
const shuffleTiles = (tiles) => {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    return tiles;
};

// Returns a random modifier based on custom probabilities
const getRandomModifier = () => {
    const randomValue = Math.random();
    if (randomValue < 0.1) {
        return "DL";
    } else if (randomValue < 0.15) {
        return "TL";
    } else if (randomValue < 0.2) {
        return "DW";
    } else {
        return null;
    }
};

const generateTileData = (gridSize) => {
    const totalTiles = gridSize * gridSize;
    const tiles = createTilesFromDistribution();
    const shuffledTiles = shuffleTiles(tiles);
    return shuffledTiles.slice(0, totalTiles);
};

const generateReplacementTiles = (numTiles) => {
    const tiles = createTilesFromDistribution();
    const shuffledTiles = shuffleTiles(tiles);
    return shuffledTiles.slice(0, numTiles);
};

export { generateTileData, generateReplacementTiles };

const generateTileData = (gridSize) => {
    const tileData = [];
    const totalTiles = gridSize * gridSize;
    
    // Define the distribution of tiles with base values
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
        Q: { count: 1, baseValue: 10 },
        R: { count: 6, baseValue: 1 },
        S: { count: 4, baseValue: 1 },
        T: { count: 6, baseValue: 1 },
        U: { count: 4, baseValue: 1 },
        V: { count: 2, baseValue: 4 },
        W: { count: 2, baseValue: 4 },
        X: { count: 1, baseValue: 8 },
        Y: { count: 2, baseValue: 4 },
        Z: { count: 1, baseValue: 10 }
    };
    
    // Flatten the distribution into an array of tiles
    const tiles = Object.entries(distribution).flatMap(([letter, { count, baseValue }]) =>
        Array(count).fill().map(() => ({
            letter,
            value: baseValue + Math.round( (Math.random() * 6 - 1)),
            modifier: getRandomModifier()
        }))
    );
    
    // Shuffle the tiles randomly
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    
    // Take the required number of tiles based on the grid size
    tileData.push(...tiles.slice(0, totalTiles));
    
    return tileData;
};

// Helper function to get a random modifier based on probabilities
const getRandomModifier = () => {
    const randomValue = Math.random();

    if (randomValue < 0.1) {
        return "double letter";
    } else if (randomValue < 0.15) {
        return "double word";
    } else {
        return null;
    }
};

export default generateTileData;
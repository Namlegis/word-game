import { useGameContext } from "../../GameContext.jsx";

export const tilePressLogic = () => {
    const {
        selectedTiles,
        setSelectedTiles,
        isFirstWord,
        setIsFirstWord,
        handleDelete,
        gridSize,
    } = useGameContext();

    const isAdjacentTile = (index) => {
        if (selectedTiles.length === 0) return true;

        const lastSelectedTile = selectedTiles[selectedTiles.length - 1];

        // Gets the row and column of last selected tile
        const lastRow = Math.floor(lastSelectedTile / gridSize);
        const lastCol = lastSelectedTile % gridSize;

        // Gets the row and column of tile trying to be selected
        const currentRow = Math.floor(index / gridSize);
        const currentCol = index % gridSize;

        // Returns true or false based on if it is adjacent, takes into account diagonals
        // Doesn't worry about same tile, that's handled below
        return (
            Math.abs(currentRow - lastRow) <= 1 &&
            Math.abs(currentCol - lastCol) <= 1
        );
    };

    const handleTilePress = (index) => {
        if (
            !selectedTiles.includes(index) &&
            (isAdjacentTile(index) || isFirstWord)
        ) {
            setSelectedTiles((prev) => [...prev, index]);
            if (isFirstWord) setIsFirstWord(false);
        }
        if (index === selectedTiles[selectedTiles.length - 1]) {
            handleDelete();
        }
    };

    return { handleTilePress };
};

// components/logic/tilePressLogic.jsx
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
        const lastRow = Math.floor(lastSelectedTile / gridSize);
        const lastCol = lastSelectedTile % gridSize;
        const currentRow = Math.floor(index / gridSize);
        const currentCol = index % gridSize;
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

// components/DeleteButton.js
import React from 'react';
import { Button } from 'react-native';
import { useGameContext } from '../../GameContext';

const DeleteButton = () => {
    const {
        selectedTiles,
        setSelectedTiles,
        setIsFirstWord,
    } = useGameContext();

    const handleDelete = () => {
        if (selectedTiles.length > 0) {
            setSelectedTiles(prev => prev.slice(0, -1));
            if (selectedTiles.length === 1) {
                setIsFirstWord(true);
            }
        }
    };

    return <Button title="Delete" onPress={handleDelete} />;
};

export default DeleteButton;
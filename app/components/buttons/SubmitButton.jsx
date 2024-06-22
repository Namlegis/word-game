// components/SubmitButton.js
import React from 'react';
import { Button } from 'react-native';
import { useGameContext } from '../../GameContext';
import axios from 'axios';

const SubmitButton = () => {
    const {
        currentWord,
        currentScore,
        setTotalScore,
        setSelectedTiles,
        setIsFirstWord,
        setIsWordInvalid
    } = useGameContext();

    const handleSubmit = async () => {
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`
            );
            if (response.data && response.data.length > 0) {
                setTotalScore(prev => prev + currentScore);
                setSelectedTiles([]);
                setIsFirstWord(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setIsWordInvalid(true);
                setTimeout(() => {
                    setIsWordInvalid(false);
                }, 1000);
            } else {
                console.error("Error:", error);
            }
        }
    };

    return <Button title="Submit" onPress={handleSubmit} />;
};

export default SubmitButton;
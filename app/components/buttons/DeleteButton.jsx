// components/DeleteButton.js
import React from "react";
import { Button } from "react-native";
import { useGameContext } from "../../GameContext";

const DeleteButton = () => {
    const { handleDelete } = useGameContext();

    return <Button title="Delete" onPress={handleDelete} />;
};

export default DeleteButton;

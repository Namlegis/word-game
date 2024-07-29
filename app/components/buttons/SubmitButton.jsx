// components/SubmitButton.js
import React from "react";
import { Button } from "react-native";
import submitLogic from "../logic/submitLogic.jsx";

const SubmitButton = () => {
    const { handleSubmit } = submitLogic();

    return <Button title="Submit" onPress={handleSubmit} />;
};

export default SubmitButton;
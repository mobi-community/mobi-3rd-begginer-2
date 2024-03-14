import React, { useState, useRef } from "react";
import Button from "./../components/common/button";

const Main = () => {
    const colorModeRef = useRef("redBtn");
    const colorTypeRef = useRef("base");
    const borderRadiusStyleRef = useRef("square");
    const shapeRef = useRef("thick");
    const sizeRef = useRef("medium");

    const [buttonProps, setButtonProps] = useState({
        colorMode: "redBtn",
        colorType: "base",
        borderRadiusStyle: "square",
        shape: "thick",
        size: "medium",
        state: "none",
    });

    const applyChanges = () => {
        setButtonProps({
            colorMode: colorModeRef.current,
            colorType: colorTypeRef.current,
            borderRadiusStyle: borderRadiusStyleRef.current,
            shape: shapeRef.current,
            size: sizeRef.current,
        });
    };

    return (
        <div>
            <select onChange={(e) => (colorModeRef.current = e.target.value)}>
                <option value="redBtn">Red</option>
                <option value="orangeBtn">Orange</option>
            </select>

            <select onChange={(e) => (colorTypeRef.current = e.target.value)}>
                <option value="light">Light</option>
                <option value="base">Base</option>
                <option value="weight">Weight</option>
            </select>

            <select
                onChange={(e) =>
                    (borderRadiusStyleRef.current = e.target.value)
                }
            >
                <option value="square">Square</option>
                <option value="oval">Oval</option>
                <option value="circle">Circle</option>
            </select>

            <select onChange={(e) => (shapeRef.current = e.target.value)}>
                <option value="thick">Thick</option>
                <option value="thin">Thin</option>
            </select>

            <select onChange={(e) => (sizeRef.current = e.target.value)}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button onClick={applyChanges}>Apply Changes</button>

            <Button {...buttonProps} text="Button Text" />
        </div>
    );
};

export default Main;

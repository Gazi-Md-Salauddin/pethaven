"use client";
import {Sun, Moon} from "@gravity-ui/icons";
import {Switch} from "@heroui/react";
import { useTheme } from "next-themes";

import React from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {({ isSelected }) => (
                    <>
                        <Switch.Control
                            className={`h-[31px] w-[51px] bg-orange-500 ${isSelected ? "bg-black" : ""}`}
                        >
                            <Switch.Thumb
                                className={`size-[27px] bg-white ${isSelected ? "ms-[22px]" : ""}`}
                            >
                                <Switch.Icon>
                                    {isSelected ? (
                                        <Moon className="size-4 text-orange-600" />
                                    ) : (
                                        <Sun className="size-4 text-yellow-600" />
                                    )}
                                </Switch.Icon>
                            </Switch.Thumb>
                        </Switch.Control>
                    </>
                )}
            </Switch>
        </div>
    );
};

export default ThemeToggle;

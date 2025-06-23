"use client";
import React from "react";
import { Button } from "./ui/moving-border";

interface movingBorder{
  text: string,
}

export function MovingBorderDemo({text} : movingBorder) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-black"
      >
        {text}
      </Button>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export const ClientComponent = () => {
  useEffect(() => {
    const rand = Math.random();
    if (rand < 0.5) {
      throw new Error("An error occurred");
    }
  }, []);

  return <div>Client Component</div>;
};

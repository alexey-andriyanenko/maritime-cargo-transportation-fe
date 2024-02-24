import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import { eventBus } from "src/event-bus";
export const Navigator = () => {
  const navigate = useNavigate();

  useEffect(() => {
    eventBus.on("login", () => {});
  }, []);

  return null;
};

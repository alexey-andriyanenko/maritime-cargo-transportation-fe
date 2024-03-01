import { useEffect } from "react";
import { useNavigate } from "react-router";

import { eventBus } from "src/event-bus";
import { CoreRoutes } from "../index";
import { AuthRoutes } from "src/auth-module";

export const Navigator = () => {
  const navigate = useNavigate();

  useEffect(() => {
    eventBus.on("session-fulfilled", () => {
      navigate(CoreRoutes.home);
    });

    eventBus.on("logout", () => {
      navigate(AuthRoutes.login);
    });
  }, []);

  return null;
};

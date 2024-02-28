import mitt from "mitt";

export type TEvents = {
  logout: undefined;
  "session-fulfilled": undefined;
};

export const eventBus = mitt<TEvents>();

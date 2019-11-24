import { userActionsType } from "./userTypes";

export const setCurrentUser = user => ({
  type: userActionsType.SET_CURRENT_USER,
  payload: user
});

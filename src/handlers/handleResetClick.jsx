import { STATUS, PLAYER } from "../constants";
import { createEmptyField } from "../utils";

export const handleResetClick = (setStatus, setCurrentPlayer, setField) => {
  setStatus(STATUS.TURN);
  setCurrentPlayer(PLAYER.CROSS);
  setField(createEmptyField());
};

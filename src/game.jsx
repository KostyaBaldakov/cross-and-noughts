import { GameLayout } from "./game-layout";
import { STATUS, PLAYER } from "./constants";
import { useState } from "react";
import { handleCellClick, handleResetClick } from "./handlers";

export const Game = () => {
  const [status, setStatus] = useState(STATUS.TURN);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
  const [field, setField] = useState(new Array(9).fill(PLAYER.NOBODY));

  return (
    <GameLayout
      status={status}
      currentPlayer={currentPlayer}
      field={field}
      handleCellClick={(cellIndex) =>
        handleCellClick(
          status,
          field,
          setField,
          setStatus,
          currentPlayer,
          setCurrentPlayer,
          cellIndex
        )
      }
      handleResetClick={() =>
        handleResetClick(setStatus, setCurrentPlayer, setField)
      }
    />
  );
};

import { useDispatch } from "react-redux";
import { GameLayout } from "./game-layout";
import { RESTART_GAME } from "./actions";

export const Game = () => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(RESTART_GAME());
  };

  return <GameLayout handleResetClick={handleResetClick} />;
};

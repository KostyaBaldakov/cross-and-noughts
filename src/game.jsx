import { GameLayout } from "./game-layout";
import { RESTART_GAME } from "./actions";
import { useDispatch } from "./redux.manager";

export const Game = () => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(RESTART_GAME());
  };

  return <GameLayout handleResetClick={handleResetClick} />;
};

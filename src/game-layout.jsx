import { Information, Field } from "./components";
import styles from "./game.module.css";
import PropTypes from "prop-types";
import { STATUS, PLAYER } from "./constants";

export const GameLayout = ({
  status,
  currentPlayer,
  field,
  handleCellClick,
  handleResetClick,
}) => {
  return (
    <div className={styles.game}>
      <Information status={status} currentPlayer={currentPlayer} />
      <Field field={field} handleCellClick={handleCellClick} />
      <button className={styles.restartButton} onClick={handleResetClick}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.propTypes = {
  status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
  currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
  field: PropTypes.arrayOf(
    PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
  ),
  handleCellClick: PropTypes.func,
  handleResetClick: PropTypes.func,
};

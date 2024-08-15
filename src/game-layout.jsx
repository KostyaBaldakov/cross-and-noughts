import { Information, Field } from "./components";
import styles from "./game.module.css";
import PropTypes from "prop-types";

export const GameLayout = ({ handleResetClick }) => {
  return (
    <div className={styles.game}>
      <Information />
      <Field />
      <button className={styles.restartButton} onClick={handleResetClick}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.propTypes = {
  handleResetClick: PropTypes.func,
};

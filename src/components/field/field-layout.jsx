import { PLAYER, PLAYER_SIGN } from "../../constants";
import styles from "./field.module.css";
import PropTypes from "prop-types";

export const FiledLayout = ({ field, handleCellClick }) => {
  return (
    <div className={styles.field}>
      {field.map((cellPlayer, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => handleCellClick(index)}
        >
          {PLAYER_SIGN[cellPlayer]}
        </button>
      ))}
    </div>
  );
};

FiledLayout.propTypes = {
  field: PropTypes.arrayOf(
    PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
  ),
  handleCellClick: PropTypes.func,
};

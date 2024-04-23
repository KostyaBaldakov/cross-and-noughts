import { FiledLayout } from "./field-layout";
import PropTypes from "prop-types";
import { PLAYER } from "../../constants";

export const Field = ({ field, handleCellClick }) => {
  return <FiledLayout field={field} handleCellClick={handleCellClick} />;
};

Field.propTypes = {
  field: PropTypes.arrayOf(
    PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
  ),
  handleCellClick: PropTypes.func,
};

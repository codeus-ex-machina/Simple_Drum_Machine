import PropTypes from "prop-types";

export default function DrumPad(props) {
  return (
    <div className="drum-pad" id={props.soundType}>
      {props.keyboardKey}
    </div>
  );
}

DrumPad.propTypes = {
  soundType: PropTypes.string,
  keyboardKey: PropTypes.string,
};
DrumPad.defaultProps = {
  soundType: "unspecified",
  keyboardKey: "click me!",
};

import PropTypes from "prop-types";

export default function DrumPad(props) {
  return (
    <div
      className="drum-pad"
      id={props.soundType}
      onClick={() => document.getElementById(props.keyboardKey).play()}
    >
      {props.keyboardKey}
      <audio
        classname="clip"
        id={props.keyboardKey}
        src={props.audioSource}
      ></audio>
    </div>
  );
}

DrumPad.propTypes = {
  soundType: PropTypes.string,
  keyboardKey: PropTypes.string,
  audioSource: PropTypes.string.isRequired,
};

DrumPad.defaultProps = {
  soundType: "unspecified",
  keyboardKey: "click me!",
};

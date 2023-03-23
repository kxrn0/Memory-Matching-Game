import SCFlipper from "./Flipper.styled";

export default function Flipper({ flipped, front, back }) {
  return (
    <SCFlipper className={`${flipped ? "flipped" : ""}`}>
      <div className="content">
        <div className="front">{front}</div>
        <div className="back">{back}</div>
      </div>
    </SCFlipper>
  );
}

import SCPad from "./Pad.stlyed";

export default function Pad({ label, value, turn }) {
  return (
    <SCPad className={turn ? "turn" : ""}>
      <span className="body">{label}</span>
      <h3 className="h2">{value}</h3>
      <p className="label">CURRENT TURN</p>
    </SCPad>
  );
}

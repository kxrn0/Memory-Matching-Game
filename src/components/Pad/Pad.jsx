import SCPad from "./Pad.stlyed";

export default function Pad({ label, value }) {
  return (
    <SCPad>
      <span className="label">{label}</span>
      <h3 className="value">{value}</h3>
    </SCPad>
  );
}

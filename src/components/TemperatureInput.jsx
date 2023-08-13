const scaleNames = {
  c: "Celsius",
  f: "Fahrenhight",
};

export default function TemperatureInput({
  // eslint-disable-next-line react/prop-types
  temperature,
  // eslint-disable-next-line react/prop-types
  scale,

  // eslint-disable-next-line react/prop-types
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        type="text"
        onChange={(e) => onTemperatureChange(e, scale)}
        defaultValue={temperature}
      />
    </fieldset>
  );
}

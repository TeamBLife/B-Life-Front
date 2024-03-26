import RadioContext from "context/RadioContext";

export default function RadioGroup({ label, children, ...rest }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div className="[&>*]:p-2">
        <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
      </div>
    </fieldset>
  );
}

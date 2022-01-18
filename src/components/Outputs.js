import "./styles.css";
import { useSelector } from "react-redux";

const Outputs = () => {
  const counter = useSelector((x) => x.counterReducer);
  const script = useSelector((x) => x.scriptReducer);

  return (
    <div className="outputs">
      {script.show && <h1>Outputs</h1>}
      {script.show && <h2>Counter: {counter}</h2>}
      {script.show && <h2>Text: {script.txt}</h2>}
      {script.show && (
        <h2>
          CheckBox:{" "}
          {script.check.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </h2>
      )}
    </div>
  );
};

export default Outputs;

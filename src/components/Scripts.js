import { useState, useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";

const Scripts = () => {
  const [script, setScript] = useState("");
  const [check, setCheck] = useState([]);
  const [show, setShow] = useState(false);

  const scriptHandler = (e) => {
    setScript(e.target.value);
  };

  const checkHandler = (e) => {
    if (check.includes(e.target.value)) {
      setCheck(check.filter((x) => x !== e.target.value));
    } else {
      setCheck([...check, e.target.value]);
    }
  };

  const showHandler = (e) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "script",
      value: { txt: script, check: check, show: show },
    });
  }, [check, show, script, dispatch]);

  return (
    <div className="Scripts">
      <input type="text" onChange={scriptHandler} />
      <div>
        <input
          type="checkbox"
          name="checkBox"
          id="A"
          value="A"
          checked={check.includes("A")}
          onChange={checkHandler}
        />
        <label htmlFor="A">A</label>
        <input
          type="checkbox"
          name="checkBox"
          id="B"
          value="B"
          checked={check.includes("B")}
          onChange={checkHandler}
        />
        <label htmlFor="B">B</label>
        <input
          type="checkbox"
          name="checkBox"
          id="C"
          value="C"
          checked={check.includes("C")}
          onChange={checkHandler}
        />
        <label htmlFor="C">C</label>
        <input
          type="checkbox"
          name="checkBox"
          id="show"
          value="show"
          checked={show}
          onChange={showHandler}
        />
        <label htmlFor="show">show</label>
      </div>
      <h2>
        {"==> "}
        {script}
      </h2>
    </div>
  );
};

export default Scripts;

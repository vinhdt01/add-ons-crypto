import { useState } from "react";
import CryptoList from "./CryptoList";
function WidgetBtn() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Click</button>
      <CryptoList show={show} />
    </div>
  );
}

export default WidgetBtn;

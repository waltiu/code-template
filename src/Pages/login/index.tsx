import { useState } from "react";
const Login = () => {
  const [state, setState] = useState(1);
  return (
    <div>
      <div
        onClick={() => {
          setState(state + 1);
        }}
      >
        {state}
      </div>
    </div>
  );
};

export default Login;

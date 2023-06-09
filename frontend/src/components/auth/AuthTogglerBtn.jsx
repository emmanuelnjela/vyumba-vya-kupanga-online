import { Link } from "react-router-dom";
import TogglerBtn from "../common/togglerBtn";

function AuthTogglerBtn() {
  return (
    <Link to={"/"} className="auth__toggler-btn">
      <TogglerBtn position={"left"} />
    </Link>
  );
}

export default AuthTogglerBtn;

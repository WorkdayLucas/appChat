import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentToken, selectCurrentUser } from "../../features/auth/authSlice";
import './Main.css'
import Room from "./room/Room";
import Side from "./side/Side";


function Main() {

    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)


    const content = (
        <div className="MainContainer">
            <Side/>
            <Room/>
        </div>
    )

  return content
}

export default Main
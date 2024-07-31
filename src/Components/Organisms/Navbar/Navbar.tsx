import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser,faGear } from "@fortawesome/free-solid-svg-icons";
import {  Tooltip  } from 'antd';
export default function Navbar(){   
    return(
        <div className="flex justify-end"> 
       <Tooltip  title={"notification"} className="me-10" style={{cursor:"pointer"}}>
            <FontAwesomeIcon icon={faBell} />
       </Tooltip>
       <Tooltip title={"setting"} className="me-10" style={{cursor:"pointer"}}>
            <FontAwesomeIcon icon={faGear} />
       </Tooltip>
       <Tooltip title={"profile"} className="me-10" style={{cursor:"pointer"}}>
            <FontAwesomeIcon icon={faUser} />
       </Tooltip>
        </div>
    )
}
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

export default function NavBar () {
    return (<>
                <div className="navbar">
                    <Button style={{color:"#581845"}}> About </Button>
                    <Link to='closet'>
                        <Button style={{color:"#581845"}}> Closet </Button>
                    </Link>
                    <Button style={{color:"#581845"}}> Login </Button>
                    <Button style={{color:"#581845"}}> Sign-Up </Button>
                    <AccountCircleIcon style={{alignSelf:"center", paddingLeft:'5px'}}/>
                </div>
            </>);
}
import React from "react";
import upImg from '../../img/up.svg'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center font-italic">
                    <img src={upImg} height="65" width="65"/> Star News
                </h1>
                < div className="container">
                    < div className="row">
                        < div className="col-7">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;



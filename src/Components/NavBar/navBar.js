import React from 'react';
import {NavLink} from "react-router-dom";
import $ from 'jquery';




class Navbar extends React.Component {


    handleClick = (e) => {
        super.handleStateChange({dataCategory: $(e.target).data('category')});
    };

    render () {
        return (
            <nav>
                <div className="nav nav-tabs nav-news" role="tablist">
                    <NavLink to="/" exact={true} className="nav-item nav-link active" data-category="sports" data-toggle="tab"
                             role="tab"
                             aria-selected="true" onClick={this.handleClick}>Спорт</NavLink>
                    <NavLink to="/entertainment" className="nav-item nav-link" data-category="entertainment" data-toggle="tab"
                             role="tab" aria-selected="false">Развлечения</NavLink>
                    <NavLink to="/health" className="nav-item nav-link" data-category="health" data-toggle="tab" role="tab"
                             aria-selected="false">Здоровье</NavLink>
                    <NavLink to="/science" className="nav-item nav-link" data-category="science" data-toggle="tab" role="tab"
                             aria-selected="false">Наука</NavLink>
                    <NavLink to="/technology" className="nav-item nav-link" data-category="technology" data-toggle="tab" role="tab"
                             aria-selected="false">Технологии</NavLink>

                </div>
            </nav>
        )

    }

}

export default Navbar;
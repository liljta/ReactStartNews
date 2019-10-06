import React, {Fragment} from "react";

class NewsItem extends React.Component {

    componentDidMount() {
        document.title = this.props.PageTitle;
    }

    componentDidUpdate() {
        document.title = this.props.PageTitle;
    }

    render() {
        const image = this.props.image;
        return (
            <Fragment>
                <div className="card">
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NewsItem
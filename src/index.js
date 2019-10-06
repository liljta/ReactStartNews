import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import APIService from './ApiClient/api';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';






//Components
import Header from "./Components/Header/header";
import Navbar from './Components/NavBar/navBar';
import NewsList from "./Components/NewsList/newsList";
import NotFound from "./Components/Errors/NotFound";



class App extends React.Component {

    constructor () {
        super();
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    apiService = new APIService();

    state = {
        NewsList: [],
        Country: 'ua',
        dataCategory: 'sport'
    };

    handleStateChange = (category) => {
        this.setState({dataCategory: category})
    };

    componentDidMount() {
        this.apiService.getNews(this.state.Country, this.state.dataCategory)
            .then(({articles}) => {
                this.setState({
                    NewsList: articles
                });
            })
            .catch(err => console.log(err));
    }



    render() {
        const List = this.state.NewsList;
        return (
            <Fragment>
                <Router>
                    <header>
                        <div className="container-fluid">
                            <div className="container">
                                <Header/>
                                <Navbar/>
                            </div>
                        </div>
                    </header>

                   <Switch>

                        <Route path="/" exact
                               render={() => <NewsList List={List} Title="Спорт" data-category="0"/>}/>
                        <Route path="/entertainment" exact
                               render={() => <NewsList List={List} Title="Развлечения" data-category="1"/>}/>
                        <Route path="/science" exact
                               render={() => <NewsList List={List} Title="Наука" data-category="2"/>}/>
                        <Route path="/health" exact
                               render={() => <NewsList List={List} Title="Здоровье" data-category="3"/>}/>
                        <Route path="/technology" exact
                               render={() => <NewsList List={List} Title="Технологии" data-category="4"/>}/>


                    </Switch>
                </Router>

            </Fragment>


        );
    }
}








ReactDom.render(<App/>, document.getElementById('root'));
import React from "react";
import NewsItem from "../NewsItem/newsItem";

const NewsList = ({List, Title}) => {
    let counter = 0;
    const newItem = List.map((item) => {
        counter++;
        return <NewsItem key={counter} title={item.title} description={item.description} image={item.urlToImage}
                         PageTitle={Title}/>;
    });
    return (
        <main>
            <div className="container mainBody card-columns">{newItem}</div>
        </main>
    );
};

export default NewsList;

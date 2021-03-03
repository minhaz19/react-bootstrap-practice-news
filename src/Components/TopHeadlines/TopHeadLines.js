import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLines = () => {
    const [news , setNews] = useState([]);
    useEffect(() =>{
        const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=3d265edcb19e46c998fe32046d01e8bd';

        fetch(url)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    } ,[])
    return (
        <div>
            <h5>News Length: {news.length}</h5>
            {
                news.map(info => <News news={info}></News>)
            }
        </div>
    );
};

export default TopHeadLines;
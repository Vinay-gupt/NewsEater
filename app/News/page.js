'use client'

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from '../NewsItem/page';
import Spinner from '../Spinner/page';


const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)






    const updatePage = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7e196d27a1342b1bf6c1b6747f81543&page=${page}&pageSize=${props.pagesize}`
        setloading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)



    }

    useEffect(() => {
     document.title = `${props.category}- NewsMonkey`;

        updatePage();
    }, [])





    // handleNext = async () => {

    //     .setState({ page: state.page + 1 });
    //     updatePage()

    // }


    // handlePrev = async () => {

    //     setState({ page:state.page - 1 });
    //     updatePage();

    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7e196d27a1342b1bf6c1b6747f81543&page=${page+1}&pageSize=${props.pagesize}`
        setpage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    };


    // handleNext=async()=>{
    //     if(!(state.page+1 > Math.ceil(state.totalResults/props.pagesize))){
    //let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7e196d27a1342b1bf6c1b6747f81543&page=$state.page+1}&pageSize=${props.pagesize}`
    //         setState({loading: true});
    //         let data= await fetch(url)
    //         let parsedData= await data.json()
    //         setState({
    //         page:page+1,
    //         articles:parsedData.articles,
    //         loading: false
    //     })
    //   }
    // }



    // handlePrev=async()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7e196d27a1342b1bf6c1b6747f81543&page=${state.page-1}&pageSize=${props.pagesize}`
    //     setState({loading: true});
    //     let data= await fetch(url)
    //     let parsedData= await data.json()
    //     setState({
    //         page:page-1,
    //         articles:parsedData.articles,
    //         loading: false
    //     })


    // }

    return (
        <>
    
            <h1 className='text-center' style={{ margin: '35px 0px', marginTop:'80px' }}>NewsMonkey-Top {props.category} Headlines </h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">



                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                
                                <NewsItem Title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>


    )

}

News.defaultProps = {
    country: 'us',
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}


export default News
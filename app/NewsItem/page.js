import React from 'react'

const NewsItem =(props)=> {
   
        let { Title, description, imgUrl, newsUrl, author, date,source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imgUrl ? "https://gumlet.assettype.com/greaterkashmir%2F2022-09%2F005e2fd3-b2b7-452c-94e9-cfc2a1dbc6ff%2FIMG_20220922_210804.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Title}...</h5>
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"92%", zIndex:'1'}}>
                            {source}
                        </span>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
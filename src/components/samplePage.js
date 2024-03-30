import React from 'react';


const SamplePage = ({ data }) => {
    return (
        <article className='main-container'>
            <div className="product-heading">
                <h3>{data}</h3>
                <div className="search-option">
                    <i className="fa fa-search" style={{ fontSize: "20px" }}></i>
                    <input type="text" id="searchInput" placeholder="Search for brand..."
                    />
                    <i className="fa fa-commenting-o" style={{ fontSize: "20px" }}></i>
                    <i className="fa fa-cog" style={{ fontSize: "20px" }}></i>
                </div>
            </div>
            <div className="noData">
                <p>NO DATA AVAILABLE</p>
            </div>
        </article>
    )
}

export default SamplePage

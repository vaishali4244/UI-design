import React, { useState } from 'react';
import './products.css';

const Products = () => {
    const [search, setSearch] = useState("");
    const [hide, setHide] = useState(true);

    const data = [
        { id: 1, brand: "Wix", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face3.webp", "face4.avif"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes ", bg: "red", ctBg: "green" },
        { id: 2, brand: "Shopify", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face3.webp", "face5.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "tomorrow", bg: "blue", ctBg: "blue" },
        { id: 3, brand: "MailChimp", description: "Lorem ipsum dolor sit amet.", members: ["face6.avif", "face5.avif", "face2.jpg", "face4.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "in 6 Hours", bg: "green", ctBg: "blue" },
        { id: 4, brand: "Paypal", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face6.avif"], categories: "Saas", tags: ["#digital"], nextMeeting: "no contact", bg: "grey", ctBg: "red" },
        { id: 5, brand: "Disney", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face5.avif", "face3.webp"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes", bg: "red", ctBg: "green" },
        { id: 1, brand: "Intercom", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face3.webp", "face4.avif"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes", bg: "red", ctBg: "green" },
        { id: 2, brand: "Google", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face3.webp", "face5.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "tomorrow", bg: "blue", ctBg: "blue" },
        { id: 3, brand: "Evernote", description: "Lorem ipsum dolor sit amet.", members: ["face6.avif", "face5.avif", "face2.jpg", "face4.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "in 6 Hours", bg: "green", ctBg: "blue" },
        { id: 4, brand: "Microsoft", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face6.avif"], categories: "Saas", tags: ["#digital"], nextMeeting: "no contact", bg: "grey", ctBg: "red" },
        { id: 5, brand: "Invision", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face5.avif", "face3.webp"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes", bg: "red", ctBg: "green" },

    ];


    const searchFunc = (event) => {
        setSearch(event.target.value);
    };

    let filteredData = data;

    if (search) {
        filteredData = data.filter(item =>
            item.brand.toLowerCase().includes(search.toLowerCase())
        );
    }

    const hideFunc = () => {
        setHide(!hide);
    };

    return (
        <article>
            <section className="table-content">
                <div className="product-heading">
                    <h3>Products</h3>
                    <div className="search-option">
                        <i className="fa fa-search" style={{ fontSize: "20px" }}></i>
                        <input type="text" id="searchInput" placeholder="Search for brand..."
                            value={search}
                            onChange={searchFunc}
                        />
                        <i className="fa fa-commenting-o" style={{ fontSize: "20px" }}></i>
                        <i className="fa fa-cog" style={{ fontSize: "20px" }}></i>
                    </div>
                </div>
                <div className="product-filter">
                    <div className="start">
                        <button className="filter-btn"> <i className='fa fa-file-picture-o' style={{ fontSize: "20px" }}></i>All brands
                            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
                        </button>
                        <button className="filter-btn">Desk
                            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
                        </button>
                        <button className="filter-btn">Tags
                            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
                        </button>
                        <button className="filter-btn">
                            <i className='fa fa-building-o' style={{ fontSize: "20px" }}></i>
                            Sort</button>
                        <button className="filter-btn">
                            <i className='fa fa-bar-chart' style={{ fontSize: "20px" }}></i>
                            Filter</button>
                    </div>

                    <div className="end">
                        <button className="filter-btn"> <i className='fa fa-share-alt' style={{ fontSize: "20px" }}></i>Meeting</button>
                        <button className="filter-btn"> <i className='fa fa-black-tie' style={{ fontSize: "20px" }}></i>Import/Export</button>
                    </div>

                </div>

                <table className="product-table">
                    <thead>
                        <tr>
                            <th className="brand-name">
                                <span>
                                    <input
                                        type="checkbox" /> Brand
                                </span>
                                <i className='fa fa-plus-square-o ' style={{ fontSize: "20px", color: "grey" }}></i>
                            </th>
                            <th>Description</th>
                            <th>Members</th>
                            <th>Categories</th>
                            <th>Tags</th>
                            <th>Next Meeting</th>
                            <th>
                                <i className='fa fa-plus' style={{ fontSize: "20px" }}></i>
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td className='brand-center'><input type="checkbox" />{item.brand}</td>
                                <td>{item.description}</td>
                                <td>
                                    {item.members.map((member, i) => (
                                        <img key={i} src={require(`../assets/images/${member}`)} alt="face" />
                                    ))}
                                </td>
                                <td ><span className={item.ctBg}>{item.categories}</span></td>
                                <td>{item.tags.map((tag, i) => <span key={i}>{tag}</span>)}</td>
                                <td ><span className={item.bg}>{item.nextMeeting}</span></td>
                                <td></td>
                            </tr>

                        ))}
                        <tr className='table-counts'>
                            <td className=''>10 count</td>
                            <td>
                                <i className='fa fa-plus-square-o ' style={{ fontSize: "20px", color: "grey" }}></i>
                                Add calculation</td>
                            <td>
                                <i className='fa fa-plus-square-o ' style={{ fontSize: "20px", color: "grey" }}></i>
                                Add calculation</td>
                            <td>
                                <i className='fa fa-plus-square-o ' style={{ fontSize: "20px", color: "grey" }}></i>
                                Add calculation</td>
                            <td>
                                <i className='fa fa-plus-square-o ' style={{ fontSize: "20px", color: "grey" }}></i>
                                Add calculation</td>
                            <td></td>
                        </tr>
                    </tbody>

                </table>

                {hide && (

                    <div className="table-options" >
                        <p>
                            <i className='fa fa-check-square' style={{ fontSize: "20px" }}></i>
                            Selected
                        </p>
                        <p>
                            <i className='fa fa-file-text-o' style={{ fontSize: "20px" }}></i>
                            Archieve
                        </p>
                        <p
                            style={{ color: " rgb(226, 88, 88)", border: "1px solid rgb(226, 88, 88)" }}
                        >
                            <i className='fa fa-trash' style={{ fontSize: "20px" }}></i>
                            Delete
                        </p>
                        <p>
                            More
                            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
                        </p>
                        <i className='fa fa-times cross' style={{ fontSize: "20px" }} onClick={hideFunc}></i>
                    </div>
                )}
            </section>

        </article>
    )
}

export default Products;

import React, { useState } from 'react';
import './products.css';

const Products = () => {
    const [search, setSearch] = useState("")
    const searchFunc = (event) => {
        setSearch(event.target.value);
    };

   
    const data = [
        { id: 1, brand: "Wix", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face3.webp", "face4.avif"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes ", red:"red" },
        { id: 2, brand: "Shopify", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face3.webp", "face5.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "Tomorrow" },
        { id: 3, brand: "MailChimp", description: "Lorem ipsum dolor sit amet.", members: ["face6.avif", "face5.avif", "face2.jpg", "face4.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "in 6 Hours" },
        { id: 4, brand: "Paypal", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face6.avif"], categories: "Saas", tags: ["#digital"], nextMeeting: "No contact" },
        { id: 5, brand: "Disney", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face5.avif", "face3.webp"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes", red:"red" },
        { id: 1, brand: "Intercom", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face3.webp", "face4.avif"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes" , red:"red"},
        { id: 2, brand: "Google", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face3.webp", "face5.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "Tomorrow" },
        { id: 3, brand: "Evernote", description: "Lorem ipsum dolor sit amet.", members: ["face6.avif", "face5.avif", "face2.jpg", "face4.avif"], categories: "Finance", tags: ["#digital"], nextMeeting: "in 6 Hours" },
        { id: 4, brand: "Microsoft", description: "Lorem ipsum dolor sit amet.", members: ["face1.jpg", "face2.jpg", "face6.avif"], categories: "Saas", tags: ["#digital"], nextMeeting: "No contact" },
        { id: 5, brand: "Invision", description: "Lorem ipsum dolor sit amet.", members: ["face4.avif", "face1.jpg", "face2.jpg", "face5.avif", "face3.webp"], categories: "Automation", tags: ["#digital"], nextMeeting: "in 30 minutes" , red:"red"},
       
    ];


    let filteredData = data;

    if (search) {
        filteredData = data.filter(item =>
            item.brand.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <>
            <article className="table-content">
                <div className="product-heading">
                    <h3>Products</h3>
                    <div className="search-option">
                        <i className="fa fa-search" style={{ fontSize: "24px" }}></i>
                        <input type="text" id="searchInput" placeholder="Search for brand..."
                            value={search}
                            onChange={searchFunc}
                        />
                        <i className="fa fa-commenting-o" style={{ fontSize: "24px" }}></i>
                        <i className="fa fa-cog" style={{ fontSize: "24px" }}></i>
                    </div>
                </div>
                <div className="product-filter">
                    <div className="start">
                        <button className="filter-btn"> <i className='fa fa-file-picture-o' style={{ fontSize: "24px" }}></i>All brands
                            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
                        </button>
                        <button className="filter-btn">Desk
                            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
                        </button>
                        <button className="filter-btn">Tags
                            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
                        </button>
                        <button className="filter-btn">
                            <i className='fa fa-building-o' style={{ fontSize: "24px" }}></i>
                            Sort</button>
                        <button className="filter-btn">
                            <i className='fa fa-bar-chart' style={{ fontSize: "24px" }}></i>
                            Filter</button>
                    </div>
                    <div className="end">

                        <button className="filter-btn"> <i className='fa fa-share-alt' style={{ fontSize: "24px" }}></i>Meeting</button>
                        <button className="filter-btn"> <i className='fa fa-black-tie' style={{ fontSize: "24px" }}></i>Import/Export</button>
                    </div>
                </div>
                <table className="product-table">
                    <thead>
                        <tr>
                            <th className="brand-name"><input

                                type="checkbox" /> Brand <i className='fa fa-plus-square-o' style={{ fontSize: "24px" }}></i></th>
                            <th>Description</th>
                            <th>Members</th>
                            <th>Categories</th>
                            <th>Tags</th>
                            <th>Next Meeting</th>
                            <th><i className='fa fa-plus' style={{ fontSize: "20px" }}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {filteredData.map((item, index) => ( */}
                             {filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.brand}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        {item.members.map((member, i) => (
                                            <img key={i} src={require(`../assets/images/${member}`)} alt="face" />
                                        ))}
                                    </td>
                                    <td className={item.categories.toLowerCase()}>{item.categories}</td>
                                    <td>{item.tags.map((tag, i) => <span key={i}>{tag}</span>)}</td>
                                    <td className={()=>{item.nextMeeting.toLowerCase()}}>{item.nextMeeting}</td>
                                    <td></td>
                                </tr>
                            // ))}
                            // <>
                            //     <tr key={index}>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Wix</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face1.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face3.webp")} alt="face" />
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //         </td>
                            //         <td className='green'>Automation</td>
                            //         <td><span>#digital</span></td>
                            //         <td className='red'>in 30 minutes</td>
                            //     </tr>
                            //     <tr key={index}>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Shopify</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //             <img src={require("../assets/images/face1.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face3.webp")} alt="face" />
                            //             <img src={require("../assets/images/face5.avif")} alt="face" />
                            //         </td>
                            //         <td className='blue'>Finance</td>
                            //         <td><span>#digital</span></td>
                            //         <td>Tomorrow</td>
                            //     </tr>
                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />MailChimp</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face6.avif")} alt="face" />
                            //             <img src={require("../assets/images/face5.avif")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //         </td>
                            //         <td className='red'>Finance</td>
                            //         <td><span>#digital</span></td>
                            //         <td>in 6 Hours</td>
                            //     </tr>
                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Paypal</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face1.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face6.avif")} alt="face" />
                            //         </td>
                            //         <td className='green'>Saas</td>
                            //         <td><span>#digital</span></td>
                            //         <td className='grey'>No contact</td>
                            //     </tr>
                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Disney</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //             <img src={require("../assets/images/face1.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face5.avif")} alt="face" />
                            //             <img src={require("../assets/images/face3.webp")} alt="face" />
                            //         </td>
                            //         <td className='blue'>Automation</td>
                            //         <td><span>#digital</span></td>
                            //         <td className='red'>in 30 minutes</td>
                            //     </tr>

                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Wix</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face3.webp")} alt="face" />
                            //             <img src={require("../assets/images/face1.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //         </td>
                            //         <td className='red'>B2B</td>
                            //         <td><span>#digital</span></td>
                            //         <td className='red'>in 30 minutes</td>
                            //     </tr>
                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Shopify</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face7.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face6.avif")} alt="face" />
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //         </td>
                            //         <td className='green'>Automation</td>
                            //         <td><span>#digital</span></td>
                            //         <td>Tomorrow</td>
                            //     </tr>
                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />MailChimp</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //             <img src={require("../assets/images/face5.avif")} alt="face" />
                            //             <img src={require("../assets/images/face1.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face3.webp")} alt="face" />
                            //         </td>
                            //         <td className='red'>Automation</td>
                            //         <td><span>#digital</span></td>
                            //         <td>in 6 Hours</td>
                            //     </tr>
                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Paypal</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face7.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face3.webp")} alt="face" />
                            //             <img src={require("../assets/images/face4.avif")} alt="face" />
                            //         </td>
                            //         <td className='blue'>Saas</td>
                            //         <td><span>#digital</span></td>
                            //         <td className='grey'>No contact</td>
                            //     </tr>
                            //     <tr>
                            //         <td><input type="checkbox" data-brand="Brand 1" />Disney</td>
                            //         <td>Lorem ipsum dolor sit amet.</td>
                            //         <td>
                            //             <img src={require("../assets/images/face6.avif")} alt="face" />
                            //             <img src={require("../assets/images/face1.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face2.jpg")} alt="face" />
                            //             <img src={require("../assets/images/face3.webp")} alt="face" />
                            //             <img src={require("../assets/images/face5.avif")} alt="face" />
                            //         </td>
                            //         <td className='green'>Automation</td>
                            //         <td><span>#digital</span></td>
                            //         <td className='red'>in 30 minutes</td>
                            //     </tr>
                            //     <tr className="table-counts">
                            //         <td>10 counts</td>
                            //         <td>+ Add calculation</td>
                            //         <td>+ Add calculation</td>
                            //         <td>+ Add calculation</td>
                            //         <td>+ Add calculation</td>
                            //     </tr>

                            // </>
                        ))}
                    </tbody>
                </table>
                <div className="table-options">
                    <p>Selected</p>
                    <p>Archieve</p>
                    <p>Delete</p>
                    <p>More</p>
                </div>
            </article>
        </>
    )
}

export default Products;

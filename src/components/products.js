import React from 'react';
import './products.css';

const Products = () => {
    return (
        <>
            <article className="table-content">
                <div className="product-heading">
                    <h3>Products</h3>
                    <div className="search-option">
                        <i className="fa fa-search" style={{ fontSize: "24px" }}></i>
                        <input type="text" id="searchInput" placeholder="Search for brand..." />
                        <i className="fa fa-commenting-o" style={{ fontSize: "24px" }}></i>
                        <i className="fa fa-cog" style={{ fontSize: "24px" }}></i>
                    </div>
                    {/* <div id="searchResult"></div> */}
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
                <table id="product-table">
                    <thead>
                        <tr>
                            <th className="brand-name"><input type="checkbox" /> Brand <i className='fa fa-plus-square-o' style={{ fontSize: "24px" }}></i></th>
                            <th>Description</th>
                            <th>Members</th>
                            <th>Categories</th>
                            <th>Tags</th>
                            <th>Next Meeting</th>
                            <th><i className='fa fa-plus' style={{ fontSize: "20px"}}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />Wix</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>in 30 minutes</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />Shopify</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>Tomorrow</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />MailChimp</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>in 6 Hours</td>
                        </tr>
                        <tr>
                            <td><input className="checkbox" type="checkbox" data-brand="Brand 1" />Paypal</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>No contact</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />Disney</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>in 30 minutes</td>
                        </tr>

                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />Wix</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>in 30 minutes</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />Shopify</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>Tomorrow</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />MailChimp</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>in 6 Hours</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />Paypal</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>No contact</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" data-brand="Brand 1" />Disney</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>Members</td>
                            <td>Automation</td>
                            <td>#digital</td>
                            <td>in 30 minutes</td>
                        </tr>
                        <tr className="table-counts">
                            <td>10 counts</td>
                            <td>+ Add calculation</td>
                            <td>+ Add calculation</td>
                            <td>+ Add calculation</td>
                            <td>+ Add calculation</td>
                        </tr>



                        {/* <!-- <tr>
                <td>Brand 4</td>
                <td>Description of Brand 4</td>
                <td><input type="checkbox" data-brand="Brand 4"/></td>
            </tr> --> */}
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

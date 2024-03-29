import React from 'react';
import './sideBar.css';


const SideBar = () => {
  return (
    <div className="sidebar-container">

      {/* <div className="main-sidebar"> */}
      <div className="company-name">
        <i className="fa fa-houzz icon" style={{ fontSize: "40px" }}></i>
        {/* <i className="fa fa-black-tie" style={{ fontSize: "70px" }}></i> */}
        <div className="name">
          <p>INC</p>
          <h1>InnovateHub</h1>
        </div>
        <img src={require("../assets/images/face2.jpg")} alt="face" height={50}
          width={50} />
      </div>
      <ul>
        <li><button href="#">
          <i className='fa fa-delicious' style={{ fontSize: "24px" }}></i>
          Design Team</button></li>
        <li><button href="#">
          <i className='fa fa-google-wallet' style={{ fontSize: "24px" }}></i>
          Marketing Team</button></li>
        <li>

          <button href="#"> <i className='fa fa-dot-circle-o' style={{ fontSize: "24px" }}></i>Development Team</button>
        </li>
        <li><button disabled href="#"><i className='fa fa-plus-square' style={{ fontSize: "24px" }}></i>Create a team</button></li>
        {/* <div className="dropdown-btn"> */}
        <li className='folder' >
          <button disabled>
          <i className='fa fa-dot-circle-o' style={{ fontSize: "24px"}}></i>FOLDERS</button>
          <i className='fa fa-plus-square-o' style={{ fontSize: "24px" , color:"grey" }}></i>
        </li>
        {/* </div> */}
        <li className='li-drop'>
          <div className="dropdown-btn">
            <button >
              <i className='fa fa-eraser' style={{ fontSize: "24px" }}></i>
              Products
            </button>
            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
          </div>
          <div className="dropdown-content">
            <ul>
              <li> <button >Roadmap</button></li>
              <li> <button>Feedback</button></li>
              <li> <button >Performance</button></li>
              <li> <button >Team</button></li>
              <li> <button >Analytics</button></li>
              <li> <button disabled>
                <i className='fa fa-plus-square' style={{ fontSize: "24px" }}></i>
                Add new sub</button></li>
            </ul>

          </div>
        </li>
        <li className='li-drop'>
          <div className="dropdown-btn">
            <button href="table2.html">
              <i className='fa fa-eraser' style={{ fontSize: "24px" }}></i>
              Sales
            </button>
            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
          </div>
          <div className="dropdown-content">
            <ul>
              <li> <button >Roadmap</button></li>
              <li> <button >Feedback</button></li>
              <li> <button disabled>
                <i className='fa fa-plus-square' style={{ fontSize: "24px" }}></i>
                Add new sub</button></li>
            </ul>
          </div>
        </li>
        <li className='li-drop'>
          <div className="dropdown-btn" >
            <button >
              <i className='fa fa-eraser' style={{ fontSize: "24px" }}></i>
              Design
            </button>
            <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
          </div>
          <div className="dropdown-content">
            <ul>
              <li> <button >Roadmap</button></li>
              <li> <button >Feedback</button></li>
              <li > <button disabled>
                <i className='fa fa-plus-square' style={{ fontSize: "24px" }}></i>
                Add new sub</button></li>
            </ul>
          </div>
        </li>
        <li><button href="#"><i className='fa fa-eraser' style={{ fontSize: "24px" }}></i>Office</button></li>
        <li><button href="#"><i className='fa fa-eraser' style={{ fontSize: "24px" }}></i>Legal</button></li>
      </ul>

      <div className="lower-container">
        <ul>
          <li><i className='	fa fa-odnoklassniki' style={{ fontSize: "24px" }} />Invite teammates</li>
          <li><i className='fa fa-play-circle-o' style={{ fontSize: "24px" }} />Help and first steps</li>
          <li className='li-trial '>3 days left on trial <span className='billing'>Add billing</span></li>
        </ul>
      </div>
    </div>

    // </div>

  )
}

export default SideBar;

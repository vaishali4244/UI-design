import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';


const SideBar = () => {
  const [dropdown1Show, setDropdown1Show] = useState(false);
  const [dropdown2Show, setDropdown2Show] = useState(false);
  const [dropdown3Show, setDropdown3Show] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Show(!dropdown1Show);
  };

  const toggleDropdown2 = () => {
    setDropdown2Show(!dropdown2Show);
  };

  const toggleDropdown3 = () => {
    setDropdown3Show(!dropdown3Show);
  };

  return (
    <div className="sidebar-container">

      <div className="company-name">
        <i
          className="fa fa-houzz icon"
          style={{ fontSize: "40px" }}></i>

        <div className="name">
          <p>INC</p>
          <h1>InnovateHub</h1>
        </div>

        <img
          src={require("../assets/images/face2.jpg")}
          alt="face"
          height={40}
          width={40} />
      </div>

      <ul>

        <li>
          <Link className="link" to='/designteam'>
            <button>
              <i
                className='fa fa-delicious'
                style={{ fontSize: "20px" }}></i>
              Design Team</button>
          </Link>
        </li>

        <li>
          <Link className="link" to='/marketingteam'>
            <button href="#">
              <i
                className='fa fa-google-wallet'
                style={{ fontSize: "20px" }}></i>
              Marketing Team
            </button>
          </Link>
        </li>

        <li>
          <Link className="link" to='/developmentteam'>
            <button>
              <i className='fa fa-dot-circle-o' style={{ fontSize: "20px" }}></i>
              Development Team
            </button>
          </Link>
        </li>
        <li>
          <button disabled >
            <i className='fa fa-plus-square' style={{ fontSize: "20px" }}></i>
            Create a team
          </button>
        </li>

        <li className='folder' >
          <button disabled>
            <i className='fa fa-dot-circle-o' style={{ fontSize: "20px" }}></i>
            FOLDERS
          </button>
          <i className='fa fa-plus-square-o' style={{ fontSize: "20px", color: "grey" }}></i>
        </li>

        <li className='li-drop'>
          <Link className="link" to='/'>
            <div className="dropdown-btn" onClick={toggleDropdown1}>
              <button >
                <i className='fa fa-eraser' style={{ fontSize: "20px" }}></i>
                Products
              </button>
              <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
            </div>
          </Link>
          {dropdown1Show && (

            <div className="dropdown-content">
              <ul>
                <li> <button >Roadmap</button></li>
                <li> <button>Feedback</button></li>
                <li> <button >Performance</button></li>
                <li> <button >Team</button></li>
                <li> <button >Analytics</button></li>
                <li>
                  <button disabled>
                    <i className='fa fa-plus-square' style={{ fontSize: "20px" }}></i>
                    Add new sub
                  </button>
                </li>
              </ul>

            </div>

          )}

        </li>

        <li className='li-drop'>
          <Link className="link" to='/sales' >

            <div className="dropdown-btn" onClick={toggleDropdown2}>
              <button >
                <i className='fa fa-eraser' style={{ fontSize: "20px" }}></i>
                Sales
              </button>
              <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>
            </div>
          </Link>
          {dropdown2Show && (

            <div className="dropdown-content">
              <ul>
                <li> <button >Roadmap</button></li>
                <li> <button >Feedback</button></li>
                <li> <button disabled>
                  <i className='fa fa-plus-square' style={{ fontSize: "20px" }}></i>
                  Add new sub
                </button>
                </li>
              </ul>
            </div>

          )}

        </li>

        <li className='li-drop'>
          <Link className="link" to='/design'>
            <div className="dropdown-btn" onClick={toggleDropdown3}>
              <button >
                <i className='fa fa-eraser' style={{ fontSize: "20px" }}></i>
                Design
              </button>
              <i className='fa fa-caret-down' style={{ fontSize: "20px" }}></i>

            </div>
          </Link>
          {dropdown3Show && (

            <div className="dropdown-content">

              <ul>
                <li> <button >Roadmap</button></li>
                <li> <button >Feedback</button></li>
                <li > <button disabled>
                  <i className='fa fa-plus-square' style={{ fontSize: "20px" }}></i>
                  Add new sub
                </button>
                </li>

              </ul>

            </div>
          )}

        </li>

        <li>
          <Link className="link" to='/office'>
            <button href="#">
              <i className='fa fa-eraser' style={{ fontSize: "20px" }}></i>
              Office
            </button>
          </Link>
        </li>
        <li>
          <Link className="link" to='/legal'>
            <button href="#">
              <i className='fa fa-eraser' style={{ fontSize: "20px" }}>
              </i>
              Legal
            </button>
          </Link>
        </li>

      </ul>

      <div className="lower-container">

        <ul>
          <li><i className='	fa fa-odnoklassniki' style={{ fontSize: "20px" }} />Invite teammates</li>
          <li><i className='fa fa-play-circle-o' style={{ fontSize: "20px" }} />Help and first steps</li>
          <li className='li-trial '>
            3 days left on trial
            <span className='billing'>
              Add billing
            </span>
          </li>
        </ul>

      </div>

    </div>

  )
}

export default SideBar;

import React, { useEffect, useState } from "react";
import "./SideBar.css";
import ReactPaginate from "react-paginate";
import Display from "../Display/Display";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

function Sidebar() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isAdmin, setisAdmin] = useState(false);
  const userPerpage = 9;
  const visitedPage = pageNumber * userPerpage;
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://glacial-basin-60167.herokuapp.com/allData")
      .then((res) => res.json())
      .then((data) => setData(data));

    axios
      .get(
        `https://glacial-basin-60167.herokuapp.com/admin?email=${user.email}`
      )
      .then((result) => {
        if (result.data.length == 1) {
          setisAdmin(true);
        }
      });
  }, []);
  const pageCount = Math.ceil(data.length / userPerpage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center my-5 text-color fw-bold">
            CURIOUS TRAVELL LOVERS EXPERIENCE
          </h1>
          <div className="col-md-4">
            <div class="left-sidebar">
              {isAdmin ? (
                <>
                  <Link class="active" to="">
                    Admin Dashbord
                  </Link>
                  <Link to="/addexperience">Create Post</Link>
                  <Link to="/blog">Pending Blog</Link>
                  <Link to="/makeadmin">Make Admin</Link>
                </>
              ) : (
                <>
                  <Link class="active" to="/addexperience">
                    Add Experience
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {data
                .slice(visitedPage, visitedPage + userPerpage)
                .map((data) => (
                  <div class="col ">
                    <div class="card h-100 border-0">
                      <div className="img-hover-zoom">
                        <img src={data.img} class="card-img-top" alt="..." />
                      </div>
                      <div class="card-body ">
                        <h5 class="card-title">{data.location}</h5>
                        <p class="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                      <Link to={`experience/${data._id}`}>
                        {" "}
                        <button className="btn-card">Read More</button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            ></ReactPaginate>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

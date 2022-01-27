import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import header1 from "../../../images/header1.jpg";
import "./Display.css";
function Display() {
  const { id } = useParams();
  const { user, isLoading } = useAuth();

  const [data, setData] = useState({});
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    axios
      .get(`https://glacial-basin-60167.herokuapp.com/allData/${id}`)
      .then((result) => {
        setData(result.data);
      });
    axios
      .get(
        `https://glacial-basin-60167.herokuapp.com/admin?email=${user.email}`
      )
      .then((result) => {
        if (result.data.length === 1) {
          setisAdmin(true);
        }
      });
  }, []);
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      axios
        .delete(`https://glacial-basin-60167.herokuapp.com/allData/${id}`)
        .then((result) => {
          alert("Delete post successfully");
          axios
            .get(`https://glacial-basin-60167.herokuapp.com/allData`)
            .then((result) => {
              setData(result.data);
            });
        });
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={data?.img} className="w-100" alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8">
            <p>{data?.desc}</p>
          </div>
          <div className="col-md-4">
            <h3 className="text-center text-color">Key Points</h3>
            <table>
              <tr>
                <td>Country</td>
                <td>{data?.location}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{data?.date}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{data?.time}</td>
              </tr>
              <tr>
                <td>Expense</td>
                <td>$ {data?.expense}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{data?.rating}/6</td>
              </tr>
              {isAdmin && (
                <tr>
                  <td colspan="2">
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn btn-danger w-100"
                    >
                      Delete Blog
                    </button>
                  </td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;

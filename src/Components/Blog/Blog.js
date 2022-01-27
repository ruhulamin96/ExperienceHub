import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Blog.css";

function Blog() {
  const [experience, setExperience] = useState([]);
  let count = 1;
  useEffect(() => {
    axios
      .get(`https://glacial-basin-60167.herokuapp.com/experience`)
      .then((reslut) => {
        setExperience(reslut.data);
      });
  }, []);
  const handlePending = (id, count) => {
    axios
      .put(`https://glacial-basin-60167.herokuapp.com/experience/${id}`)
      .then((result) => {
        alert("Approved Your Blog Successfully and Added to UI");
        axios
          .get(`https://glacial-basin-60167.herokuapp.com/experience`)
          .then((result) => {
            setExperience(result.data);
          });
        const { date, time, location, expense, rating, img, desc } =
          experience[count - 2];
        const newData = { date, time, location, expense, rating, img, desc };
        axios
          .post("https://glacial-basin-60167.herokuapp.com/allData", newData)
          .then(() => {});
      });
  };
  return (
    <div className="text-center blog-design">
      <div className=" mt-5">
        <table>
          <tr>
            <th>Serial No</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
          {experience.map((data) => (
            <tr>
              <td>{count++}</td>
              <td>{data?.location}</td>
              <td>
                {data?.isApproved ? (
                  <button className="btn btn-primary w-50">Approved</button>
                ) : (
                  <button
                    onClick={() => handlePending(data._id, count)}
                    className="btn btn-secondary w-50"
                  >
                    Pending
                  </button>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Blog;

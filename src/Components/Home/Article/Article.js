import React from "react";
import article1 from "../../../images/article1.jpg";
import article2 from "../../../images/article2.jpg";
import article4 from "../../../images/article4.jpg";
import './Article.css'
function Article() {
  return (
    <div>
      <div>
        <div className="continer m-5">
          <h1 className="text-center fs-1 text-color mb-5">RELATED ARTICLE</h1>
          <div className="row">
            <div className="col-md-4">
              <div class="col ">
                <div class="card h-100 border-0">
                  <div className="img-hover-zoom">
                    <img src={article1} class="card-img-top w-100" alt="..." />
                  </div>
                  <div class="card-body ">
                    <p class="card-text">
                      Many people are initially shocked at the combined price of
                      flights for a family but do remember that all airlines
                      consider kids above the age of 12 as adults and charge
                      accordingly. We suggest flying with an airline such as
                      Thai Airways because by using them on any domestic routes
                      as well you’ll save money on the whole flight itinerary.
                      This is easy to do if you book with a travel company like
                      Experience Travel Group. Otherwise, one sure way to keep
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="col ">
                <div class="card h-100 border-0">
                  <div className="img-hover-zoom">
                    <img src={article2} class="card-img-top w-100" alt="..." />
                  </div>
                  <div class="card-body ">
                    <p class="card-text">
                      Many people are initially shocked at the combined price of
                      flights for a family but do remember that all airlines
                      consider kids above the age of 12 as adults and charge
                      accordingly. We suggest flying with an airline such as
                      Thai Airways because by using them on any domestic routes
                      as well you’ll save money on the whole flight itinerary.
                      This is easy to do if you book with a travel company like
                      Experience Travel Group. Otherwise, one sure way to keep
                      the price down is to secure flights as early as possible.
                      During the summer holidays, domestic flights to Koh Samui
                      are much higher than the rest of the year the weather is
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="col ">
                <div class="card h-100 border-0">
                  <div className="img-hover-zoom">
                    <img src={article4} class="card-img-top w-100" alt="..." />
                  </div>
                  <div class="card-body ">
                    <p class="card-text">
                      Many people are initially shocked at the combined price of
                      flights for a family but do remember that all airlines
                      consider kids above the age of 12 as adults and charge
                      accordingly. We suggest flying with an airline such as
                      Thai Airways because by using them on any domestic routes
                      as well you’ll save money on the whole flight itinerary.
                      This is easy to do if you book with a travel company like
                      Experience Travel Group. Otherwise, one sure way to keep
                      the price down is to secure flights as early as possible.
                      During the summer holidays, domestic flights to Koh Samui
                      are much higher than the rest of the year the weather is
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div class="input-group m-3 mx-auto subscribe-design">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class=" text-center p-1 my-2 btn-card" id="basic-addon2">
               SUBSCRIBE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;

import { CardData } from "./cardData";
function Card() {
  return (
    <>
      <div className="cardContent container my-3">
        <div className="gridBox">
          {CardData.map((data, i) => {
            return (
              <div className="card m-2" key={i}>
                <div className="img">
                  <img className="img-fluid" src={data.imge} alt="" />
                  {data.featured ? <p>featured</p> : ""}
                  {/* <p>featured</p> */}
                  <i className="far fa-heart"></i>
                </div>

                <div
                  className="text"
                  style={
                    !data.featured
                      ? {
                          borderLeft: "4px ",
                          borderStyled: "solid",
                          borderColor: "#ffa600",
                        }
                      : {}
                  }
                >
                  <h5>{data.price}</h5>
                  <p>{data.name}</p>
                  <div className="cd d-flex mt-4 justify-content-between">
                    <p>karachi</p>
                    <p>28 may</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="card m-2">
            <div class="img">
              <img class="img-fluid" src="images/mob.gif" alt="" />
              <p>featured</p>
              <i class="far fa-heart"></i>
            </div>
            <div class="text">
              <h5>rs 160,000</h5>
              <p>vivo mobile model y95 latest lounch</p>
              <div class="cd d-flex mt-4 justify-content-between">
                <p>karachi</p>
                <p>28 may</p>
              </div>
            </div>
          </div>

          <div class="card m-2">
            <div class="img">
              <img class="img-fluid" src="images/mob.gif" alt="" />
              <p>featured</p>
              <i class="far fa-heart"></i>
            </div>
            <div class="text">
              <h5>rs 160,000</h5>
              <p>vivo mobile model y95 latest lounch</p>
              <div class="cd d-flex mt-4 justify-content-between">
                <p>karachi</p>
                <p>28 may</p>
              </div>
            </div>
          </div>

          <div class="card m-2">
            <div class="img">
              <img class="img-fluid" src="images/mob.gif" alt="" />
              <p>featured</p>
              <i class="far fa-heart"></i>
            </div>
            <div class="text">
              <h5>rs 160,000</h5>
              <p>vivo mobile model y95 latest lounch</p>
              <div class="cd d-flex mt-4 justify-content-between">
                <p>karachi</p>
                <p>28 may</p>
              </div>
            </div>
          </div>

          <div class="card m-2">
            <div class="img">
              <img class="img-fluid" src="images/mob.gif" alt="" />
              <p>featured</p>
              <i class="far fa-heart"></i>
            </div>
            <div class="text">
              <h5>rs 160,000</h5>
              <p>vivo mobile model y95 latest lounch</p>
              <div class="cd d-flex mt-4 justify-content-between">
                <p>karachi</p>
                <p>28 may</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;

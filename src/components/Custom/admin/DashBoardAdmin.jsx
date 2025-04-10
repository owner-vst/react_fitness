import { Link } from "react-router-dom";

import CalorieChart from "../charts/CalorieChart";
import DashboardAdminCharts from "../charts/DashBardAdminCharts";
import RadialChart from "../charts/RadialChart";
import Nutrients from "../charts/Nutrients";
import useDashStats from "../../../hooks/dashStats/useDashStats";
import { useEffect } from "react";

function DashBoardAdmin() {
  const { adminDashboardStats, loading, error, fetchAdminDashStats } =
    useDashStats();

  useEffect(() => {
    fetchAdminDashStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!adminDashboardStats) {
    return <div>No data available</div>;
  }
  return (
    <div className="content-body">
      {/* row */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"],   "innerRadius": 45, "radius": 10}'
                  >
                    8/8
                  </span>
                  <small className="text-primary">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.1666 19.5283C27.8064 18.2461 29.0052 16.484 29.5958 14.4879C30.1863 12.4919 30.1393 10.3612 29.4611 8.39317C28.783 6.4251 27.5076 4.71772 25.8128 3.5091C24.118 2.30048 22.0883 1.65088 20.0066 1.65088C17.925 1.65088 15.8953 2.30048 14.2005 3.5091C12.5057 4.71772 11.2303 6.4251 10.5522 8.39317C9.87403 10.3612 9.82697 12.4919 10.4175 14.4879C11.0081 16.484 12.2069 18.2461 13.8466 19.5283C10.7486 20.761 8.09109 22.8939 6.21709 25.6517C4.34309 28.4096 3.33862 31.6657 3.33331 35V36.6667C3.33331 37.1087 3.50891 37.5326 3.82147 37.8452C4.13403 38.1577 4.55795 38.3333 4.99998 38.3333H35C35.442 38.3333 35.8659 38.1577 36.1785 37.8452C36.4911 37.5326 36.6666 37.1087 36.6666 36.6667V35C36.6624 31.6673 35.6599 28.4122 33.7884 25.6546C31.9169 22.8969 29.2622 20.7631 26.1666 19.5283ZM13.3333 11.6667C13.3333 10.3481 13.7243 9.0592 14.4569 7.96287C15.1894 6.86654 16.2306 6.01206 17.4488 5.50748C18.6669 5.00289 20.0074 4.87087 21.3006 5.12811C22.5938 5.38534 23.7817 6.02028 24.714 6.95263C25.6464 7.88498 26.2813 9.07286 26.5385 10.3661C26.7958 11.6593 26.6638 12.9997 26.1592 14.2179C25.6546 15.4361 24.8001 16.4773 23.7038 17.2098C22.6075 17.9423 21.3185 18.3333 20 18.3333C18.2319 18.3333 16.5362 17.631 15.2859 16.3807C14.0357 15.1305 13.3333 13.4348 13.3333 11.6667ZM6.66665 35C6.66665 31.4638 8.0714 28.0724 10.5719 25.5719C13.0724 23.0714 16.4638 21.6667 20 21.6667C23.5362 21.6667 26.9276 23.0714 29.4281 25.5719C31.9286 28.0724 33.3333 31.4638 33.3333 35H6.66665Z"
                        fill="white"
                      />
                    </svg>
                  </small>
                  <span className="circle bg-success" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalVendors}
                </h2>
                <span className="fs-14">No of Vendors</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card ">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"], "innerRadius": 45, "radius": 10 }'
                  >
                    7/7
                  </span>
                  <small className="text-primary">
                    {/* FontAwesome Icon for Calendar */}
                    <i
                      className="fas fa-dollar-sign"
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </small>
                  <span className="circle bg-green" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  ${adminDashboardStats.totalSales._sum.total_price}
                </h2>
                <span className="fs-14 ">Total Sales</span>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card ">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"], "innerRadius": 45, "radius": 10 }'
                  >
                    7/7
                  </span>
                  <small className="text-primary">
                    <i
                      className="fa fa-list-alt"
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </small>
                  <span className="circle bg-info" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalProducts}
                </h2>
                <span className="fs-14 ">No of Products</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card ">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"], "innerRadius": 45, "radius": 10 }'
                  >
                    7/7
                  </span>
                  <small className="text-primary">
                    <i
                      className="fa-solid fa-shopping-cart"
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </small>
                  <span className="circle bg-success" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalSalesCount}
                </h2>
                <span className="fs-14 ">No of Sales</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"],   "innerRadius": 45, "radius": 10}'
                  >
                    8/8
                  </span>
                  <small className="text-primary">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.1666 19.5283C27.8064 18.2461 29.0052 16.484 29.5958 14.4879C30.1863 12.4919 30.1393 10.3612 29.4611 8.39317C28.783 6.4251 27.5076 4.71772 25.8128 3.5091C24.118 2.30048 22.0883 1.65088 20.0066 1.65088C17.925 1.65088 15.8953 2.30048 14.2005 3.5091C12.5057 4.71772 11.2303 6.4251 10.5522 8.39317C9.87403 10.3612 9.82697 12.4919 10.4175 14.4879C11.0081 16.484 12.2069 18.2461 13.8466 19.5283C10.7486 20.761 8.09109 22.8939 6.21709 25.6517C4.34309 28.4096 3.33862 31.6657 3.33331 35V36.6667C3.33331 37.1087 3.50891 37.5326 3.82147 37.8452C4.13403 38.1577 4.55795 38.3333 4.99998 38.3333H35C35.442 38.3333 35.8659 38.1577 36.1785 37.8452C36.4911 37.5326 36.6666 37.1087 36.6666 36.6667V35C36.6624 31.6673 35.6599 28.4122 33.7884 25.6546C31.9169 22.8969 29.2622 20.7631 26.1666 19.5283ZM13.3333 11.6667C13.3333 10.3481 13.7243 9.0592 14.4569 7.96287C15.1894 6.86654 16.2306 6.01206 17.4488 5.50748C18.6669 5.00289 20.0074 4.87087 21.3006 5.12811C22.5938 5.38534 23.7817 6.02028 24.714 6.95263C25.6464 7.88498 26.2813 9.07286 26.5385 10.3661C26.7958 11.6593 26.6638 12.9997 26.1592 14.2179C25.6546 15.4361 24.8001 16.4773 23.7038 17.2098C22.6075 17.9423 21.3185 18.3333 20 18.3333C18.2319 18.3333 16.5362 17.631 15.2859 16.3807C14.0357 15.1305 13.3333 13.4348 13.3333 11.6667ZM6.66665 35C6.66665 31.4638 8.0714 28.0724 10.5719 25.5719C13.0724 23.0714 16.4638 21.6667 20 21.6667C23.5362 21.6667 26.9276 23.0714 29.4281 25.5719C31.9286 28.0724 33.3333 31.4638 33.3333 35H6.66665Z"
                        fill="white"
                      />
                    </svg>
                  </small>
                  <span className="circle bg-success" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalUsers}{" "}
                </h2>
                <span className="fs-14">No of Users</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(255, 255, 255)", "rgba(255, 255, 255, 1)"],   "innerRadius": 45, "radius": 10}'
                  >
                    8/8
                  </span>
                  <small className="text-primary">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip1)">
                        <path
                          d="M32.5972 16.2892C32.396 15.8517 32.0044 15.5314 31.5358 15.4211C31.067 15.3107 30.5737 15.4225 30.1984 15.7243C29.5264 16.2647 28.6792 16.5622 27.8126 16.5623C26.7941 16.5624 25.8366 16.1663 25.1165 15.447C24.397 14.7282 24.0006 13.7706 24.0006 12.7504C24.0006 12.346 24.063 11.9035 24.1862 11.4348C24.6802 9.55445 24.6864 7.57584 24.204 5.71301C23.7158 3.82808 22.7376 2.10392 21.3752 0.727114C21.1908 0.54055 21.09 0.442581 21.09 0.442581C20.4892 -0.141565 19.5339 -0.14844 18.9257 0.427737C18.7859 0.560082 15.4647 3.72151 12.1 8.3035C7.49236 14.5779 5.15617 20.248 5.15617 25.1562C5.15617 29.1273 6.70048 32.8566 9.50457 35.6575C12.3083 38.458 16.0359 40.0002 20.0005 40.0001C23.9651 39.9999 27.6923 38.4576 30.4955 35.6575C33.2995 32.8567 34.8438 29.1551 34.8438 25.2343C34.8438 22.5407 34.0879 19.5312 32.5972 16.2892ZM22.6961 35.4472C21.9761 36.1664 21.0186 36.5624 20.0001 36.5625C18.9816 36.5626 18.0242 36.1665 17.304 35.4472C16.5845 34.7284 16.1881 33.7707 16.1881 32.7506C16.1881 30.3061 18.3931 27.2754 19.9878 25.4753C21.589 27.3136 23.8119 30.3943 23.8119 32.7821C23.8119 33.782 23.4156 34.7285 22.6961 35.4472ZM28.2871 33.4464C27.7708 33.9621 27.2144 34.423 26.6256 34.8278C26.8301 34.1729 26.9369 33.4853 26.9369 32.7821C26.9369 30.6427 25.9326 28.1741 23.9518 25.4447C22.5457 23.5071 21.1487 22.1406 21.09 22.0835C20.4893 21.4988 19.5343 21.4922 18.9256 22.0685C18.8666 22.1245 17.4638 23.4596 16.0534 25.3804C14.0691 28.0825 13.063 30.5621 13.063 32.7506C13.063 33.4673 13.1719 34.1668 13.3795 34.8313C12.7889 34.4257 12.2308 33.9636 11.7129 33.4464C9.49988 31.236 8.28112 28.2918 8.28112 25.1562C8.28112 16.7851 16.7974 7.12224 19.9336 3.84831C21.3135 5.76778 21.7861 8.27217 21.1637 10.6406C20.9725 11.3684 20.8755 12.0782 20.8755 12.7505C20.8755 14.6061 21.5973 16.349 22.908 17.658C24.2182 18.9668 25.9601 19.6876 27.8127 19.6874C28.7132 19.6874 29.6026 19.5103 30.4282 19.1748C31.2853 21.3866 31.7186 23.419 31.7186 25.2343C31.7187 28.3195 30.5 31.2359 28.2871 33.4464Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip1">
                          <rect width={40} height={40} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </small>
                  <span className="circle bg-green" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalCaloriesBurned._sum.calories_burned.toFixed(2)}
                </h2>
                <span className="fs-14">Total Calories Burned all users</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card ">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"], "innerRadius": 45, "radius": 10 }'
                  >
                    7/7
                  </span>
                  <small className="text-primary">
                    <i
                      className="fa-solid fa-person-walking"
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </small>
                  <span className="circle bg-info" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalActivities}
                </h2>
                <span className="fs-14 ">No of Activities</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card ">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"], "innerRadius": 45, "radius": 10 }'
                  >
                    7/7
                  </span>
                  <small className="text-primary">
                    <i
                      className="fa-solid fa-utensils"
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </small>
                  <span className="circle bg-success" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalFoodItems}
                </h2>
                <span className="fs-14 ">No of Food items</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(255, 255, 255)", "rgba(255, 255, 255, 1)"],   "innerRadius": 45, "radius": 10}'
                  >
                    4/8
                  </span>
                  <small className="text-primary">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.9353 18.3544C39.8731 18.1666 38.3337 13.75 32.5 13.75C25.9703 13.75 22.8666 17.9659 21.795 19.8719C20.6306 19.1822 19.1838 18.75 17.5 18.75C15.7922 18.75 14.35 19.1375 13.1275 19.7072C13.5697 16.695 13.6987 13.1119 13.7353 11.25H17.5C17.9175 11.25 18.3081 11.0413 18.54 10.6934L21.04 6.94344C21.4075 6.39156 21.2806 5.64813 20.7494 5.25031C18.3166 3.42531 15.1269 1.25 13.75 1.25C11.6137 1.25 6.95688 6.24344 5.16469 9.38C0.0584378 18.3153 0 31.925 0 32.5C0 32.8797 0.172188 33.2391 0.46875 33.4759C7.56469 39.1522 15.7519 40 20 40C23.3716 40 29.9756 39.4391 36.3306 35.6834C38.5938 34.3456 40 31.8706 40 29.2244V18.75C40 18.6156 39.9781 18.4822 39.9353 18.3544ZM37.5 29.2244C37.5 30.9912 36.565 32.6419 35.0584 33.5316C29.2162 36.9844 23.1166 37.5 20 37.5C16.9178 37.5 9.15156 36.9453 2.51094 31.8981C2.58406 29.19 3.14094 17.96 7.33531 10.62C9.09187 7.54813 12.7112 4.16312 13.7722 3.76562C14.4606 3.96406 16.4566 5.23219 18.2972 6.55125L16.8309 8.75H12.5C11.8091 8.75 11.25 9.30969 11.25 10C11.25 10.0822 11.2344 17.9659 10.185 21.6878C9.46375 22.3391 8.88656 22.9872 8.43125 23.4994C8.2175 23.7403 8.02969 23.9522 7.86594 24.1166C7.3775 24.605 7.3775 25.3959 7.86594 25.8841C8.35437 26.3722 9.14531 26.3725 9.63344 25.8841C9.82625 25.6913 10.0472 25.4441 10.3 25.1603C11.6003 23.6975 13.7756 21.25 17.5 21.25C20.5884 21.25 22.5 23.1966 22.5 25C22.5 25.6903 23.0591 26.25 23.75 26.25C24.4409 26.25 25 25.6903 25 25C25 23.8181 24.5506 22.6022 23.7313 21.5581C24.1503 20.66 26.5119 16.25 32.5 16.25C35.99 16.25 37.2228 18.39 37.5 18.9922V29.2244Z"
                        fill="white"
                      />
                    </svg>
                  </small>
                  <span className="circle bg-success" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.weeklyProgress._sum.calories_burned}
                </h2>
                <span className="fs-14">Weekly Calories Burned</span>
              </div>
            </div>
          </div>
          <div className="col-xl col-md-4 col-sm-6">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(255, 255, 255)", "rgba(255, 255, 255, 1)"],   "innerRadius": 45, "radius": 10}'
                  >
                    3/8
                  </span>
                  <small className="text-primary">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip1)">
                        <path
                          d="M32.5972 16.2892C32.396 15.8517 32.0044 15.5314 31.5358 15.4211C31.067 15.3107 30.5737 15.4225 30.1984 15.7243C29.5264 16.2647 28.6792 16.5622 27.8126 16.5623C26.7941 16.5624 25.8366 16.1663 25.1165 15.447C24.397 14.7282 24.0006 13.7706 24.0006 12.7504C24.0006 12.346 24.063 11.9035 24.1862 11.4348C24.6802 9.55445 24.6864 7.57584 24.204 5.71301C23.7158 3.82808 22.7376 2.10392 21.3752 0.727114C21.1908 0.54055 21.09 0.442581 21.09 0.442581C20.4892 -0.141565 19.5339 -0.14844 18.9257 0.427737C18.7859 0.560082 15.4647 3.72151 12.1 8.3035C7.49236 14.5779 5.15617 20.248 5.15617 25.1562C5.15617 29.1273 6.70048 32.8566 9.50457 35.6575C12.3083 38.458 16.0359 40.0002 20.0005 40.0001C23.9651 39.9999 27.6923 38.4576 30.4955 35.6575C33.2995 32.8567 34.8438 29.1551 34.8438 25.2343C34.8438 22.5407 34.0879 19.5312 32.5972 16.2892ZM22.6961 35.4472C21.9761 36.1664 21.0186 36.5624 20.0001 36.5625C18.9816 36.5626 18.0242 36.1665 17.304 35.4472C16.5845 34.7284 16.1881 33.7707 16.1881 32.7506C16.1881 30.3061 18.3931 27.2754 19.9878 25.4753C21.589 27.3136 23.8119 30.3943 23.8119 32.7821C23.8119 33.782 23.4156 34.7285 22.6961 35.4472ZM28.2871 33.4464C27.7708 33.9621 27.2144 34.423 26.6256 34.8278C26.8301 34.1729 26.9369 33.4853 26.9369 32.7821C26.9369 30.6427 25.9326 28.1741 23.9518 25.4447C22.5457 23.5071 21.1487 22.1406 21.09 22.0835C20.4893 21.4988 19.5343 21.4922 18.9256 22.0685C18.8666 22.1245 17.4638 23.4596 16.0534 25.3804C14.0691 28.0825 13.063 30.5621 13.063 32.7506C13.063 33.4673 13.1719 34.1668 13.3795 34.8313C12.7889 34.4257 12.2308 33.9636 11.7129 33.4464C9.49988 31.236 8.28112 28.2918 8.28112 25.1562C8.28112 16.7851 16.7974 7.12224 19.9336 3.84831C21.3135 5.76778 21.7861 8.27217 21.1637 10.6406C20.9725 11.3684 20.8755 12.0782 20.8755 12.7505C20.8755 14.6061 21.5973 16.349 22.908 17.658C24.2182 18.9668 25.9601 19.6876 27.8127 19.6874C28.7132 19.6874 29.6026 19.5103 30.4282 19.1748C31.2853 21.3866 31.7186 23.419 31.7186 25.2343C31.7187 28.3195 30.5 31.2359 28.2871 33.4464Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip1">
                          <rect width={40} height={40} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </small>
                  <span className="circle bg-green" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {
                    adminDashboardStats.totalCaloriesBurnedUser._sum
                      .calories_burned
                  }
                </h2>
                <span className="fs-14">Total Calories Burned </span>
              </div>
            </div>
          </div>
          <div className="col-xl col-md-4 col-sm-6">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(255, 255, 255)", "rgba(255, 255, 255, 1)"],   "innerRadius": 45, "radius": 10}'
                  >
                    5/8
                  </span>
                  <small className="text-primary">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip2)">
                        <path
                          d="M33.82 11.4053C34.0805 11.1923 34.332 10.9653 34.5731 10.7242C36.4537 8.84367 37.4895 6.34328 37.4895 3.68359V3.68234C37.4895 3.03516 36.9636 2.51047 36.3164 2.51047C33.6567 2.51047 31.1563 3.54625 29.2757 5.42687C29.0346 5.66797 28.8076 5.91945 28.5946 6.18C27.991 2.67508 24.9298 0 21.2551 0C20.6079 0 20.0832 0.524687 20.0832 1.17188V2.81305C20.0832 4.95719 20.8022 6.99062 22.125 8.63914C19.0591 8.29398 15.869 9.29383 13.5229 11.6401C7.47433 17.6886 0.36706 37.5919 0.067451 38.4362C-0.0837209 38.8622 0.0236228 39.3371 0.343232 39.6567C0.662842 39.9763 1.13776 40.0837 1.56378 39.9325C2.40808 39.6329 22.3114 32.5255 28.3599 26.477C30.706 24.1309 31.706 20.9409 31.3608 17.8749C33.0094 19.1977 35.0428 19.9167 37.1869 19.9167H38.8281C39.4753 19.9167 40 19.392 40 18.7448C40 15.0702 37.3249 12.009 33.82 11.4053ZM30.933 7.08414C32.0653 5.9518 33.4917 5.22 35.0398 4.96008C34.78 6.50812 34.0482 7.93453 32.9157 9.06688C31.7835 10.1991 30.3575 10.9309 28.8089 11.1909C29.0689 9.64273 29.8007 8.21649 30.933 7.08414ZM22.427 2.47945C24.6784 3.01047 26.3593 5.03656 26.3593 7.44789V9.63961L24.4736 7.75398C23.1538 6.43414 22.427 4.67945 22.427 2.81305V2.47945ZM19.828 29.4677L18.3182 27.9579C17.8606 27.5002 17.1185 27.5003 16.6609 27.9579C16.2032 28.4155 16.2032 29.1575 16.6609 29.6152L17.6477 30.6019C13.2707 32.7998 7.9937 35.0181 3.15104 36.8489C4.21644 34.0308 5.54269 30.7277 6.98815 27.4736L7.87448 28.3599C8.33206 28.8175 9.07409 28.8175 9.53175 28.3599C9.9894 27.9023 9.9894 27.1603 9.53175 26.7027L8.0244 25.1953C9.59073 21.8356 10.9352 19.342 12.0686 17.4916L15.4057 20.8287C15.8633 21.2862 16.6053 21.2862 17.063 20.8287C17.5207 20.3711 17.5207 19.6291 17.063 19.1714L13.3816 15.49C14.0934 14.4868 14.6916 13.786 15.1803 13.2973C18.3578 10.1198 23.5244 10.119 26.7027 13.2973C30.1591 16.7537 29.0887 21.0277 28.1953 22.7725L24.5942 19.1713C24.1366 18.7138 23.3946 18.7138 22.9369 19.1713C22.4792 19.6289 22.4792 20.3709 22.9369 20.8286L26.8139 24.7055C25.9139 25.6407 23.9935 27.2169 19.828 29.4677ZM37.1869 17.573C35.3205 17.573 33.5657 16.8461 32.246 15.5263L30.3603 13.6406H32.5521C34.9633 13.6406 36.9895 15.3216 37.5205 17.573H37.1869Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip2">
                          <rect width={40} height={40} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </small>
                  <span className="circle bg-info" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalUserWorkoutPrograms}
                </h2>
                <span className="fs-14">Diet Programs</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="card ">
              <div className="card-body p-4">
                <div className="d-inline-block mb-4 ms--12 position-relative donut-chart-sale">
                  <span
                    className="donut1"
                    data-peity='{ "fill": ["rgb(242, 255, 253)", "rgba(255, 255, 255, 1)"], "innerRadius": 45, "radius": 10 }'
                  >
                    7/7
                  </span>
                  <small className="text-primary">
                    <i
                      className="fa-solid fa-dumbbell"
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </small>
                  <span className="circle bg-success" />
                </div>
                <h2 className="fs-24 text-black font-w600 mb-0">
                  {adminDashboardStats.totalUserDietPrograms}
                </h2>
                <span className="fs-14 ">Workout Programs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-9 col-xxl-8">
            <div className="card">
              <div className="card-header flex-wrap pb-0 border-0">
                <div className="me-auto pe-3 mb-2">
                  <h4 className="text-black fs-20">Workout Statistic</h4>
                  <p className="fs-13 mb-2 mb-sm-0 text-black">
                    Activities performed
                  </p>
                </div>
              </div>
              <div className="card-body ">
                <DashboardAdminCharts />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="text-black fs-20 mb-0">Workout Progress</h4>
              </div>
              <div className="card-body text-center">
                {/* <div id="radialBar" /> */}
                <RadialChart />

                <br></br>
                <Link
                  to="/dashboard/admin/workoutplan"
                  className="btn btn-outline-primary rounded"
                >
                  See Workout Plan
                </Link>
              </div>
            </div>
          </div>
          <Nutrients />
          <div className="col-xl-9 col-xxl-8">
            <div className="card">
              <div className="card-header d-sm-flex d-block pb-0 border-0">
                <div className="me-auto pe-3">
                  <h4 className="text-black fs-20">Calories Chart</h4>
                  <p className="fs-13 mb-0 text-black">
                    Analytics based on Calories burned
                  </p>
                </div>
              </div>
              <div className="card-body">
                {/* <div id="chartTimeline11" /> */}
                <CalorieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardAdmin;

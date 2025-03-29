// import { useEffect } from "react";
// import UpdateProfile from "./UpdateProfile";

// function Settings() {

//   return (
//     <>
//       <div className="content-body">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-xl-3 col-lg-4">
//               <div className="clearfix">
//                 <div className="row">
//                   <div className="d-flex justify-content-center align-items-center min-vh-100">
//                     <div
//                       className="card p-4 shadow-sm"
//                       style={{ maxWidth: "700px", width: "100%" }}
//                     >
//                       <div className="mb-3 text-center">
//                         <img
//                           src="/assets/images/profile/ava.jpg"
//                           alt="User"
//                           className="img-fluid rounded-circle"
//                           width={150}
//                         />
//                       </div>
//                       <h3 style={{ textAlign: "center" }}>John Doe</h3>
//                       <p style={{ textAlign: "center" }}>
//                         Fitness Tracker Profile
//                       </p>
//                       <div className="text-start">
//                         <ul className="list-group list-group-flush">
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Name:</strong>{" "}
//                             <span className="text-black">John Doe</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Email:</strong>{" "}
//                             <span className="text-black">
//                               john.doe@example.com
//                             </span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Date of Birth:</strong>{" "}
//                             <span className="text-black">01/01/1990</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Blood Group:</strong>{" "}
//                             <span className="text-black">O+</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Activity Level:</strong>{" "}
//                             <span className="text-black">Moderate</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Goal:</strong>{" "}
//                             <span className="text-black">Lose 5 kg</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Height:</strong>{" "}
//                             <span className="text-black">175 cm</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Weight:</strong>{" "}
//                             <span className="text-black">75 kg</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Member Since:</strong>{" "}
//                             <span className="text-black">January 2020</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Total Calories Burned:</strong>{" "}
//                             <span className="text-danger">12,450 kcal</span>
//                           </li>
//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Gender:</strong>{" "}
//                             <span className="text-black">Male</span>
//                           </li>

//                           <li className="list-group-item d-flex justify-content-between">
//                             <strong>Weekly Progress:</strong>{" "}
//                             <span className="fw-bold">81%</span>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-9 col-lg-8">
//               <div className="card card-bx m-b30">
//                 <div className="card-header">
//                   <h6 className="title">Update Profile</h6>
//                 </div>
//                 <div className="card-body">
//                   <div className="basic-form">
//                     <UpdateProfile />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Settings;
import { useEffect, useState } from "react";
import UpdateProfile from "./UpdateProfile";
import axios from "axios";

function Settings() {
  // Define state to store profile data
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    dob: "",
    bloodGroup: "",
    activityLevel: "",
    goal: "",
    height: "",
    weight: "",
    memberSince: "",
    totalCaloriesBurned: "",
    gender: "",
    weeklyProgress: "",
    profilePic: "",
  });

  // Fetch profile data when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // const response = await fetch(
        //   "http://localhost:3000/common/get-profile",
        //   {
        //     method: "GET",
        //     credentials: "include", // Include credentials (cookies) if needed
        //   }
        // );
        const response = await axios.get(
          "http://localhost:3000/common/get-profile",
          {
            withCredentials: true, // Ensure cookies are included in the request
          }
        );
        if (response.data.success) {
          const data = response.data;
          const formattedDob = new Date(data.user.dob).toLocaleDateString(
            "en-CA"
          ); // "en-CA" for yyyy-mm-dd format
          const formattedMemberSince = new Date(
            data.user.created_at
          ).toLocaleDateString("en-CA");

          // Assuming the response structure is similar to this
          setProfileData({
            name: data.user.name,
            email: data.user.email,
            dob: formattedDob,
            bloodGroup: data.profile.blood_group,
            activityLevel: data.profile.activity_type,
            goal: data.profile.goal,
            height: data.profile.height,
            weight: data.profile.weight,
            memberSince: formattedMemberSince,
            totalCaloriesBurned: 1233,
            gender: data.user.gender,
            weeklyProgress: 123,
            profilePic: data.user.profilePic,
          });
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="clearfix">
                <div className="row">
                  <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <div
                      className="card p-4 shadow-sm"
                      style={{ maxWidth: "700px", width: "100%" }}
                    >
                      <div className="mb-3 text-center">
                        <img
                          src={profileData.profilePic}
                          alt="User"
                          className="img-fluid rounded-circle"
                          width={150}
                        />
                      </div>
                      <h3 style={{ textAlign: "center" }}>
                        {profileData.name}
                      </h3>
                      <p style={{ textAlign: "center" }}>
                        Fitness Tracker Profile
                      </p>
                      <div></div>
                      <div className="text-start">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Name:</strong>{" "}
                            <span className="text-black">
                              {profileData.name}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Email:</strong>{" "}
                            <span className="text-black">
                              {profileData.email}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Date of Birth:</strong>{" "}
                            <span className="text-black">
                              {profileData.dob}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Blood Group:</strong>{" "}
                            <span className="text-black">
                              {profileData.bloodGroup}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Activity Level:</strong>{" "}
                            <span className="text-black">
                              {profileData.activityLevel}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Goal:</strong>{" "}
                            <span className="text-black">
                              {profileData.goal}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Height:</strong>{" "}
                            <span className="text-black">
                              {profileData.height}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Weight:</strong>{" "}
                            <span className="text-black">
                              {profileData.weight}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Member Since:</strong>{" "}
                            <span className="text-black">
                              {profileData.memberSince}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Total Calories Burned:</strong>{" "}
                            <span className="text-danger">
                              {profileData.totalCaloriesBurned}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Gender:</strong>{" "}
                            <span className="text-black">
                              {profileData.gender}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Weekly Progress:</strong>{" "}
                            <span className="fw-bold">
                              {profileData.weeklyProgress}%
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <div className="card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Update Profile</h6>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <UpdateProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;

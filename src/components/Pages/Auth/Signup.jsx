import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import useSignup from "../../../hooks/useSignup";

const initialFormData = {
  firstname: "",
  lastname: "",
  email: "",
  gender: "",
  dob: "",
  profilePic: null,
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialFormData);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const { signup, loading } = useSignup();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProfilePicFile(e.target.files[0]);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstname) errors.firstname = "First Name is required";
    if (!formData.lastname) errors.lastname = "Last Name is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.dob) errors.dob = "Date of Birth is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!profilePicFile) errors.profilePic = "Profile picture is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const uploadProfilePic = async () => {
    const formDataObj = new FormData();
    formDataObj.append("file", profilePicFile);
    formDataObj.append("upload_preset", "insightstracker"); // Replace with your Cloudinary preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxckq9hel/image/upload", // Replace with your Cloudinary URL
        {
          method: "POST",
          body: formDataObj,
        }
      );
      const data = await response.json();

      return data.secure_url;
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      return null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before proceeding
    if (!validateForm()) return;

    // Handle Profile Picture Upload
    const profilePicUrl = await uploadProfilePic();
    if (!profilePicUrl) {
      return;
    }
    // Set the uploaded profile picture URL to formData
    // setFormData((prev) => ({
    //   ...prev,
    //   profilePic: profilePicUrl, // Set the image URL into the formData
    // }));
    const dataToSend = {
      ...formData,
      profilePic: profilePicUrl,
    };
    // After profile picture is uploaded and form data is updated
    console.log("Form is valid, submitting data", dataToSend);
    await signup(dataToSend);
    // window.location.href = "/auth/verify"; // Redirect to the verification page
  };

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div className="authincation h-100">
      <div className="container h-100">
        <div
          className="row justify-content-center h-100 align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-4">
                      <Link to="/">
                        <svg
                          width="200"
                          height="58.17773202441991"
                          viewBox="0 0 294.01971174847563 36"
                          className="looka-1j8o68f"
                        >
                          <defs id="SvgjsDefs3427"></defs>
                          <g
                            id="SvgjsG3428"
                            transform="matrix(1.0975608734911595,0,0,1.0975608734911595,1.0536584804201377,-8.341462010503443)"
                            fill="#111111"
                          >
                            <path d="M-0.96 40 l5.64 -32 l4 0 l-5.64 32 l-4 0 z M7.04 40 l5.64 -32 l3.6 0 l1.8 19.6 l0 -0.4 l3.4 -19.2 l4 0 l-5.64 32 l-3.6 0 l-2.12 -17.6 l-0.04 0.4 l-3.04 17.2 l-4 0 z M24.76 30.240000000000002 l4.04 0 c-0.84 5.16 -0.6 6.16 0.84 6.16 c1.96 0 2.24 -1.64 3 -6 c1.12 -6.4 -7.08 -4.68 -5.6 -13.2 c0.88 -5 1.72 -9.6 7.72 -9.6 c4.44 0 5.2 2.52 4.4 8.56 l-4 0 c0.6 -4.36 0.32 -5.36 -0.96 -5.36 c-1.96 0 -2.36 2.16 -3.12 6.4 c-1.08 6.2 7.28 4 5.64 13.2 c-0.96 5.6 -1.76 10 -7.8 10 c-4.64 0 -5.24 -2.76 -4.16 -10.16 z M38.24 40 l5.64 -32 l4 0 l-5.64 32 l-4 0 z M48.800000000000004 23.16 c1.96 -11.16 2.76 -15.56 8.76 -15.56 c4.56 0 5.2 2.52 4.4 8.56 l-3.72 0 c0.6 -4.36 0.36 -5.36 -1.24 -5.36 c-2.24 0 -2.6 1.96 -4.44 12.36 c-2.04 11.56 -2.32 13.24 -0.08 13.24 c2.12 0 2.52 -1.52 4 -10 l-2.64 0 l0.56 -3.2 l6.4 0 l-0.28 1.56 c-1.96 11.2 -2.76 15.64 -8.76 15.64 s-5.2 -4.44 -2.96 -17.24 z M61.04 40 l5.64 -32 l4 0 l-2.4 13.6 l4 0 l2.4 -13.6 l4 0 l-5.64 32 l-4 0 l2.68 -15.2 l-4 0 l-2.68 15.2 l-4 0 z M79.44 40 l5 -28.4 l-4 0 l0.64 -3.6 l12 0 l-0.64 3.6 l-4 0 l-5 28.4 l-4 0 z M90.75999999999999 30.240000000000002 l4.04 0 c-0.84 5.16 -0.6 6.16 0.84 6.16 c1.96 0 2.24 -1.64 3 -6 c1.12 -6.4 -7.08 -4.68 -5.6 -13.2 c0.88 -5 1.72 -9.6 7.72 -9.6 c4.44 0 5.2 2.52 4.4 8.56 l-4 0 c0.6 -4.36 0.32 -5.36 -0.96 -5.36 c-1.96 0 -2.36 2.16 -3.12 6.4 c-1.08 6.2 7.28 4 5.64 13.2 c-0.96 5.6 -1.76 10 -7.8 10 c-4.64 0 -5.24 -2.76 -4.16 -10.16 z M106.64 40 l5 -28.4 l-4 0 l0.64 -3.6 l12 0 l-0.64 3.6 l-4 0 l-5 28.4 l-4 0 z M117.04 40 l5.64 -32 l6.48 0 c4.12 0 5.08 2.52 4.24 7.36 c-0.8 4.36 -1.76 6.84 -3.2 8.04 l-0.04 0.24 c0.96 0.36 0.96 2.24 0.56 6.92 l-0.88 9.44 l-4 0 l1.16 -9.44 c0.56 -4.76 0 -5.76 -1.2 -5.76 l-2.08 0 l-2.68 15.2 l-4 0 z M124.28 21.6 l2.48 0 c1.4 0 2.04 -1.4 2.92 -6.24 c0.52 -3.16 0.12 -4.16 -1.08 -4.16 l-2.48 0 z"></path>
                          </g>
                          <g
                            id="SvgjsG3429"
                            transform="matrix(0.39999999999999997,0,0,0.39999999999999997,147.03471755981445,-1.9999999999999998)"
                            fill="#111111"
                          >
                            <path
                              xmlns="http://www.w3.org/2000/svg"
                              d="M83.695,89.393c-0.34-0.069-0.768-0.146-1.231-0.227c-1.166-0.206-2.619-0.462-3.289-0.748  c-3.937-1.675-4.194-4.966-4.521-9.132l-0.019-0.231c-0.095-1.199-0.136-2.438-0.177-3.636c-0.065-1.933-0.134-3.931-0.422-5.874  c-0.392-2.652-1.163-4.235-4.112-5.004c-1.138-0.297-2.287-0.678-3.399-1.045c-1.989-0.656-4.046-1.335-6.183-1.601  c-0.703-0.087-1.406-0.208-1.93-0.475c0.369-0.746,0.853-2.436,1.588-6.258l0.029-0.153c1.12-5.697,1.532-12.973-2.862-15.285  c-1.778-0.936-2.433-1.712-3.604-3.391c-0.223-0.317-0.408-0.563-0.565-0.771c-0.554-0.733-0.669-0.887-0.815-2.21  c-0.784-7.094-3.862-13.206-6.838-19.117c-0.402-0.8-0.497-1.954-0.279-3.432c0.14-0.949,0.171-2.295,0.071-3.062  c-0.055-0.425-0.846-1.444-1.162-1.636c-0.136-0.081-0.283-0.179-0.437-0.281C42.956,5.438,42.294,5,41.68,5  c-0.281,0-0.527,0.088-0.727,0.258c-0.725-0.041-1.183,0.139-1.448,0.527c-0.423,0.619-0.095,1.46,0.194,2.201  c0.086,0.222,0.169,0.43,0.214,0.604c0.138,0.543-0.017,1.064-0.18,1.617c-0.163,0.552-0.332,1.122-0.222,1.747  c0.24,1.364,0.849,2.111,1.682,3.02c0.66,0.718,1.011,1.639,1.384,2.614l0.136,0.356c0.449,1.158,0.738,2.387,1.018,3.575  c0.369,1.57,0.751,3.193,1.507,4.717c0.634,1.277,0.786,2.521,0.962,3.959c0.005,0.045,0.011,0.089,0.017,0.134  c-0.027-0.039-0.056-0.082-0.087-0.13c-0.174-0.268-0.437-0.671-0.987-0.671l-0.178,0.015c-0.29,0.046-0.495,0.259-0.755,0.529  c-0.48,0.498-1.206,1.252-2.7,1.424c-2.833,0.325-3.237,2.576-3.626,4.754c-0.419,2.347,0.406,4.479,2.454,6.339  c0.18,0.163,0.36,0.296,0.54,0.415c-0.042,0.157-0.07,0.319-0.07,0.488c0,1.186,1.113,2.146,2.485,2.146  c1.274,0,2.312-0.83,2.457-1.896c0.266,0.048,0.538,0.116,0.824,0.244c0.336,0.15,0.598,0.481,0.816,0.903  c0.073,0.157,0.124,0.249,0.14,0.276c0.389,0.908,0.606,2.152,0.793,3.234c0.142,0.819,0.275,1.593,0.47,2.158  c0.851,2.464,0.768,5.627-1.335,7.139c-0.66,0.475-1.269,0.84-1.858,1.194c-1.814,1.09-3.247,1.95-4.048,4.773  c-0.633,2.23-2.479,4.184-4.263,6.072c-0.659,0.697-1.282,1.357-1.847,2.036c-1.238,1.488-2.132,2.562-3.87,3.329  c-3.092,1.363-6.3,2.917-8.559,5.562c-0.806,0.942-1.464,1.983-2.1,2.989c-0.52,0.821-1.057,1.67-1.661,2.44  c-0.377,0.479-0.896,0.977-1.445,1.501c-1.254,1.2-2.674,2.56-2.873,4.241c-0.081,0.684,0.075,1.261,0.462,1.718  c0.899,1.059,2.821,1.144,4.224,1.207c0.284,0.013,0.546,0.024,0.771,0.043l0.356,0.037C21.307,94.9,22.245,95,23.161,95  c1.5,0,2.384-0.263,2.785-0.827c0.167-0.236,0.324-0.64,0.121-1.218c-0.385-1.096-1.546-1.297-2.57-1.474  c-0.676-0.117-1.374-0.238-1.618-0.593c-0.128-0.187-0.154-0.48-0.077-0.873c0.324-1.647,2.143-2.69,3.747-3.612  c0.587-0.336,1.142-0.655,1.621-0.995c0.745-0.528,1.44-1.216,2.113-1.88c0.968-0.957,1.969-1.946,3.088-2.424  c0.783-0.336,1.59-0.581,2.369-0.819c1.069-0.326,2.174-0.662,3.271-1.238c3.271-1.717,5.931-4.072,8.375-6.336l0.462-0.433  c1.539-1.449,3.035-2.777,4.918-2.387l0.828,0.175c3.971,0.84,7.702,1.62,11.88,1.532c2.954-0.074,3.026,0.31,3.149,2.126  c0.037,0.562,0.085,1.26,0.239,2.057c0.343,1.768,0.988,3.439,1.612,5.057c0.741,1.924,1.509,3.911,1.733,6.014  c0.036,0.341,0.017,0.786-0.005,1.258c-0.056,1.256-0.125,2.82,0.865,3.671c0.46,0.396,1.102,0.588,1.964,0.588  c0.745,0,1.547-0.143,2.253-0.27c0.447-0.079,0.871-0.154,1.189-0.175c1.084-0.074,2.196,0.02,3.278,0.109  c0.993,0.083,2.056,0.165,3.04,0.132c0.94-0.023,1.284-0.579,1.294-1.092C85.104,90.281,84.364,89.429,83.695,89.393z M57.662,61.11  c-0.051-0.021-0.099-0.042-0.161-0.068c0.043-0.024,0.1-0.046,0.181-0.046L57.662,61.11z M59.002,54.972  c-0.908,4.72-1.391,5.818-1.53,6.058c-1.205-0.521-4.43-1.976-5.793-3.204c-0.946-0.851-1.562-1.281-1.929-1.504  c0.764-1.803,0.669-4.029,0.051-5.925c0.948,0.015,3.094,0.084,5.776,0.396c2.229,0.258,3.447,0.015,4.062-0.215  c-0.133,1.538-0.367,3.015-0.606,4.235L59.002,54.972z M50.384,68.858c-0.041,0.006-0.08,0.014-0.119,0.021l0.058-0.039  L50.384,68.858z M46.148,25.785c-0.703-1.418-1.055-2.914-1.428-4.497c-0.288-1.223-0.585-2.486-1.059-3.71l-0.135-0.352  c-0.39-1.021-0.793-2.078-1.585-2.94c-0.76-0.828-1.236-1.41-1.429-2.507c-0.068-0.39,0.054-0.804,0.195-1.282  c0.186-0.63,0.397-1.343,0.189-2.157c-0.053-0.207-0.148-0.458-0.251-0.723c-0.137-0.352-0.422-1.082-0.302-1.259  c0.023-0.032,0.268-0.127,0.755-0.068l0.303,0.034l0.173-0.251c0.034-0.049,0.052-0.057,0.104-0.057  c0.309,0,0.879,0.379,1.296,0.656c0.168,0.11,0.328,0.218,0.459,0.295c0.16,0.124,0.64,0.771,0.693,0.904  c0.088,0.679,0.057,1.928-0.069,2.784c-0.249,1.688-0.122,3.047,0.377,4.037c2.936,5.831,5.971,11.86,6.735,18.772  c0.17,1.533,0.365,1.849,1.016,2.71c0.15,0.199,0.328,0.436,0.542,0.74c0.845,1.211,1.471,2.008,2.396,2.72  c0.051,0.611,0.112,1.531,0.112,2.43c0,1.525-0.847,2.966-2.542,3.982c-1.22,0.731-2.798,0.921-3.595,0.971  c-0.167-0.847-0.379-1.672-0.696-2.367h0c0,0-0.001-0.003-0.002-0.003c-0.042-0.093-0.083-0.186-0.13-0.272  c-0.167-0.386-0.45-1.186-0.579-2.447c-0.14-1.365-0.083-3.386-0.037-5.009c0.021-0.72,0.039-1.374,0.039-1.887  c0-1.07-0.16-2.486-0.285-3.427l0,0l-0.005-0.038c-0.028-0.208-0.053-0.389-0.075-0.538c-0.044-0.327-0.083-0.646-0.123-0.958  C47.029,28.605,46.859,27.219,46.148,25.785z M44.941,30.778c0.088-0.092,0.196-0.203,0.184-0.234  c0.038,0.034,0.106,0.14,0.152,0.21c0.182,0.28,0.488,0.699,1.104,0.829c0.124,0.908,0.298,2.385,0.298,3.45  c0,0.505-0.018,1.149-0.038,1.857c-0.009,0.324-0.018,0.666-0.027,1.014c-0.442,0.012-1.092-0.015-1.625-0.225  c-0.896-0.354-1.033-0.218-1.033-1.006c0-0.787,0.191-0.978,0.544-1.304s1.005-0.814-0.055-0.896  c-1.06-0.081-1.793-0.325-2.01-0.733c-0.133-0.249-0.357-0.854-0.511-1.285C43.58,32.174,44.46,31.277,44.941,30.778z   M37.539,78.147c-1.012,0.531-2.023,0.839-3.095,1.165c-0.805,0.246-1.638,0.5-2.473,0.856c-1.295,0.554-2.367,1.612-3.402,2.635  c-0.673,0.666-1.31,1.294-1.987,1.775c-0.439,0.312-0.973,0.618-1.538,0.942c-1.792,1.029-3.825,2.195-4.239,4.298  c-0.132,0.671-0.052,1.226,0.237,1.646c0.486,0.707,1.399,0.864,2.282,1.019c0.965,0.167,1.61,0.313,1.785,0.81  c0.071,0.202,0.023,0.27,0.008,0.292c-0.047,0.066-0.363,0.398-1.955,0.398c-0.861,0-1.766-0.096-2.306-0.153l-0.379-0.039  c-0.236-0.02-0.512-0.032-0.811-0.046c-1.148-0.052-2.882-0.129-3.495-0.85c-0.2-0.236-0.275-0.543-0.228-0.94  c0.156-1.318,1.38-2.491,2.566-3.625c0.576-0.552,1.12-1.072,1.542-1.608c0.636-0.811,1.188-1.683,1.721-2.525  c0.618-0.976,1.256-1.985,2.014-2.871c2.12-2.482,5.212-3.977,8.196-5.292c1.956-0.863,2.964-2.075,4.256-3.628  c0.529-0.637,1.141-1.284,1.789-1.97c0.318-0.336,0.643-0.683,0.966-1.036c0.732,0.471,2.298,1.423,3.79,1.982  c1.191,0.447,1.927,0.85,2.34,1.11C42.884,74.543,40.45,76.618,37.539,78.147z M83.765,91.147c-0.965,0.039-1.96-0.046-2.926-0.128  c-1.117-0.092-2.283-0.188-3.43-0.111c-0.375,0.025-0.824,0.105-1.3,0.19c-0.665,0.118-1.42,0.253-2.075,0.253  c-0.607,0-1.034-0.112-1.301-0.342c-0.616-0.529-0.561-1.765-0.513-2.854c0.023-0.512,0.045-0.995,0-1.411  c-0.238-2.235-1.03-4.287-1.795-6.271c-0.608-1.577-1.237-3.206-1.563-4.885c-0.143-0.734-0.186-1.371-0.223-1.932  c-0.143-2.113-0.351-3.176-4.188-3.074c-2.042,0.045-3.989-0.13-5.921-0.419c0.632-0.487,1.652-1.404,2.468-2.763  c0.92-1.534,1.481-3.19,1.723-3.993c1.179,0.304,2.344,0.678,3.484,1.056c1.127,0.371,2.292,0.756,3.462,1.062  c2.217,0.577,2.97,1.513,3.363,4.17c0.279,1.887,0.346,3.854,0.41,5.759c0.042,1.21,0.084,2.46,0.181,3.681l0.018,0.231  c0.326,4.15,0.634,8.072,5.136,9.988c0.778,0.332,2.231,0.588,3.512,0.813c0.454,0.08,0.872,0.153,1.275,0.231  c0.083,0.005,0.271,0.13,0.405,0.353c0.108,0.18,0.112,0.31,0.102,0.332C84.068,91.083,84.006,91.142,83.765,91.147z"
                            ></path>
                          </g>
                          <g
                            id="SvgjsG3430"
                            transform="matrix(1.0975608734911595,0,0,1.0975608734911595,186.10752647841602,-8.341462010503443)"
                            fill="#111111"
                          >
                            <path d="M1.6 23.16 c1.96 -11.16 2.76 -15.56 8.36 -15.56 c4.12 0 4.8 2.52 4 8.56 l-3.72 0 c0.6 -4.36 0.36 -5.36 -0.84 -5.36 c-1.84 0 -2.2 1.96 -4.04 12.36 c-2.04 11.56 -2.32 13.24 -0.48 13.24 c1.32 0 1.88 -1 2.88 -6.16 l3.76 0 c-1.56 7.4 -3.04 10.16 -7.36 10.16 c-5.6 0 -4.8 -4.44 -2.56 -17.24 z M12.600000000000001 40 l5.64 -32 l4 0 l-2.24 12.68 l6.24 -12.68 l4 0 l-7.48 15.2 l1.84 16.8 l-4 0 l-1.52 -14 l-2.48 14 l-4 0 z M27 40 l5.64 -32 l9.2 0 l-0.56 3.2 l-5.2 0 l-1.84 10.4 l4.4 0 l-0.56 3.2 l-4.4 0 l-1.96 11.2 l5.2 0 l-0.72 4 l-9.2 0 z M39 40 l5.64 -32 l6.48 0 c4.12 0 5.08 2.52 4.24 7.36 c-0.8 4.36 -1.76 6.84 -3.2 8.04 l-0.04 0.24 c0.96 0.36 0.96 2.24 0.56 6.92 l-0.88 9.44 l-4 0 l1.16 -9.44 c0.56 -4.76 0 -5.76 -1.2 -5.76 l-2.08 0 l-2.68 15.2 l-4 0 z M46.24 21.6 l2.48 0 c1.4 0 2.04 -1.4 2.92 -6.24 c0.52 -3.16 0.12 -4.16 -1.08 -4.16 l-2.48 0 z M55.36 37.96 c0.28 -1.52 0.88 -2.04 2.4 -2.04 s1.96 0.52 1.68 2.04 s-0.88 2.04 -2.4 2.04 s-1.96 -0.52 -1.68 -2.04 z M63.080000000000005 40 l5.64 -32 l8.4 0 l-0.56 3.2 l-4.4 0 l-2.12 12 l3.6 0 l-0.56 3.2 l-3.6 0 l-2.4 13.6 l-4 0 z M74.28000000000002 40 l5.64 -32 l4 0 l-5.64 32 l-4 0 z M84.68 40 l5 -28.4 l-4 0 l0.64 -3.6 l12 0 l-0.64 3.6 l-4 0 l-5 28.4 l-4 0 z"></path>
                          </g>
                        </svg>
                      </Link>
                    </div>
                    <h4 className="text-center mb-4">Sign Up</h4>

                    <form
                      className="needs-validation"
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>First Name</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="Enter First Name"
                            required
                          />
                          {formErrors.firstname && (
                            <div className="text-danger">
                              {formErrors.firstname}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>Last Name</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Enter Last Name"
                            required
                          />
                          {formErrors.lastname && (
                            <div className="text-danger">
                              {formErrors.lastname}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>Gender</strong>
                          </label>
                          <select
                            name="gender"
                            className="form-control"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Choose Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          {formErrors.gender && (
                            <div className="text-danger">
                              {formErrors.gender}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>Date of Birth</strong>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            max={new Date().toISOString().split("T")[0]}
                          />
                          {formErrors.dob && (
                            <div className="text-danger">{formErrors.dob}</div>
                          )}
                        </div>
                      </div>
                      <div className="form-group position-relative">
                        <label className="mb-1">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Email"
                          required
                        />
                        {formErrors.email && (
                          <div className="text-danger">{formErrors.email}</div>
                        )}
                      </div>
                      <div className="form-group position-relative">
                        <label className="mb-1">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter Password"
                          required
                        />
                        {formErrors.password && (
                          <div className="text-danger">
                            {formErrors.password}
                          </div>
                        )}
                      </div>

                      <div className="form-group position-relative">
                        <label className="mb-1">
                          <strong>Confirm Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm Password"
                          required
                        />
                        {formErrors.confirmPassword && (
                          <div className="text-danger">
                            {formErrors.confirmPassword}
                          </div>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Profile Picture</strong>
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="profilePic"
                          onChange={handleFileChange}
                          accept="image/*"
                          required
                        />
                        {formErrors.profilePic && (
                          <div className="text-danger">
                            {formErrors.profilePic}
                          </div>
                        )}
                      </div>

                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          {loading ? "Signing up..." : "Sign Up"}
                        </button>
                      </div>
                    </form>

                    <div className="new-account mt-3">
                      <p>
                        Already have an account?{" "}
                        <Link className="text-primary" to="/auth/login">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

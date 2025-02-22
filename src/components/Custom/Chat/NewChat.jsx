import React from "react";

const NewChat = () => {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src="/assets/images/profile/17.jpg"
                    alt="user"
                    className="rounded-circle"
                    width="40"
                  />
                  <h5 className="mb-0 ms-3">User Name</h5>
                </div>
                <hr />
                {/* Search with autocomplete */}
                <div className="search-container position-relative mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                  />
                  {/* Autocomplete dropdown */}
                  <div className="autocomplete-dropdown">
                    {/* Sample user list */}
                    <div className="autocomplete-item d-flex align-items-center py-2 cursor-pointer border-bottom">
                      <img
                        src="/assets/images/avatar/1.jpg"
                        alt="user"
                        className="rounded-circle shadow-sm border border-dark me-2"
                        width="40"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">User Name</h6>
                        <p className="mb-0 text-muted">user@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="chat-list"
                  style={{ height: "60vh", overflowY: "auto" }}
                >
                  <div className="chat-user d-flex align-items-center py-3 cursor-pointer border-bottom">
                    <img
                      src="/assets/images/avatar/1.jpg"
                      alt="user"
                      className="rounded-circle shadow-sm border border-dark"
                      width="40"
                    />
                    <div className="ms-3 w-50">
                      <h6 className="mb-0">Chat User</h6>
                      <p className="mb-0 text-muted text-truncate">
                        Last message here...
                      </p>
                    </div>

                    <div className="ms-auto">
                      <span className="badge bg-primary">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <img
                    src="/assets/images/avatar/1.jpg"
                    alt="user"
                    className="rounded-circle shadow-sm border border-dark"
                    width="40"
                  />
                  <h6 className="mb-0 ms-3">Chat User</h6>
                </div>
              </div>

              <div
                className="card-body"
                style={{ height: "400px", overflowY: "auto" }}
              >
                <div className="chat-message text-start py-3">
                  <p className="mb-2">
                    <img
                      src="/assets/images/avatar/1.jpg"
                      alt="user"
                      className="rounded-circle me-2 shadow-sm"
                      width="30"
                    />
                    Hello, how are you?
                  </p>
                  <small className="text-muted">10:30 AM</small>
                </div>
                <div className="chat-message text-end py-3">
                  <p className="mb-2">
                    <img
                      src="/assets/images/profile/17.jpg"
                      alt="user"
                      className="rounded-circle ms-2 shadow-sm border border-dark"
                      width="30"
                    />
                    I'm doing great! Thanks for asking.
                  </p>
                  <small className="text-muted">10:31 AM</small>
                </div>
              </div>

              <div className="card-footer">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message..."
                    />
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChat;

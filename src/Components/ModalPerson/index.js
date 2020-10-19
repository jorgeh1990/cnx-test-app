import React from "react";
const ModalPerson = ({ handleClose, show, person }) => {
  console.log(person);
  if (!person.UserName) {
      return ""
  }
  const showHideClassName = show ? "modal d-block" : "modal d-none";
  return (
    <div
      className={showHideClassName}
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {`${person.FirstName} ${person.LastName}`}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col">
                <label for="username">Username</label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="UserName"
                  value={person.UserName}
                  readOnly
                />
              </div>
              <div className="col">
                <label for="gender">Gender</label>
                <input
                  id="gender"
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  value={person.Gender}
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="address">Address</label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  placeholder="UserName"
                  value={person.AddressInfo.map((address)=>{
                      return address.Address
                  })}
                  readOnly
                />
              </div>
              <div className="col">
                <label for="city">City</label>
                <input
                  id="city"
                  type="text"
                  className="form-control"
                  placeholder="City"
                  value={person.AddressInfo.map((address)=>{
                    return address.City.Name
                    })}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPerson;

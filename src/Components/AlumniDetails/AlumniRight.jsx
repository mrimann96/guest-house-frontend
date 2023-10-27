import { useState } from 'react';
import '../../style/facultyalumni.css'
import '../../style/MainContainer.css'
import Popup from '../Popup/Popup';
import '../main.css';
export default function AlumniRight({prop}) {
  const {reffirstName,reflastName, refphoneNumber,batch,branch,jobProfile, setReffirstName, setReflastName, setRefphoneNumber, setBatch, setBranch, setJobProfile } = prop;
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  

  // Event handler to update the state when input values change
  const handleInputChange = (e, stateUpdater) => {
    stateUpdater(e.target.value);
  };

  // Event handler for form submission (you can add your logic here)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission action
    // You can add your code to process the form data here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Branch:', branch);
    console.log('Batch:', batch);
    console.log('Phone Number:', phoneNumber);
    console.log('Job Profile:', jobProfile);
  };

  return (
    <div>
      <div className="r">
        <h1 className="rheading">Enter Alumni Details</h1>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="row input">
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="First Name"
              value={reffirstName}
              onChange={(e) => handleInputChange(e, setReffirstName)}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Last Name"
              value={reflastName}
              onChange={(e) => handleInputChange(e, setReflastName)}
            />
          </div>
        </div>
        <div className="row input">
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Branch"
              value={branch}
              onChange={(e) => handleInputChange(e, setBranch)}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Batch"
              value={batch}
              onChange={(e) => handleInputChange(e, setBatch)}
            />
          </div>
        </div>
        <div className="row input">
          <div className="col-md-3 col-sm-12">
            <div className="input-group">
              <input type="text" className="form-control" value="+91" readOnly />
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              value={refphoneNumber}
              onChange={(e) => handleInputChange(e, setRefphoneNumber)}
            />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Current Job Profile"
              value={jobProfile}
              onChange={(e) => handleInputChange(e, setJobProfile)}
            />
          </div>
        </div>
        <div className="mt-auto justify-content-end d-flex">
          <button type="submit" className="btn btn-primary btn-lg rounded register-btn" onClick={openPopup}>
            Register
          </button>
        </div>
      {/* </form> */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

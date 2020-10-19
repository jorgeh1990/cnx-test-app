import React, { useContext, useState } from "react";
import AppContext from "../../AppContext";
import "./ListPeople.css";
import Modal from "../ModalPerson"

function ListPeople() {
  const context = useContext(AppContext);
  const [showModal, setShowModal] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState({})
  
  const showModalHandler = (person)=>{
    setShowModal(true)
    setSelectedPerson(person)
  }

  const hideModalHandler = (person)=>{
    setShowModal(false)
    setSelectedPerson({})
  }

  return (
    <div className="container">
    <ul className="list-group">
      {context.people.map((person) => {
        let iconClass =
          person.Gender === "Male"
            ? "fa fa-male text-info mx-2"
            : " fa fa-female text-danger mx-2";
        return (
          <li
            onClick={() => showModalHandler(person)}
            className="list-group-item"
            key={person.UserName}
          >
            <i className={iconClass}></i>
            {`${person.FirstName} ${person.LastName}`}
          </li>
        );
      })}
    </ul>
    <Modal show={showModal} person= {selectedPerson} handleClose={hideModalHandler}></Modal>
    </div>
  );
}

export default ListPeople;

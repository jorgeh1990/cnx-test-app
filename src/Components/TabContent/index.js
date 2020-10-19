import React, {useState} from "react";
import ListPeople from "../ListPeople";
import TableProducts from "../TableProducts"

function TabContent() {
    const [activeTab, setActibe] = useState("people")
    const handleClick = (id) => {
        setActibe(id)
    }
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist" >
        <li className="nav-item">
          <a
            className={activeTab === "people" ? "nav-link active" : "nav-link"}
            id="home-tab"
            data-toggle="tab"
            href="#people"
            role="tab"
            aria-controls="people"
            aria-selected="false"
            onClick = {() => handleClick("people")}
          >
            People
          </a>
        </li>
        <li className="nav-item">
          <a
            className={activeTab === "products" ? "nav-link active" : "nav-link"}
            id="products-tab"
            data-toggle="tab"
            href="#products"
            role="tab"
            aria-controls="products"
            aria-selected="true"
            onClick = {() => handleClick("products")}
          >
            Products
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className= {activeTab === "people" ? "tab-pane fade show active" : "tab-pane fade"}
          id="people"
          role="tabpanel"
          aria-labelledby="people-tab"
        >
            <ListPeople />
        </div>
        <div
          className= {activeTab === "products" ? "tab-pane fade show active" : "tab-pane fade"}
          id="products"
          role="tabpanel"
          aria-labelledby="products-tab"
        >
            <TableProducts/>
        </div>
      </div>
    </div>
  );
}

export default TabContent;

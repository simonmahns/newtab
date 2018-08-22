import React, { Component } from "react";
import "./popup.css";
import Popup from "reactjs-popup";
// import PropTypes from "prop-types";
// import "./Handler.js";
var links = [];
class PopupFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
    this.setLinks = this.setLinks.bind(this);
    this.update = this.update.bind(this);
    // console.log("eat poo" + props.handler());
  }

  setLinks(e) {
    var tempArray = [];
    for (let i = 0; i < 7; i++) {
      console.log(this["name" + i].value);
      console.log(this["link" + i].value);
      if (this["name" + i].value !== "" && this["link" + i].value !== "") {
        var newLink = {
          link: this["link" + i].value,
          name: this["name" + i].value
        };

        tempArray = tempArray.concat(newLink);
      }
    }

    this.update(tempArray);
    console.log("updatepassed" + tempArray);
    this.props.handler("links");
    e.preventDefault();
  }

  update(link) {
    this.setState(
      {
        links: link
      },
      () => {
        console.log("newSTATE" + links);
      }
    );
  }

  // exportArray = this.state.links;

  // child1.protoTypes = {
  //     callback : PropTypes.func,
  //     }
  //     if (this._inputElement.vale !== "") {
  //       var newShortTermItem = {
  //         text: this._inputElement.value,
  //         key: Date.now()
  //       };

  //       stArray = stArray.concat(newShortTermItem);

  //       let str = JSON.stringify(stArray);
  //       localStorage.setItem("shortTermGoals", str);

  //       this.updateSt();
  //     }
  //     this._inputElement.value = "";
  //     e.preventDefault();
  //   }
  //   updateSt() {
  //     this.setState({
  //       stItems: stArray
  //     });
  //   }
  //   updateLt() {
  //     this.setState({
  //       ltItems: ltArray
  //     });
  //   }
  //   addLongTermItem(e) {
  //     if (this._inputElement.value !== "") {
  //       var newLongTermItem = {
  //         text: this._inputElement.value,
  //         key: Date.now()
  //       };
  //       ltArray = ltArray.concat(newLongTermItem);

  //       let str = JSON.stringify(ltArray);
  //       localStorage.setItem("longTermGoals", str);

  //       this.updateLt();
  //     }
  //     this._inputElement.value = "";
  //     e.preventDefault();

  render() {
    return (
      <Popup
        trigger={<button className="openPopup"> [+] </button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div className="popupMain">
            <a className="closeButton" onClick={close}>
              &times;
            </a>
            <div>
              <div className="popupMain">
                <h2>Customize Quick Links</h2>
                <p>Put your links below, names cannot exceed 7 characters</p>
                <form className="popupColumns">
                  <div className="leftColumn">
                    <h3>Link</h3>
                    <input ref={a => (this.link0 = a)} placeholder="add item" />
                    <input ref={a => (this.link1 = a)} placeholder="add item" />
                    <input ref={a => (this.link2 = a)} placeholder="add item" />
                    <input ref={a => (this.link3 = a)} placeholder="add item" />
                    <input ref={a => (this.link4 = a)} placeholder="add item" />
                    <input ref={a => (this.link5 = a)} placeholder="add item" />
                    <input ref={a => (this.link6 = a)} placeholder="add item" />
                  </div>
                  <div className="rightColumn">
                    <h3>Name</h3>
                    <input ref={a => (this.name0 = a)} placeholder="add item" />
                    <input ref={a => (this.name1 = a)} placeholder="add item" />
                    <input ref={a => (this.name2 = a)} placeholder="add item" />
                    <input ref={a => (this.name3 = a)} placeholder="add item" />
                    <input ref={a => (this.name4 = a)} placeholder="add item" />
                    <input ref={a => (this.name5 = a)} placeholder="add item" />
                    <input ref={a => (this.name6 = a)} placeholder="add item" />
                  </div>
                </form>
                <div className="centering">
                  <button onClick={this.setLinks} className="submitForm">
                    Update Links
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default PopupFile;
// export { exportArray };
// PopupFile.propTypes = {
//   handler: React.PropTypes.func
// };
import React, { Component } from "react";
import Table from "./components/Table";
import Header from "./components/layouts/Header";
import "./App.scss";

class App extends Component {
  state = {
    table: [
      {
        user: "Jane Doe",
        timestamp: 1573256366,
        steps: [
          {
            name: "Remove Screws",
            time: 15,
            result: "success"
          },
          {
            name: "Remove CPU Fan",
            time: 35,
            result: "success"
          },
          {
            name: "Remove Graphics Card",
            time: 13,
            result: "success"
          },
          {
            name: "Remove Old Power Supply",
            time: 57,
            result: "failure"
          },
          {
            name: "Install New Power Supply",
            time: null,
            result: "failure"
          }
        ]
      }
    ]
  };

  timeConverter(timestamp) {
    let x = new Date(timestamp * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let year = x.getFullYear();
    let month = months[x.getMonth()];
    let date = x.getDate();
    let hour = x.getHours();
    let min = x.getMinutes();
    let sec = x.getSeconds();
    let time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  render() {
    return (
      <div class="container my-container">
        <div className="App">
          <Header />
          <div class="infoBlock">
            <h1 className="info">
              {this.state.table.map(item => (
                <h3>{item.user}</h3>
              ))}{" "}
            </h1>
            <h2 className="info">
              {this.state.table.map(item => (
                <h5>{this.timeConverter(item.timestamp)}</h5>
              ))}{" "}
            </h2>
            {/* <h3 className="info">Steps</h3> */}
          </div>
        </div>
        <Table table={this.state.table} />
      </div>
    );
  }
}

export default App;

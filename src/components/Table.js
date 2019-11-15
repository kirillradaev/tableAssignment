import React, { Component } from "react";
import { Emojione } from "react-emoji-render";

class Table extends Component {
  render() {
    return this.props.table.map(data => (
      <div className="data">
        <table className="dataTable">
          <thead>
            <tr class="noHover">
              <h3>Steps</h3>
            </tr>
            <tr class="tableInfo">
              <th>Name</th>
              <th className="time">Time Spent</th>
              <th className="result">Result</th>
            </tr>
          </thead>
          <tbody>
            {data.steps.map(step => (
              <tr>
                <td>{step.name}</td>
                {step.time !== null ? (
                  <td className="right-side time">{step.time} minutes</td>
                ) : (
                  <td className="right-side empty"> - </td>
                )}
                {step.result !== "failure" ? (
                  <td id="success" className="right-side result">
                    <Emojione text="✅" />
                  </td>
                ) : (
                  <td id="failure" className="right-side result">
                    <Emojione text="❌" />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  }
}

export default Table;

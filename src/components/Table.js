import React, { Component } from "react";
import { Emojione } from "react-emoji-render";

class Table extends Component {
  render() {
    return this.props.table.map(data => (
      <div>
        <h1 class="info">Steps</h1>
        <table class="dataTable">
          <thead>
            <tr>
              <th>Name</th>
              <th class=" time">Time Spent</th>
              <th class=" result">Result</th>
            </tr>
          </thead>
          <tbody>
            {data.steps.map(step => (
              <tr>
                <td>{step.name}</td>
                {step.time !== null ? (
                  <td class="right-side time">{step.time} minutes</td>
                ) : (
                  <td class="right-side empty"> - </td>
                )}
                {step.result !== "failure" ? (
                  <td id="success" class="right-side result">
                    <Emojione text="✅" />
                  </td>
                ) : (
                  <td id="failure" class="right-side result">
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

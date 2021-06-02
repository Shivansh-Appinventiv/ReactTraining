import React from "react";

class Listing extends React.Component {
  render() {
    const input = this.props.value;
    return (
      <div>
        <ul className={"listContainer"}>
          {input.listItem.map((text) => {
            return (
              <li>
                <div className={"listStyle"}>
                  <div
                    className={"tickIcon"}
                    style={{
                      borderColor: `transparent transparent ${input.underlineColor} ${input.underlineColor}`,
                    }}
                  ></div>
                </div>
                <div className={"listText"}>{text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Listing;

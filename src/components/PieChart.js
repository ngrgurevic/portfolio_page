import React, { Component } from "react";
import { Chart } from "react-google-charts";
import '../scss/styles.scss';
import '../scss/freelancer.scss';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        loaded: true
      },
      () => {
        this.setState({
          width: document.querySelector("#container").getBoundingClientRect()
            .width
        });
      }
    );

    console.log(document.querySelectorAll("text").length);
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div id="container">
            <Chart
              width={"550px"}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={this.props.data}
              options={{
                backgroundColor: "transparent",
                title: "",
                pieHole: 0.3,
                pieStartAngle: 270,
                slices: {
                  6: {
                    color: "transparent"
                  },
                  0: {
                    color: "#4a0072"
                  },
                  1: {
                    color: '#5c007a'
                  },
                  2: {
                    color: "#9c27b0"
                  },
                  3: {
                    color: "#ab47bc"
                  },
                  4: {
                    color: "#df78ef"
                  },
                  5:{
                    color: "#ee98fb"
                  }
                  
                }
              }}
            />
          </div>
        ) : (
          "Interests"
        )}
      </div>
    );
  }
}

export default PieChart
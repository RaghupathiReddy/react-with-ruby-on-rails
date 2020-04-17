import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    console.log('raghupathi')
    return (
      <div>
        <p>raghu </p>Greeting: {this.props.greeting}
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld

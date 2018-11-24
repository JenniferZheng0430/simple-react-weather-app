import React from 'react'


class Temp extends React.Component {
    render(){
        return <div>
           <span className="temp-value">{this.props.value}</span>
           <span className="temp-unit">{this.props.unit}</span>

        </div>
    }
}

//Props
//temp
//unit

Temp.defaultProps = {
    temp: 0,
    unit: 'c'
}
export default Temp
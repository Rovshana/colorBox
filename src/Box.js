import React from "react"

class Box extends React.Component{
constructor(){
    super()
    this.state = {
        isPanelLight: false
    }
    this.handleChangeState = this.handleChangeState.bind(this)
}

handleChangeState(){
    this.setState({isPanelLight: !this.state.isPanelLight })
}

    render(){
        return(
            <div>
                {this.state.isPanelLight ? <div style={{width: "60px",height: "60px",backgroundColor: "blue",border: "1px solid black"}} onClick={this.handleChangeState}> </div> :  <div style={{width: "60px",height: "60px",backgroundColor: "red",border: "1px solid black"}} onClick={this.handleChangeState}>
            
            
            
            </div>}
            </div>
        )
    }
}

export default Box
{/* <div style={{width: "60px",height: "60px",backgroundColor: "red",border: "1px solid black"}} onClick={this.handleChangeState}>
            
            </div> */}
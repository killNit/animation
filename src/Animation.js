import React from 'react';

export default class Animation extends React.Component {
  state = {
    xPos: 53,
    yPos: 72,
    dX: 3,
    // color: '',
  };

  componentDidMount() {
    this.ticker = setInterval(this.tick, 30);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState.xPos > 449 ) {
      this.setState({
        dX: -3,
        xPos:448,
      });
    }
    if (prevState.xPos < 53) {
      this.setState({
        dX: 3,
        xPos: 53,
      });
    }
    if(prevState.yPos > 490 ) {
      this.setstate({
        dX: -3,
        yPos: 491,
      });
      if(prevState.yPos < 72) {
        this.setState({
          dx: 3,
          yPos: 73,
        });
      }
    }
  }

  tick = () => {
    const { xPos, yPos, dX, color } = this.state;
    this.setState({
      xPos: xPos + dX,
      yPos: yPos + dX,
      // color: 'blue',
    });
  };













 render() {
   const { xPos, yPos } = this.state;
    return (
     <div style={styles.container}>
       <div style={{...styles.animation, top: yPos, left: xPos }}>key</div>
       {/* <div style={{...styles.animation, top: yPos, left: xPos }}>..$$$..</div> */}
     </div>
   );
 }
}


const styles = {
  animation: {
    color: "green",
    fontsize: "50px",
    margin: 0,
    padding: 0,
    position: "absolute",
    top: "75px", 
    left: "55px", 
    border: "5px solid",
  },

  container: {
    position: "realative",
    margin: "50px",
    padding: "25px",
    width: "450px",
    height: "450px",
    backgroundColor: "red",
    border: "3px solid",
    
  },
};
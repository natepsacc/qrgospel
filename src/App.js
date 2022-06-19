
import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './App.css';
function Logo(){

	return(
		<span>
		<a href="https://www.schidt.co" >
	<img  id="TitleLogo" alt="Schidt.co Logo" src="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/logos/june16Logo.svg"/>
		</a>

		</span>
);
}
class App extends Component{
  constructor(props){
    super(props)

    // Initializing states
    this.state = {height:'1000', width:'100vw'}

    // Bind context of 'this'
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)

    // Create reference of DOM object
    this.imgRef = React.createRef()
  }

  componentDidMount(){
    // Saving initial dimension of image as class properties
    this.initialHeight = this.imgRef.current.clientHeight
    this.initialWidth = this.imgRef.current.clientWidth
  }

  // Event handler callback for zoom in
  handleZoomIn(){

    // Fetching current height and width
    const height = this.imgRef.current.clientHeight
    const width = this.imgRef.current.clientWidth

    // Increase dimension(Zooming)
    this.setState({
      width : this.state.height * 2,
    })
  }

  // Event handler callback zoom out
  handleZoomOut(){

    // Assigning original height and width
    this.setState({
      width : "100vw",
    })
  }

  render(){
    const mSrc = "https://dl2.boxcloud.com/api/2.0/files/973083655043/content?preview=true&version=1051813378643&access_token=1!P962wwkM9UV3LIJWaHlejF6rwsEAXc3EnVE-2Lu6gwZcgb1ovW728Rr2_q5Bflsr-Ic75xfNKaYdDmyDByOwqKknZ-fzJqt-jGbxGY1Gw6_Dd8usGVUQHnDblRT3Vi-0LEySK4kU6NRXfhhCn58rOKzGzmObLoGX7b-HJQKNzSislbr-eigwiH_6cGSwj7U57heWD7A8PII3ZTU68YOXdecE05e7CtFOXR4IY9r9bmCbvCgcG127SIDYXzZdd7WZCllZbe8VWXQhgm2jxEEsnYXzkkSZNUAHOT7LIltmeUCRGMeASEv-pavYY7yySp22_oYEyuYd0SrZD6xOEWUkVXuLaObTG9BO2ynBm7tYcyf6EDNqsh0NxmVFpHELQK5NQHOp15V9tK6Og2ZpHzvak1DrOtfQYAysdPpxNQgaAYFhe_17eHprSaEbNY-mIhtnWtXVbj5f51Sob4z5FFaSoYld_XcDENCzhV9CkwrYLWvDhKUz-g4ClcdoYFjoTPkzbkaqLua1IOwes67fV3ipb0zFNthgg7eGotPhvT0dld-IB7xwBuEYB6_x6EqW5nTe8WXGFw9bJBWzJryQm-w_TJ3t0F-NrAd8Irf3ISoxXYyF-MCgRXcSPt2VvYfWO6iwGOmghsmCFcHwTgo5q1xV_n99Pc-Vk8CnHscKpGKIEXy4OtvD&box_client_name=box-content-preview&box_client_version=2.84.0";

    // Assign current height and width to the image
    const imgStyle = { height : this.state.height, width: this.state.width}
    return(
      <div>
      <div className="controls">
      <Logo/>
        <button className="button" onClick={this.handleZoomIn}>zoom</button><br/>
        <button  className="button" onClick={this.handleZoomOut}>reset</button>
      </div>
      <div className='imgIndex'>
        <LazyLoadImage
        style={imgStyle}
        ref={this.imgRef}
           threshhold='1000'

              effect="blur"
             alt="A Sheet of red QR codes that contain the Four Gospels.  The Red QR codes are clustered in 4 seperate grids, with each grid resembling a depction of the Author when viewed in entirety."
             src={mSrc} // use normal <img> attributes as props
              placeholderSrc="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/gif/loading.gif"
              />

</div>
      </div>
    )
  }
}
export default App


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
    this.state = {height:'30', width:'100vw'}

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
      width : this.state.height + 1 + "vh",
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
    const mSrc = "https://dl2.boxcloud.com/api/2.0/files/973076522497/content?preview=true&version=1051805679697&access_token=1!d3eEvon4QOv3zW3FeghLW_fpklU_HBD2oU47Mxq8-bBvADEh_xUywtFFwA-1EOTOSpaVa5S7rjnGl-_VsyjB9fxjtppIpmOYNe2deZOcUQdqW-IGHslj4lCLNDBycn-Vh7EP93PYOOv6qG5Q3rANTmtyiXerr_czUsCilEv56OS2lvC6QzCI8Jak5lNmXVlM6dKg5OR24X_0ZO6SNO_wIOPYd8Kr9e4KB-eHEhGc7vKQho4NUbPVbk2Iw8oU3o1C1itTeaAfIW3bRCwJTdBut_OAWAVpdtDiv6kKreh4Q9CfYDnlYNoM3DnuGWdZ--JeUhsAkKnlKlBbcBlTYCFu18-ObIwatQJRUkVFWLkFUSwFyBtcQlJ_uEPCg0hafsyCVGCqfiDUC3UWnwgqzUQoMPnbBnb8n40xAp9Ebd7Cz5sieSSiHvax2eEjPb17W_vKKJfVtF9KqPq5WN96L1-7P5nNNvWUcR49iLN4hkIT8rdtMi6X2rPibwhv0UX1cGjnlNufiUxaNjYQxDuPt19d64e5Twf8TeJ_B638Ui_i3GtF4TEXAbXZzDNF3AfPJaATDE0pCA7lU5VrluPXCURFM8TlYT3JJEo1jJB10aA7cBGAW6ghM6lYpVPc9BfVnvaTBN9sORirMIxEUKdzIqneqKglf5y3PvShnXrix65Bi30Cm7_w&box_client_name=box-content-preview&box_client_version=2.84.0";

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

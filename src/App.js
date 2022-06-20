
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
    this.state = {height:'1700', width:'100vw'}

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
    const mSrc = "https://dl2.boxcloud.com/api/2.0/files/973148810735/content?preview=true&version=1051884755135&access_token=1!44xyLnqBaBAPjrBPnWeqrO8jsjmMnvIky1yCSKwLFIzWQER8XpMsFUcYwl85QuWTpHvGb87M69D_qrlQnOdgRYl6Rk24fci8jY0XUS6KFphNv5FuRmn8vSNSF39tSe9zFUyw9H7rU-1V17n8Kf0aCoVNVhB6TgLWWwiEWfhcGGG-_Sjw_KjXaE9GaPUkJhlLO_mOhy0ulbJDTGATXfH9tO94e9KwZW4pZJPkAJPYk1dFXlIzbsBKqPdR8wWnXCTrw6CI8GLRyJ3mfUs_cnYtcYsJIvYCZkuuW25LRrG11xPdj-_aBmCacYUJ2Et2ZHaO5T4guajLyfpMUjCJ7t7sat1c3FdxJbwy-_Z4NIWpKiYyTA7JZx16cgT-_OmhjnFgWE0sgvqrDJebiXi21iRcgq1UsxDoa23IGnFADDiFmrDY0YHOWnBK9nsqJ8XVbE5sWHS03bCEXHhS9e61m9tp-cApVDAMBBIHMgf6-Kdr8X7q8jCxl3zW5J53xt4zNths2A1GaMlyyjU0VdlV3UjuVK_SVXa0VixTOUhwHHBEhI6rpVArc4aIIA3el1fTzqvg8Fd3aSzc8FfbqxrxT4qr4nmz-UnCn7SDdFvQm8OCcifx10KNPy0csHeZdf8LimQh-AzvQRUOu__2AezMTAU1tFfoGhsAXbgUoyrOrDANPvkDVxRt&box_client_name=box-content-preview&box_client_version=2.84.0"
		const mSrcT = "https://dl2.boxcloud.com/api/2.0/files/973148776264/content?preview=true&version=1051884904264&access_token=1!hdLr91BDyR1iiTgRUYxnHGFImSPd5ra_DoVTIBbQzFfA2PjuPFgVMCvFsEVQ2O-IE4qTt6xhXYuq2HMOfgivK8ahqxKntBLfQhKJBoRlM9T-PHlGW-ptnG5cjUAjnrpCGqr4BAp2Yq6pf5XAiBsKnwvq7tu15DBrupuZ7XVXGP4hmlGMgBTTjRzhwdKWHoeJXS9r1eccoPextgu_UCVIZFkSCWrOZTlBZ_otRSgitmSoyLlSTC_leAhHpKQ1AxMmEop19Y6FYgVuIedFZXqorOecIFtUtXvtELyyf6AcwBbgu3h8pkEoDarKfiLIJf54pIpWkEBgiG4RbkHxoJJ4d-AJXs53k364qo8hXD3XDmQAtMX4WuZOkLI4wbjn9fs9OrOHuTkpXXlYbNeJOVxkig87-DjIHpIuScHsGwLctjvB1B90EiA60E71NrTpiFlbcYD8geqOHRPKTc5vAb8gJyMu4TUc6lTNGybraTTbtIdfMQd1svPz_6FmpRQ3TPn1HQbjwOH9xfyxbBeno4v5NZAQ5FR4lLeaBDwSSvogUsHlXb0DhRqYeOHnsUGnxlLqjZf61hoDHuLqqLJp7mj3sKe_nCm3L1JBhsj2XFINefuoiuAiUtfmWZAlP_rP5ehPb72oSBwrVFmdW2OR_tkxHy5dACRNENnsk5NtKfgYsYX8SlI-&box_client_name=box-content-preview&box_client_version=2.84.0"
    // Assign current height and width to the image

    const imgStyle = { height : this.state.height, width: this.state.width}
    return(
      <div className='center'>
      <div className="controls">
      <Logo/>
        <button className="button" onClick={this.handleZoomIn}>zoom</button><br/>
        <button  className="button" onClick={this.handleZoomOut}>reset</button><br/>
      </div>
      <div className='imgIndex'>

      <img
      className='overImgIndex'
      style={imgStyle}
      ref={this.imgRef}

           alt="A Sheet of red QR codes that contain the Four Gospels.  The Red QR codes are clustered in 4 seperate grids, with each grid resembling a depction of the Author when viewed in entirety."
           src={mSrcT} // use normal <img> attributes as props
            />

        <LazyLoadImage
        className='imgIndex'
        style={imgStyle}
        ref={this.imgRef}
           threshhold='1000'
           placeholderSrc="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/gif/loading.gif"

              effect="blur"
             alt="A Sheet of red QR codes that contain the Four Gospels.  The Red QR codes are clustered in 4 seperate grids, with each grid resembling a depction of the Author when viewed in entirety."
             src={mSrc} // use normal <img> attributes as props
              />

</div>
<div className="bgtext">.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY <br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY <br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY <br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY <br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY <br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/></div>


<div className="footer">
<h1>
*takes a second to load, refresh if it doesnt after 30s* firefox is iffy at best figuring that one out still* idk about chrome bc i dont use bad browsers*
</h1>
</div>
      </div>
    )
  }
}
export default App

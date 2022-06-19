
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
    const mSrc = "https://dl2.boxcloud.com/api/2.0/files/973148211454/content?preview=true&version=1051884130654&access_token=1!7vEAplamebGlfmx_VjaVZ6MnMpyPqI2hLjmpZDA043JmIdx5FDIt_ftMNKtZ2913kKllJyy23Q_Z12yFomCuSxEtiRfxl9s2DyWkjbEDtDIA56yKQMV84kFzVfqRoH_Vjg73NC6JYWVmngBuAwOROhVOIHEFOAw1Rfcu_AagTcTgPb-GvEMTlFuxE4Dp9J5zI3BmMZD7FJwaVnQtJsBNzeMX_3WrwOmx3t5D9skbuco9mf5kF9ANsMaFsmyNlaRQzf9hSleutvnLKlv1-KB3z2a5TLGG44sq4-FHf6ESkIZN7m0tVcbzfYxp2I_8TqPFKRM96LA90PD_PIYAT--Jwg-WlGqH4EoxQwq1WHyO3wMRq1VSu-TARieoqdtmkqLYez4936sAH6ubUgmlGQbHoi3-XeSMQB9_7vU_JcElLvuMcV-kEAZdTlkn6XJc60MDPhBAOPU07l4K0T6AHEIv_t_G_71ZXO8tZlZ-Xr9hmtGdbMZC3gR3SCKyRR0MSRq9MOPcR0gy60H9DAI8ibToMkacB7NnB4QNDcwq5rETpDF2iHCmoqkTtN52TaGdiVWOWeVn4_BgW1_Op5FqRiCAg1sKIPAEAKUgY_IHEFMyw40dy1atHyzsHxdKeYyDEqjUy-6Bs2m3ew4ewfG4U8zvgBIJf0fo8jvpb63kfRrT__hA6wuW&box_client_name=box-content-preview&box_client_version=2.84.0"
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
*takes a second to load, refresh if it doesnt after 30s*
</h1>
</div>
      </div>
    )
  }
}
export default App

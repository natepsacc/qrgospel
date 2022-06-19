
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
    const mSrc = "https://dl2.boxcloud.com/api/2.0/files/973089291489/content?preview=true&version=1051819468689&access_token=1!ebtEEVFXUVClQV9djTB45M-zlHAZ4iupmHCYPJxr8X7kuKDoTKHeVoCX2kpaHp_aFbcxkK2uFjS-9VyEIA3jVYCWdC6jk2owtKc4hQcjKB1BGUbdxVuHyo2jm7I8Ba-O0CTbGmpqduDg5Vb6TafMoB1vE_2ogTbUId6EUHNGxEgAnU6Ab1hmE-00NnF4E2u-QgCz9BbZ8XBVGVVldqrCUxi10O6BFLP9zfRoPlgaAXHBplJfKTeFmxuisfRsSyoAjrPn8-kET2up0I5nz2C-Yts6l-0BWAPLN2E-HGffHR3_Do3c530HBZWBTfvgcfHtpku-mBEucqbqll2W0wBIhdN8TTUW_8W9FSb8ZvVbStnv-zwn_QGaGzGjhkU3sDl4FfokG0ZRG7Q17aqzjwK1xVUV3i_qocx6aob17WRc5xaz3-Bv19uJmAf2VEuoDt3dI_3uk9we3dCpN6cZhsD9Taj7CJQvjJKHqRLiaOWvWP070s8zt3GgA3Yr3lCEsYAl1o1ww6WFvGACJganoCN9gG6RBp-Zt2o8DexydFz6NOETqx96gks3hddD7YQy4aQmwhuhYPdlFFhSO8_v4zA7KUobfhg8_DEx53nHGto_BRg9x-4pTSGX3rg6NJpkK5sj9LKNiAPVyhvLhz-KHLsop-_qeRoDIuf3YldGCN7TkGAClFgl&box_client_name=box-content-preview&box_client_version=2.84.0"
    const mSrcT = "https://dl2.boxcloud.com/api/2.0/files/973148776264/content?preview=true&version=1051884904264&access_token=1!juUpw6l8rA0_wIlUR-GWUeLVL43aEbRau1n0mF2ScFFUUR_Wd77F0aVc8hAUhXeclFxkCdKpRW0cOpb0d5iyLqlDRjpSRPDBI-e8zsuvRVmdsQHoLy1Rn8RpzLGRp8emuGclKcugii9WptGJZ7-r-sl9-FqjX-bYsNr3RqZdHrK2QkG3NS5VosTrh4y9dIQXC-aKC9oyj_McJztMsDwjt1b8sNeZGLhO5mw5dVtAK9lyWdSpo0-otfXRa1PJ4VVjK3kp-J_ie6QPX9fPPTy-aapHOU4ABhxnSZxBhkBadZxKicYztkhs8FIzPHWmcMoRMvxwJ2JH4fueUadYoEyquX9C1TyD_u4CRofxwenebtgQc2ihA-NeZ68CQHgl7QPNvQ3p5Wz_aMdrQoo2g-QkNRpUHusTU-cw3TjyH4_B8fA9QjZHIlrT5Jdqghm8nlNWrjRqePoVZ-TG17I3I71-ZAeCZId3SHUvE7lyundjt3nL4ZXygQ-fXWuxFN1zR0ly_R467e3iCTSOTaQtxPjBCT1YNqeS6dJBwEUDn-vjZUnnRCcrOXUylGpT5bVseN5f8Zle_A1X_m4W4bJ_4Z4G-Z6KuxPaR-B7Vc03HCaFbqjCv6h0H9n5bnfLOBcc_PEA2vpP1JaSjyFytUqqXYKLrTrXQrvBrnAK7n0PnJaDD3N3U6YZ&box_client_name=box-content-preview&box_client_version=2.84.0"
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

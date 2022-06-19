
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
    const mSrc = "https://dl2.boxcloud.com/api/2.0/files/973089291489/content?preview=true&version=1051819468689&access_token=1!GMKJluFu71RxTVPhMCaghZBOXNsUi5wmemTs7UICvoqMNFm0dqLINSAM6GfDXJJwfmKp-Rew3xnSdhUAd-KATr2-XM8l1ms-edIYtG2xEqUFmMTODcfqLBRunpI9p_yeqj6Wrymgylo4MfLQYKk6L-hDr2iT_i8cBx8hW3PtsGHNzgSL9K3I3mpE8ucvqNPOpEq3Gr1hRKBlGMJX-kTE2R2ArOtUSy0qUQp-ewBforROZUDtwANSa6Q7k0YmBSapfTKsB7KEIBQ39kPtwXMtrvQaQUNu6twb8RAwgXPSXGRuzPlbRR_7YCytGiPfoxjGMJeD4trhM-XbOmxKYmEkntAjbr31ooNMl-YisayyqqYvQxUPSnQnNiTG0SiwYBNdmaYkLMqLs1EFM30Mr1j__eXO-k2zT1TEjLxNCbszuJc4lvWyODd_Jwj7O74rVv2bylnFCPJVMnhkj-g58_fQPzAOFPQsIab7kKYQXJJN3g_AeI3fv_wj9PBRYWoYz0zJSYmRMkUZP7TXcKvegVpVWJh5NsE9fZ9ftDiFprHHOEluAoFEfg26MOmfLzQCvAIKJNiZRN7sp5gIgSTQSfOb8njFL38ozc3a8ON_rKrmDB84rfwmf7V0uJCm4h0NBwhpcw1ioFvOl4Taaylk79rP542oLY0_O_GweiYFB_Z53z6jFUqc&box_client_name=box-content-preview&box_client_version=2.84.0"
		const mSrcT = "https://dl2.boxcloud.com/api/2.0/files/973148776264/content?preview=true&version=1051884904264&access_token=1!PbLqpTc2MNajlotVynakUaiJH07rEhVM2JYMlYWDZgdP96YPuxRIWtEcVYh_fV7m7aufu8k3Pl99WWq8FYxgxYeXXoRM_u1Q6rWgH3BFVaPKRUJJ5UvQSruLRE5_5Jo36fzpHoYQ6hM93EfFUamNIq2wtMBNQ3RftLaylu-RpDy9vkUdHi4eAxn7jmme3TwmTDbItUUOd3932hCtJbow6VFqlYbIs0efZqkU79MQjvqEmiT_WWZviukJAJHRHG37uHGy4VynmJrmnqEO16jtzdCOK6RTSDVRME98v6Z1wOJQ8COBw73-3Fa4-crsfIrWrxGdOEu3Zi34dgBiqNX8CHTjNX4bEFu1Qaxciz8GToKGOWorzeWzxusi7gruwVayB48UgEQbyOc1Htb88CauzlUEDM3NZ9ULErBI_2d9XjnxcA1HxudaDjLrWFZcicgKMDrFORrFgMdXPZi_-iqMIHcJf98DV5NNSd7I1QWi5qDHxqH2rPGhuXVe5UIUIdcjuJR3RZIlgnbH356qgs_6xScEdl5LHa9qNEU9JACSZvTg335KxBu6d0zwK_ryXBh3KEMmJhsvcc8FVZEemd-yWeMO560vmubmdjS1YVZ42HNz2ucRNimhUQjZbZmp-HYQatQcMpgy_8m3Ts9AEcFQc5nMUFT6QhPyaacofWxvOWpMebhg&box_client_name=box-content-preview&box_client_version=2.84.0"
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

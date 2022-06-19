
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
    const mSrc = "https://dl2.boxcloud.com/api/2.0/files/973089291489/content?preview=true&version=1051819468689&access_token=1!jxdIbmZ5Exa4KLa_55-YOCXplGoNQBWUzCu2Oquw5n3PucmKSYsO7pI_RniDwX8MRLbyyhHPAJpsqwvLp2UH4PSwpbivqOr9pksC3EOS5Jltq-2o1kQcGSHqoCtHzj2ymoxvJZrsZ4i-IP5qU2-_7PCYBj19lbQIP4kOBOm2fGlK7JTmGyM9cMGK5fMvh8EihRTgQSVt9Kd9HrOOkDDEtna2tLDZI9q3ktyQWBCcoUVkqdneDOqLfUyVA-Lob14tIRk2GXMWYIcwZEBz6hQkgMndM8cpTbo-aXGl9zMCjOiM8DuK_s09PqWLQtBxUUqNpaBLxOlINOctvOfSjTPtXA6IuF7bMzM6tQxxpT7TzWoLH4ipdvG0_wN6zMRvbkssscPXIvRAtD-Tpu6wOqz-EdSHRj-yhTq2pPZD_lftndXAUuMWZxq7NrVw4bqiFwDkX32rWjoAp_EqR7fDRzvVVCA9DwTwZ7qioQLhj1BiymmuHgElAA-f1y4bwEgoE9PdPuH5gsVZWBVGEsnr0z4ERlNmou0R70usq6DJu10ggC83yr7_GtD5vrazXwWf5EhLMl6S3LYCCQIq_k2QLjTeZMCny7cadrZ5dNNAFx7Sa4f7Q_cFrYQ---7nb2ckAfaCePlTpYA-p9QTol43K1X0OzXMueXFHv8SHQs04p-By9cIBSjQ&box_client_name=box-content-preview&box_client_version=2.84.0";

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
<div className="bgtext">.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/>.SCALABLE VECTOR GLORY<br/> .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY .SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY.SCALABLE VECTOR GLORY<br/></div>
      </div>
    )
  }
}
export default App

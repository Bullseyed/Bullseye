import React from 'react'

const Streetview = (props) => {
	const location= (props.bullseye[0]+','+props.bullseye[1]).toString()
	const url = 'https://maps.googleapis.com/maps/api/streetview?size=300x200&location='+location+'&heading=151.78&pitch=-0.76&key=AIzaSyDw4h8gKaVu8fuzvd-ypVMxTSbThRtBE04'
	
	
	return (
		<img src={url}/>
	)
}

export default Streetview
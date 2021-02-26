import React, { useEffect, useState } from 'react'

function Meme() {

    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [images, setImages] = useState([])
    const [memeURL, setMemeURL] = useState('https://i.imgflip.com/28s2gu.jpg')

    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(res => {
                setImages(res.data.memes)
            })
    },[])

    function generateImg() {
        let x = Math.floor(Math.random() * images.length)
        setMemeURL(images[x].url)
        console.log(memeURL)
    }

    return(
        <div>
            <div className="button-container">
                <button className='generate' onClick={generateImg}>Generate Random Template</button>
            </div>

            <div className="form-container">
                <input
                    id='topText'
                    type="text"
                    placeholder='Top text'
                    value={topText}
                    name='topText'
                    onChange={e=>setTopText(e.target.value)}
                />
                <br/>
                <input 
                    type="text"
                    placeholder='Bottom text'
                    value={bottomText}
                    name='bottomText'
                    onChange={e=>setBottomText(e.target.value)}
                />
            </div>

            <div className="meme-img">
                <h4 className="img-text img-top-text">{topText}</h4>
                <img src={memeURL} alt="Meme Image"/>
                <h4 className="img-text img-bottom-text">{bottomText}</h4>
            </div>
        </div>
    )
}

export default Meme
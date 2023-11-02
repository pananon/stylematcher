import { useTypewriter } from 'react-simple-typewriter'
import closet from '../assets/img/closet.jpg'

export default function AnimationScene () {
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 0
      })
    return (<>
    <div className='image-container'> 
        <img alt='closet' height={'800px'} width={'100%'} src={closet}/>
        <div className='text-overlay'>{text}</div>
        <div> Animation </div>
    </div>
    </>);
}
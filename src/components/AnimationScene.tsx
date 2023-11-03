import { useTypewriter } from 'react-simple-typewriter'
import closet from '../assets/img/closet.jpg'

export default function AnimationScene () {
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 0
      })
    return (<>
    <div className='image-container' style={{ backgroundImage: `url(${closet})` }}>
        <div className='text-overlay'>{text}</div>
    </div>
    </>);
}
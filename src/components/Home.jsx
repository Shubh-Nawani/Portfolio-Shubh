import './Home.css'
import Shubh from '../assets/Shubh.jpg'

const Home = () => {
  return (
    <>
    <div className='home'>
    <h1>Hi, I&apos;m Shubh Nawani, a full-stack developer...</h1>
    <img src={Shubh} alt="shubh.jpg" />
    </div>
    </>
  )
}

export default Home

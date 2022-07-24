import HeroBg from '../assets/heroBg.svg';
import {Button} from '../components/Button';
import {motion} from 'framer-motion';

export const Hero=()=>{
    return(
        <motion.div
    
        whileInView={{
            x:[-100,0],
            opacity:[0,1]
        }}
        transition={{duration:0.5}}
        className="heroSection">
            <div className="wrapper">
                <div className="heroText">
        <p className="topTitle">Hi, I am Kaushik</p>
        <p className="centerText">
            Front-<span>End</span><br />Web Developer
        </p>
        <Button className='projectBtn'>Projects</Button>

                </div>
                <div className="heroImg">
                    <img src={HeroBg} alt="hero background" />
                </div>
            </div>
        </motion.div>
    )
}
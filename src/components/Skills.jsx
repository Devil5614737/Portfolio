import '../styles/home.css';
import {Skill} from './Skill';
import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import Javascript from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Redux from '../assets/redux.svg';
import Typescript from '../assets/typescript.svg';
import Sass from '../assets/sass.svg';
import NextJs from '../assets/nextjs.svg';
import NodeJs from '../assets/node.svg';
import Mongodb from '../assets/mongodb.svg';
import Tailwind from '../assets/tailwind.svg';
import {motion} from 'framer-motion';



export const Skills=()=>{
    return (
       <div className="skills">
        <div className="wrapper">
            <div className="title">
                <p>Skills</p>
                <p><span>tools</span> and <span>technologies</span> i know</p>
            </div>
            <motion.div
            whileInView={{
                x:[100,0],
              
                opacity:[0,1]
            }}
            transition={{duration:0.5,type:'spring'}}
            className="skillsContainer">
                <div className="skill">
                <Skill color='#FEDFD7' className='skill'>
                    <img src={Html} alt="icon" />
                </Skill>
                <p>Html</p>
                </div>
                <div className="skill">
                <Skill color='#D3DCFB' className='skill'>
                    <img src={Css} alt="icon" />
                </Skill>
                <p>Css</p>
                </div>
                <div className="skill">
                     
                <Skill color='#F2F2F2' className='skill'>
                    <img src={Javascript} alt="icon" />
                </Skill>
                <p>Javascript</p>
                </div>
                <div className="skill">
                <Skill color='#C3FDF6' className='skill'>
                    <img src={React} alt="icon" />
                </Skill>
                <p>React</p>
                </div>
                <div className="skill">
                <Skill color='#EDC8FF' className='skill'>
                    <img src={Redux} alt="icon" />
                </Skill>
                <p>Redux</p>
                </div>
                <div className="skill">
                <Skill color='#C0E0FF' className='skill'>
                    <img src={Typescript} alt="icon" />
                </Skill>  
                <p>Typescript</p>
                </div>
                <div className="skill">
                <Skill color='#FFD9EC' className='skill'>
                    <img src={Sass} alt="icon" />
                </Skill>
                <p>Sass</p>
                </div>
                <div className="skill">
                <Skill color='#E4E4E4' className='skill'>
                    <img src={NextJs} alt="icon" />
                </Skill>
                <p>NextJs</p>
                </div>
                <div className="skill">
                <Skill color='#DAFFD2' className='skill'>
                    <img src={NodeJs} alt="icon" />
                </Skill>
                <p>Node.js</p>
                </div>
                <div className="skill">
                <Skill color='#D7FFD3' className='skill'>
                    <img src={Mongodb} alt="icon" />
                </Skill>
                <p>MongoDB</p>
                </div>
                <div className="skill">
                <Skill color='#EDEDED' className='skill'>
                    <img src={Tailwind} alt="icon" />
                </Skill>
                <p>Tailwind</p>
                </div>
              
              
               
               
              
               
              
              
                
                
            </motion.div>
        </div>
       </div>
    )
}
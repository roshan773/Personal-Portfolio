import React from 'react'
import "./Skill.css"
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact, FaSass } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiCanva, SiRedux } from 'react-icons/si'
import { IoLogoFirebase } from "react-icons/io5";
import { RiRobot2Line } from 'react-icons/ri'

const Skills = () => {
  return (

    <div className='container-fluid skill'>
      <div className='container'>
        <h2 className="fw-bold mb-3 text-uppercase">Technical Skills</h2>
        <p className="text-muted">
          Here are some of the technologies I specialize in. I use these tools to create dynamic, interactive, and efficient web solutions.
        </p>
        <div className='row d-flex align-items-center'>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='html'>
              <FaHtml5 size={300} className=' p-4 img-fluid' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>HTML</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='css'>
              <FaCss3Alt size={300} className=' p-4 img-fluid' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>CSS</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='bootstrap'>
              <FaBootstrap size={300} className=' p-4 img-fluid' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>BOOTSTRAP</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='jquery'>
              <DiJqueryLogo size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>JQUERY</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='sass'>
              <FaSass size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>SASS</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='js'>
              <IoLogoJavascript size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>JAVASCRIPT</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='react'>
              <FaReact size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>REACT</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='canva'>
              <SiCanva size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>CANVA</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='github'>
              <FaGithub size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>GITHUB</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='firebase'>
              <IoLogoFirebase size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>FIREBASE</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
            <div className='Propmt' id='icon'>
              <RiRobot2Line size={300} className=' p-4 img-fluid ' />
              <p className='mt-2 fs-4 text-center text fw-bold text-dark'>FIREBASE</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills
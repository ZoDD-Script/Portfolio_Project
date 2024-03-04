import React from 'react'
import SkillsItems from './SkillsItems'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>
        Education & <span className='text-yellow-400'>Skills</span>
      </h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div className="">
          <SkillsItems title='React Developer' year='2014- 2018' />
          <SkillsItems title='MERN Stack Developer' year='2014- 2018' />
          <SkillsLanguage skill1='html' skill2='css' skill3='JavaScript' level1='w-[91%]' level2='w-[81%]' level3='w-[98%]' />
        </div>
        <div className="class">
          <SkillsItems title='Next Js Developer' year='2014- 2018' />
          <SkillsItems title='Node Js Developer' year='2014- 2018'/>
          <SkillsLanguage skill1='React Js' skill2='Next JS' skill3='TypeScript' level1='w-[87%]' level2='w-[79%]' level3='w-[75%]' />
        </div>
      </div>
    </div>
  )
}

export default Skills
import { useState } from 'react'
import "./App.css";
import Resume from "./components/resume.jsx";
import Skills from "./components/skills.jsx"


function App() {
  let obj1 = {
    name:"Shailesh Kaliya",
    mail:"Shaileshkaliya124@gmail.com",
    number:9767205009,
    linkedin:"https://www.linkedin.com/in/shailesh-kaliya/",
    github:"https://github.com/shaileshkaliya"
  }

  let skills =
  {
    'Programming Languages':["Java, ","C, ","Python, ","C++"],
    'Data Structures in Java' : [],
    'Databases' : ['SQL, ', 'Oracle SQL, ', 'MongoDB'],
    'Data Science' : [],
    'Machine Learning' : [],
    'Web Development' : ['HTML, ', 'CSS, ', 'JavaScript'],
    'Version Control' : ["Git, ","Github"],
    'Soft Skills' : ['Team Work, ', 'Time Management']
  };

  let academics = 
  {
    'B-Tech in CSE(AI&ML) (Third Year) | CGPA : 8.81' : ['Pimpri Chinchwad College of Engineering, Pune'],
    'XII (2021) | 92.33%' : ['Sunderrao Solanke Mahavidyalaya, Majalgaon'],
    'X (2019) | 96.00%' : ['Shri Siddheshwar Viddyalaya, Majalgaon']
  }

  let projects = 
  {
    'Voice Based Chatbot for Patient Registration System' : ['A voice recognition project, developed for multi-speciality hospitals to overcome thecons of traditional registration systems using HTML, CSS, Javascript.Here we used webkitspeech API in Javascript.It is a group project built in third semester.'],

    'Chatbot for college association' : ['Built a chatbot for college association in a hackathon where we used Python with the chatterbot library'],

    'Kabaddi Points Table System' : ['Built a C++ program using OOP concepts in C++ to develop a system to maintain marks and other records in particular kabaddi match.It is a group project built in the second semester.'],

    'Personal Portfolio Website' : ['Created a personal portfolio website using HTML, CSS and Javascript']
  }

  let printResume = () => {
    window.print();
  }
  return (
    <div className="container1">
      <div className='wrapper'>
        <Resume {...obj1} data = {skills}></Resume>
        <Skills data = {skills} title = 'SKILLS'></Skills>
        <Skills data = {academics} title = 'ACADEMICS'></Skills>
        <Skills data = {projects} title = 'PROJECTS'></Skills>
      </div>
      <button onClick={printResume}>Print</button>
    </div>
  );
}

export default App;

import React,{Component} from 'react';
import PieChart from './PieChart'
import '../scss/styles.scss';
import '../scss/freelancer.scss';

let data = [
    ["Languages", ""],
    ["React", 15],
    ["Kotlin", 12],
    ["JavaScript", 10],
    ["Swift", 9],
    ["Node.js",7],
    ["Java",5]
    
  ];
  
  export default function ProgressBar() {
    return (
      <div className="text-center">
        <h3 className='text-center'>My Interest</h3>
        <PieChart language="es" data={data} />
      </div>
    );
  }
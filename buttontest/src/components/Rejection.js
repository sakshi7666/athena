import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';
import { motion } from 'framer-motion/dist/framer-motion'
import Sidebar from "./SideBar";

const oprejection = [
	{name:'NP',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:1},
	{name:'AP',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:1,DentMark:0},
	{name:'SP',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:1,ParllNok:0,DentMark:0},
	{name:'SS',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:1,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'SK',BoreOS:0,WidthUS:0,OCLUS:1,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'AW',BoreOS:0,WidthUS:1,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'IR',BoreOS:1,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'PC',BoreOS:0,WidthUS:2,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'SM',BoreOS:0,WidthUS:0,OCLUS:3,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'SP',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:4,ConcNok:0,ParllNok:0,DentMark:0}

  ]

  const machrejection = [
	{name:'SPM5',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:1},
	{name:'LMW',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:1,DentMark:0},
	{name:'UnivMil',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:1,ParllNok:0,DentMark:0},
	{name:'Vertex',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:1,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'SPM4',BoreOS:0,WidthUS:0,OCLUS:1,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'Grinding',BoreOS:0,WidthUS:1,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'Lath',BoreOS:1,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'Drilling',BoreOS:0,WidthUS:2,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'InspTable',BoreOS:0,WidthUS:0,OCLUS:3,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0}

  ]

  const partrejection = [
	{name:'51Z',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:1},
	{name:'30Z',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:1,DentMark:0},
	{name:'41Z',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:1,ParllNok:0,DentMark:0},
	{name:'3016826',BoreOS:0,WidthUS:0,OCLUS:0,BCDUS:1,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'3062141',BoreOS:0,WidthUS:0,OCLUS:1,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'3081248',BoreOS:0,WidthUS:1,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'3017511',BoreOS:1,WidthUS:0,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'3062096',BoreOS:0,WidthUS:2,OCLUS:0,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'4009479',BoreOS:0,WidthUS:0,OCLUS:3,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0},
	{name:'3092502',BoreOS:0,WidthUS:0,OCLUS:3,BCDUS:0,ConcNok:0,ParllNok:0,DentMark:0}
]
 

const Rejection = () => {
return (
	<>
      <Sidebar />
	  <h1>Rejection</h1>
	<div className="rejection">
	
	<motion.div
        drag
      >
	<BarChart width={400} height={400} data={oprejection}>
	<Legend align="left"/>
	<CartesianGrid />
         <Bar dataKey="Utilization" />
         <XAxis dataKey="name" fontSize={10} />
         <YAxis />
		 <Tooltip />
         <Legend />
		 <Bar dataKey="BoreOS" stackId="a" fill="#8884d8" />
         <Bar dataKey="WidthUS" stackId="a" fill="#82ca9d" />
		 <Bar dataKey="OCLUS" stackId="a" fill="#ff8a65" />
         <Bar dataKey="BCDUS" stackId="a" fill="#ba68c8" />
		 <Bar dataKey="ConcNok" stackId="a" fill="#ffa000" />
         <Bar dataKey="ParllNok" stackId="a" fill="#82ca9d" />
		 <Bar dataKey="DentMark" stackId="a" fill="#673ab7" />
		</BarChart>
		</motion.div>

		<motion.div
        drag
      >
	<BarChart width={400} height={400} data={machrejection}>
	<CartesianGrid />
         <Bar dataKey="Utilization" />
         <XAxis dataKey="name" fontSize={10} />
         <YAxis />
		 <Tooltip />
         <Legend />
		 <Bar dataKey="BoreOS" stackId="a" fill="#8884d8" />
         <Bar dataKey="WidthUS" stackId="a" fill="#82ca9d" />
		 <Bar dataKey="OCLUS" stackId="a" fill="#ff8a65" />
         <Bar dataKey="BCDUS" stackId="a" fill="#ba68c8" />
		 <Bar dataKey="ConcNok" stackId="a" fill="#ffa000" />
         <Bar dataKey="ParllNok" stackId="a" fill="#82ca9d" />
		 <Bar dataKey="DentMark" stackId="a" fill="#673ab7" />
		</BarChart>	
		</motion.div>

		<motion.div
        drag
      >
	<BarChart width={400} height={400} data={partrejection}>
	<CartesianGrid />
         <Bar dataKey="Utilization" />
         <XAxis dataKey="name" fontSize={10} />
         <YAxis />
		 <Tooltip />
         <Legend />
		 <Bar dataKey="BoreOS" stackId="a" fill="#8884d8" />
         <Bar dataKey="WidthUS" stackId="a" fill="#82ca9d" />
		 <Bar dataKey="OCLUS" stackId="a" fill="#ff8a65" />
         <Bar dataKey="BCDUS" stackId="a" fill="#ba68c8" />
		 <Bar dataKey="ConcNok" stackId="a" fill="#ffa000" />
         <Bar dataKey="ParllNok" stackId="a" fill="#82ca9d" />
		 <Bar dataKey="DentMark" stackId="a" fill="#673ab7" />
		</BarChart> 
		</motion.div>
	</div>
	</>
);
};

export default Rejection;

import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
// import { userInfo } from 'os';

//1111
// function App(){
//   return(
//       <div>
          
//               PAYSLIP
          
//           <information name="Shafeeq" Address="Manchester" Marks="150"/>
//           <information name="Harley" Address="Swindon" Marks="130"/>
          
//       </div>
//   );
// }

// class information extends React.Component{
//   render(){
//       return(
//           <div>
//               <h2>Name: {this.props.name} </h2>
//               <h2>Address: {this.props.address} </h2>
//               <h2>Marks: {this.props.marks} </h2>
//           </div>
//       )
//   }
// }
// export default App;
// 


//2222
// class Eventhandling extends React.Component{
//   constructor(){
//     super();
//     this.state={count:0,message:"Shafeeq"}
//     this.clicked=this.clicked.bind(this);
//   }
//   clicked(){
//     this.setState({
//       count:parseInt(this.state.count)+1
//     });
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.message}</h1>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.clicked}> Event Handling </button>
//       </div>
//     );
//   }
// }
// export default Eventhandling;


// 333
// function Eventhandling(){
//   function clicked(){
//     alert("Button clicked");
//   }
//   return(
//     <div>
//       <button onClick={clicked}> Event Handling </button>
//     </div>
//   );
// }
// export default Eventhandling;



// 4444

// class Eventhandling extends React.Component{
//   constructor(){
//     super();
//     this.state={count:1000,message:"Numbers"}
//     this.clicked=this.clicked.bind(this);
//   }
//   componentDidMount(){
//     setInterval(this.clicked, 100);
//   }

//   clicked(){
//     const count = this.state.count -1;
//     this.setState({
//       count: count < 0 ? 900 : count

//     });
//   }
//   render(){
//     let color = '';
//     if (this.state.count % 2 == 1){
//       color = 'red';
//       }
//       else {
//         color = 'blue';
//       }
//     return(
//             <div>
//               <h1 style={{color: color}}>{this.state.message}</h1>
//               <h1 style={{color: color}}>{this.state.count}</h1>
//               <button style={{color: color}}onClick={this.clicked}> Event Handling </button>
//             </div>
//           );
//         }
//       }
// export default Eventhandling;



// 5555
// export default class UserWrapper extends React.Component{

// render() {
// const User = [
//     {name: 'Ian',
//     location: 'Swindon',
//     Salary: '10000'},

//     {name: 'The Shafeeq',
//     location: 'Manchester',
//     Salary: '12000'}
// ]

// const userEls = User.map((u, index)=>(
//     <UserInfo key={u.name+index} name={u.name} location={u.location} salary={u.Salary}/>
// ));

// return (
//     <div>
//         {userEls}
//     </div>
// );
// }}

// function UserInfo(props){
//     return (
//         <h1> Name     : {props.name}<br></br>Address : {props.location}<br></br>Salary : {props.salary}</h1>
//     );
// }


//6666
class Eventhandling extends React.Component{
      constructor(){
        super();
        this.state={count:0,message:"Shafeeq"}
        this.clicked=this.clicked.bind(this);
      }
      clicked(){
        this.setState({
          count:parseInt(this.state.count)+1
        });
      }
      render(){
        return(
          <div>
            <h1>{this.state.message}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.clicked}> Event Handling </button>
          </div>
        );
      }
    }
    export default Eventhandling;


class SalaryCalculations extends React.Component{
    render(){
        
        if (this.props.salary<1000){
            var tax=0;
        }
        if (this.props.salary=1001 && this.props.salar<2000){
            var tax=this.props.salary*17/100;
        }
        if (this.props.salary=2001 && this.props.salar<3000){
            var tax=this.props.salary*18/100;
        }
        else
            var tax=this.props.salary*21/100
        
  

        var ComponentName=React.createElement("h1",null,"Name:"+this.props.name);
        var ComponentSalary=React.createElement("h2",null,"salary:"+this.props.salary);
        var ComponentTax=React.createElement("h3",null,"Tax:"+tax);

        var Component=React.createElement("div",null,[ComponentName,ComponentSalary,ComponentTax]);
        return Component;
    }
}

var salaryinfo=React.createElement(SalaryCalculations,{name:"Peter",salary:4000});
ReactDOM.render(salaryinfo, document.getElementById("QA1"));
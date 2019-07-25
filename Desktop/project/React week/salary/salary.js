class SalaryCalculations extends React.Component{
    render(){
        console.log(this.props);
        var tax=this.props.salary*20/100;

        var ComponentName=React.createElement("h1",null,"Name:"+this.props.name);
        var ComponentSalary=React.createElement("h2",null,"Salary:"+this.props.salary);
        var ComponentTax=React.createElement("h3",null,"Tax:"+tax);

        var Component=React.createElement("div",null,[ComponentName,ComponentSalary,ComponentTax]);
        return Component;
    }
}

var salaryinfo=React.createElement(SalaryCalculations,{name:"Peter",salary:2000});
ReactDOM.render(salaryinfo, document.getElementById("QA1"));
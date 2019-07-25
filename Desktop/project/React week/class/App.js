const div1=document.getElementById("QA1");
const div2=document.getElementById("QA2");

class CustomerComponent extends React.Component{
    render(){
        var Component=React.createElement("h1",null,"Hello Nationwide ");
        return Component;
    }
}

var firstComponent=React.createElement(CustomerComponent,null);
ReactDOM.render(firstComponent,div1)
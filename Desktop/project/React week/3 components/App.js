class CustomerComponent extends React.Component{
    render(){
        var Component1=React.createElement("h1",null,"Hello Nationwide ");
        var Component2=React.createElement("pre",null,"QA Consulting is in Manchester ");
        var Component3=React.createElement("h1",null,[Component1,Component2]);
        return Component3;
    }
}

var div1=document.getElementById("QA1");

var firstComponent=React.createElement(CustomerComponent,null);
ReactDOM.render(firstComponent,div1)
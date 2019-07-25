class TimesTable extends React.Component{
    render(){

        let Components = [];
        for(let i = 0; i<= this.props.range;i++){
            Components.push(React.createElement("h2",null,this.props.timestable + "x" + i + "=" + (this.props.timestable*i)));

        }
        let Result = React.createElement("h1",null,Components);
        return Result;
    }
}

const div1 = document.getElementById("QA1");
const timestable = React.createElement(TimesTable,{timestable:8, range:50});
let tt = React.createElement("div",{"style":{"text-align": "center", "color":"red"}},timestable)

ReactDOM.render(tt,div1)
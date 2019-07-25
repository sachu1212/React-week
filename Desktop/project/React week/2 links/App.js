const a1=React.createElement("a",{href:"http://www.bbc.co.uk",target:"_blank","title":"BBC News"},"News 1 ");
const a2=React.createElement("a",{href:"http://www.cnn.com",target:"_blank","title":"CNN News"},"News 2 ");

const div1=React.createElement("div",
    {
        "style":{"background-color":"red"}
    },
    [a1,a2])
    const QA1=document.getElementById("QA1");
    ReactDOM.render(div1,QA1);

    const div2=React.createElement("div",
        {"style":{"background-color":"green"}
    },a1,a2)
    const QA2=document.getElementById("QA2");
    ReactDOM.render(div1,QA2);

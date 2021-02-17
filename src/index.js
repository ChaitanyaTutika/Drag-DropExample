import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { Rnd } from "react-rnd";
import { Table } from "react-bootstrap";
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // border: "solid 1px #333",
  // background: "#f2f2f2"
};
class App extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    },
    click: false,
    tasks: [
      {
        id: "1",
        taskName: "Company Logo",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr: "",
        image:"https://www.acuitykp.com/wp-content/themes/maks/images/logo.png",
        table: ""
      },
      {
        id: "2",
        taskName: "Credit View -Stable ",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr: "Credit View - Stable",
        image: "",
        table: ""
      },
      {
        id: "3",
        taskName: "Company Location ",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr: "US",
        image: "",
        table: ""
      },
      {
        id: "4",
        taskName: "Company Name ",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr: "Tesla, Inc Capital Goods",
        image: "",
        table: ""
      },
      {
        id: "5",
        taskName: "Company Overview",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr: "Company Overview",
        cmpTxt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
        image: "",
        table: ""
      },
      {
        id: "6",
        taskName: "Key risk to our recommendations  ",
        //type: "Done",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr:  "Key risk to our recommendations Heading",
        cmpTxt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       image: "",
        table: ""
      },
      {
        id: "7",
        taskName: "Key Financials  ",
        //type: "Done",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr:  "Key Financials",
        cmpTxt:"",
       image: "",
         table: "<br/><table class='table table-bordered'><thead><tr><th>Firstname</th> <th>Lastname</th><th>Email</th></tr> </thead><tbody><tr><td>John</td><td>Doe</td><td>john@example.com</td></tr><tr><td>Mary</td><td>Moe</td><td>mary@example.com</td></tr><tr><td>July</td><td>Dooley</td><td>july@example.com</td></tr></tbody></table>"
      }
      ,
      {
        id: "8",
        taskName: "Issuer ratings per group  ",
        //type: "Done",
        type: "inProgress",
        backgroundColor: "transparent",
        companyStr:  "Issuer Ratings Per Group  ",
        cmpTxt:"",
       image: "",
         table: "<br/><table class='table table-bordered'><thead><tr><th>Firstname</th> <th>Lastname</th><th>Email</th></tr> </thead><tbody><tr><td>John</td><td>Doe</td><td>john@example.com</td></tr><tr><td>Mary</td><td>Moe</td><td>mary@example.com</td></tr><tr><td>July</td><td>Dooley</td><td>july@example.com</td></tr></tbody></table>"
      }
    ]
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.id === id) {
        task.type = task.type === "Done" ? task.type : cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };

  render() {
    var tasks = {
      inProgress: [],
      Done: []
    };
    this.state.tasks.forEach((task) => tasks[task.type].push(task));

    const over = tasks.Done.map((data) => {
      return (
        <Rnd
          bounds="parent"
          minHeight="100"
          minWidth="250"
          style={style}
          default={{
            x: 0,
            y: 10,
            width: "auto",
            height: "auto"
          }}
        >
          <div
            id="dragme"
            onDragStart={(event) => {
              this.onDragStart(event, data.id);
            }}
            draggable
            className="draggable1"
            style={{ backgroundColor: data.backgroundColor }}
          >
            {this.state.click ? (
              <div>
                {/* <h5>company name : {data.taskName}</h5>
                <p>country : {data.company}</p>
                <p> color : {data.backgroundColor}</p> */}
                  <span style={{"font-size":"18px","color":"#3949ab","float":"left"}}><b>{data.companyStr}</b></span>
              <p style={{"font-size":"14px","text-align":"justify","float":"left"}}>{data.cmpTxt}</p>
                {data.image?<img src={data.image} alt="image" />:null}
                {/* style={{width:100}} */}
                {/* {data.image ? (
                  <div dangerouslySetInnerHTML={{ __html: data.image }}></div>
                ) : null} */}
                {data.table ? (
                  <div dangerouslySetInnerHTML={{ __html: data.table }}></div>
                ) : null}
              </div>
            ) : (
              <div>
                <div>{data.taskName}</div>
              </div>
            )}
          </div>
        </Rnd>
      );
    });

    const goin = tasks.inProgress.map((data) => {
      return (
        <div
          key={data.id}
          onDragStart={(event) => this.onDragStart(event, data.id)}
          draggable
          className="draggable"
          style={{ backgroundColor: data.backgroundColor }}
        >
          {data.taskName}
        </div>
      );
    });

    return (
      <div  style={{"align":"center"}} > <button onClick={() => this.setState({ click: !this.state.click })}>
      Preview details
    </button>
      <div className="container-drag">
        
        <div
          className="wip"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, "inProgress");
          }}
        >
          <span className="task-header">Tags</span>
          {goin}
        </div>

        <div
          className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "Done")}
        >
          <span className="task-header">COMPLETED</span>
          
          <div className="helo"> {over}</div>
        </div>
      </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

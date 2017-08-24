import ReactDOM from 'react-dom'
import React from 'react';
import { Container,Divider, Icon,List,Input } from 'semantic-ui-react'
import HeaderComponent from './header-component/header-component';
import "./app.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={tasks:[],text:""};
    this.handleTextChange=this.handleTextChange.bind(this)
    this.handleOnAddClick=this.handleOnAddClick.bind(this)
    this.setDone=this.setDone.bind(this);
  }
  handleTextChange(e){
    this.setState({text:e.target.value});
  }
  handleOnAddClick(){
    if(this.state.text!="")
    {
      let ts=this.state.tasks;
      ts.push(this.nTask(this.state.text));
      this.setState({tasks:ts,text:""});
    }else{
      alert("Debes escribir en la tarea")
    }

  }
  nTask(text){
    return {key:Date.now(),text:text,done:false};
  }
  setDone(task){
    this.setState({tasks:this.state.tasks.map((t)=>{
      if(t.key==task.key){
        t.done=true;
      }
      return t;
    })});
  }
  removeTask(task){
    this.setState({tasks:this.state.tasks.filter((t)=>t.key!=task.key)});
  }
  render() {
    return (
      <Container fluid textAlign="center">
        <HeaderComponent />
        <Divider />
        <List className="task-list">
            <List.Item>  <Input
                icon='tags'
                iconPosition='left'
                label={{ tag: true, content: 'Add Task',onClick:this.handleOnAddClick.bind(this) }}
                labelPosition='right'
                onChange={this.handleTextChange.bind(this)}
                placeholder='Enter tasks'
                value={this.state.text}
              /></List.Item>
            {this.state.tasks.map((t,i)=>{
              return (<List.Item key={i} onClick={!t.done?this.setDone.bind(this,t):this.removeTask.bind(this,t)} className={"task "+(t.done?"done":"todo")}>
                          <List.Content>{t.text}<List.Icon className="action-icon"  name={!t.done?"checkmark":"remove"} /></List.Content>
                        </List.Item>);
            } )}
        </List>
      </Container>
    );
  }
}

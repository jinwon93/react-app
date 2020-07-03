// function 방식
// import React from 'react';
// class 방식으로 수업 !
import React, { Component } from 'react';
import TOC from "./component/TOC";
import Content from "./component/Content";
import Subject from "./component/Subject";
import './App.css';
 
class App extends Component {
  //  Component 안에서 constructor가 있다면 제일 먼저 실행된다 -->이유는
  // state 값을 초기화 시킨다 ex) 밑에 예제를 보면 title/sub 값을 세팅하려고
  constructor(props){
    super(props);
    this.state = {
      mode : "read",
      selected_content_id:1,
      subject:{title:'WEB',sub:'world wide web!'},
      welcome :{title: "Welcome",desc:"Hellow React!!"},
      contents :[
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JAVASCRIT',desc:'JAVASCRIT is for interactive'}
      ]
    }
  }
  // console.log('render',this);
  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      var i = 0 ;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
            _title = data.title;
            _desc = data.desc;
            break;
        }
        i = i + 1;
      }
      
    }
    // console.log('redder',this);
    return(
    <div className="App">
         <Subject 
          title ={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          >
        </Subject> 
        <TOC 
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)} 
        data={this.state.contents}></TOC>
        <Content title ={_title} desc={_desc}></Content>
    </div>
    );
  }
}

export default App;

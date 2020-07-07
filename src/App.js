// function 방식
// import React from 'react';
// class 방식으로 수업 !
import React, { Component } from 'react';
import TOC from "./component/TOC";
import ReadContent from "./component/ReadContent";
import CreateContent from "./component/CreateContent";
import UpdateContent from "./component/UpdateContent";
import Subject from "./component/Subject";
import Control from "./component/Control";
import './App.css';
 
class App extends Component {
  //  Component 안에서 constructor가 있다면 제일 먼저 실행된다 -->이유는
  // state 값을 초기화 시킨다 ex) 밑에 예제를 보면 title/sub 값을 세팅하려고
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode : "welcome",
      selected_content_id:2,
      subject:{title:'WEB',sub:'world wide web!'},
      welcome :{title: "Welcome",desc:"Hellow React!!"},
      contents :[
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JAVASCRIT',desc:'JAVASCRIT is for interactive'}
      ]
    }
  }
  getReadContent(){
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
          return data;
          break;
      }
      i = i + 1;
    }
  }
  getContent(){
    console.log('App render');
    var _title, _desc, _article= null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article =<ReadContent title ={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === "read"){
      var  _content = this.getReadContent();
      _article =<ReadContent title ={_content.title} desc={_content.desc}></ReadContent>
    }else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
          // add content to this.state.content
          this.max_content_id = this.max_content_id+1;
          //this.state.contents.push(
          //{id:this.max_content_id,title:_title ,desc:_desc}
          //);
          var _contents = Array.from(this.state.contents);
          _contents.push({id:this.max_content_id,title:_title ,desc:_desc});
          // var _contents = this.state.contents.concat(
          // {id:this.max_content_id,title:_title ,desc:_desc}
          // )
          this.setState({
            contents:_contents,
            mode:'read',
            selected_content_id:this.max_content_id
          });
          
      }.bind(this)}></CreateContent>
    }else if (this.state.mode === 'update'){
      _content =this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id,_title,_desc){
            // add content to this.state.content
            // var _contents = this.state.contents.concat
            // {id:this.max_content_id,title:_title ,desc:_desc}
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = {id:_id,title:_title,desc:_desc};
                break;
              }
              i = i +1;
            }
          
          this.setState({
            contents:_contents,
            mode:'read'
          });
          
          
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    console.log('App render');
    // push는 원본을 바꾸고 concat은 복제해서 추가한다 (immutable)
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
        <Control onChangeMode = {function(_mode){
          if (_mode === 'delete') {
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              })
              alert('delete!');
            }
          }else{
            this.setState({
              mode:_mode
            }); 
          }
          
        }.bind(this)}></Control>
        {this.getContent()}  
    </div>
    );
  }
}

export default App;

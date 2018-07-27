import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      const lst = this.props.todos.map((value, index)=>{
        return <Todo task={value} key={index} />
      });
      

      return (             
          <ul>{lst}</ul>
      );
    }
}

export default TodoList
import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';

const dummyData = [
    {taskText:'Cook' , completed:false },
    {taskText:'Finish components' , completed:true },
    {taskText:'laundry' , completed:false },
    {taskText:'finish project' , completed:true }
     
]

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        this.setState({
            todos: dummyData
        })
    }

    render(){
        return(
            <div>
                <InputLine />
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}

export default TodoApp;
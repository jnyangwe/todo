import React from 'react';

class InputLine extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="task" />
                <input type="button" value="Add todo" />
            </div>
        );
    }
}

export default InputLine;
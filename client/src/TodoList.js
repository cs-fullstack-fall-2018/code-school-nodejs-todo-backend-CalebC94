import React, {Component} from "react"

class TodoList extends Component{

    render() {
        var forEachItem = this.props.arr.map(
            EachItem => {
                return(
                    <div>
                        <p>{EachItem.username} has to {EachItem.todo} is {EachItem.isDone.toString()}</p>
                    </div>
                )
            }
        );
        console.log(this.props.arr);
        return (
            <div>
                <h2>{forEachItem}</h2>
            </div>
        );
    }
}
export default TodoList;
import { connect } from 'react-redux';
import { deleteTodo } from "../../actions"

const List = props => (
  <ul>
    {props.todos.map((todo, i) => (
      <li key={i}>
        <span>{todo.text}</span>
        <span 
          className="close-button"
          onClick={() => props.dispatch(deleteTodo(todo.id))} >
          &times;
        </span>
      </li>
    ))}
  </ul>
)

const mapStateToProps = state => ({
  todos: state.todos.data
})

export default connect(mapStateToProps)(List)
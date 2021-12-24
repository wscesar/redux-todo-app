import { connect } from "react-redux"
import { addTodo } from "../../actions"

const submitHandler = (event, dispatch) => {
  event.preventDefault()
  let input = event.target.userInput.value
  dispatch(addTodo(input))
  event.target.userInput.value = ''
}

const AddTodo = props => (
  <form onSubmit={e => submitHandler(e, props.dispatch)}>
    <input name="userInput"/>
    <button>Submit</button>
  </form>
)

export default connect()(AddTodo)
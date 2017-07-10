import React from 'react'
import TextField from 'material-ui/TextField';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { addTodo, saveTodos } from '../../actions/todosActions'
import { connect } from 'react-redux'


const RETURN_KEY_CODE = 13;

class AddTodo extends React.Component{
    constructor(){
        super()
        this.state = {
            todo: ''
        }
    }

    render(){
        return(
                <TextField
                  onKeyDown={this.onKeyDown.bind(this)}
                  onChange = {this.handleChange.bind(this)}
                  hintText="ad todo and press enter ..." />
        )
    }

    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
          if(event.target.value){
            this.props.addTodo(event.target.value)
            this.props.save('/api/todos')
          }
          event.target.value = '';
        }
    }

    handleChange(e){
      this.setState({todo: e.target.value})
    }

}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
      error: state.loadError,
      saved: state.saved
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      save: (url) => dispatch(saveTodos(url)),
      addTodo: (todo) => dispatch(addTodo(todo))
    }
}

AddTodo.PropTypes = {
  addMessage: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)


import React from 'react'
import TextField from 'material-ui/TextField';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TodosStore from '../.././stores/TodosStore'

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
            TodosStore.addTodo(event.target.value)
          }
          event.target.value = '';
        }
    }

    handleChange(e){
        this.setState({todo: e.target.value})
    }


}

export default AddTodo

import React from 'react';
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import { connect } from 'react-redux'

class Todos extends React.Component {
  constructor(){
      super()
    }

   render(){
        const todos = this.props.todos.map(
          (todo) => <ListItem leftIcon={<ChevronRightIcon/>} key={todo.id} primaryText={todo.text} />
        )

        return(
            <div>
                <List>
                    { todos }
                </List>
            </div>
        )
    }
}

Todos.propTypes = {
  todos: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos)

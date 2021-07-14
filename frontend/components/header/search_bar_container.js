import { connect } from "react-redux"
import SearchBar from "./search_bar"

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    channels: state.entities.channels
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
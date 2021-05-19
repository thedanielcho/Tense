import { connect } from "react-redux"
import ChatRoom from "./chat_room"

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.id]
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {

//   }
// }


export default connect(mapStateToProps, null)(ChatRoom)
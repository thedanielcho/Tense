import { connect } from "react-redux"
import { createChannel } from "../../actions/channel_actions"
import { closeModal } from "../../actions/modal_actions"
import ChannelCreateForm from "./channel_create_form"


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCreateForm)
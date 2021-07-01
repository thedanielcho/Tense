import { connect } from "react-redux"
import { updateChannel } from "../../actions/channel_actions"
import { closeModal } from "../../actions/modal_actions"
import ChannelEditForm from "./channel_edit_form"
import { requestAllChannels } from "../../actions/channel_actions"


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    channel: state.entities.channels[parseInt(window.location.href.split("/")[5])]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    updateChannel: (id, channel) => dispatch(updateChannel(id, channel)),
    closeModal: () => dispatch(closeModal()),
    requestAllChannels: () => dispatch(requestAllChannels()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelEditForm)
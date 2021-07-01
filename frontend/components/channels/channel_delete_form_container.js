import { connect } from "react-redux"
import { destroyChannel, requestAllChannels } from "../../actions/channel_actions"
import { closeModal } from "../../actions/modal_actions"
import ChannelDeleteForm from "./channel_delete_form"
import { requestAllMessages } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    channel: state.entities.channels[parseInt(window.location.href.split("/")[5])]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    destroyChannel: (id) => dispatch(destroyChannel(id)),
    closeModal: () => dispatch(closeModal()),
    requestAllMessages: (id) => dispatch(requestAllMessages(id)),
    requestAllChannels: () => dispatch(requestAllChannels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDeleteForm)
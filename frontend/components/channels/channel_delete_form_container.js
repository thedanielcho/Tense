import { connect } from "react-redux"
import { destroyChannel } from "../../actions/channel_actions"
import { closeModal } from "../../actions/modal_actions"
import ChannelDeleteForm from "./channel_delete_form"


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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDeleteForm)
import { connect } from "react-redux"
import { destroyMessage } from "../../actions/message_actions"
import { closeModal } from "../../actions/modal_actions"
import MessageDeleteForm from "./message_delete_form"



const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    message: ownProps.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    destroyMessage: (id) => dispatch(destroyMessage(id)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageDeleteForm)
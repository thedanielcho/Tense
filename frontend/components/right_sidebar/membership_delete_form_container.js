import { connect } from "react-redux"
import { closeModal } from "../../actions/modal_actions"
import { destroyMembership } from "../../actions/membership_actions";
import MembershipDeleteForm from "./membership_delete_form";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    errors: state.errors,
    membershipId: ownProps.membershipId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    destroyMembership: (id) => dispatch(destroyMembership(id)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembershipDeleteForm)
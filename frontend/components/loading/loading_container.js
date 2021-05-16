import { connect } from "react-redux"
import Loading from "./loading"

const mapStateToProps = (state) => {
  return{
    channel: Object.values(state.entities.channels)[0]
  }
}

export default connect(mapStateToProps, null)(Loading);
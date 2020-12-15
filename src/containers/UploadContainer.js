import React, { Component } from 'react';
import UploadImg from '../components/UploadImg';
import { connect } from 'react-redux'
import * as action from '../action/UploadImg'
class UploadContainer extends Component {
    render() {
        return (
            <div>
                <UploadImg {...this.props}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       uploadImg: (img)=>{ 
          // console.log('img here',img);
           dispatch(action.upLoadImg(img))
       }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
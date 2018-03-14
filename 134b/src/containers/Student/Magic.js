import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as courseActions from '../../actions/courseActions';
import * as studentActions from '../../actions/studentActions';
//import CourseList from './CourseList';
//import {browserHistory} from 'react-router';

class Magic extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

//   courseRow(course, index) {
//     return <div key={index}>{course.title}</div>;
//   }

//   redirectToAddCoursePage() {
//     browserHistory.push('/course');
//   }

  render() {
    const {students} = this.props;
    console.log(students);
    return (
      <div>
        <h1>Oh Redux Works!</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
            //    onClick={this.redirectToAddCoursePage}
        />
        
      </div>
    );
  }
}

// Magic.propTypes = {
//   courses: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   return {
//     courses: state.courses
//   };
// }
function mapStateToProps(state, ownProps) {
    return {
      students: state.students
    };
  }
  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Magic);

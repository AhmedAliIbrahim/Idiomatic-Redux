// import { connect } from 'react-redux';
// import  { setVisibilityFilter } from '../actions';
// import Link from '../component/Link';
// const mapStateToFilterLinkProp = (state, props) => ({
//     active: props.filter === state.visibiltyFilter,
// });
//
// const mapDispatchToFilterLinkProp = ( dispatch,ownProps) => ({
//     onClick() {
//       dispatch(setVisibilityFilter(ownProps.filter));
//     },
// });
//
// const FilterLink = connect(
//   mapStateToFilterLinkProp,
//   mapDispatchToFilterLinkProp
// )(Link);
//
// export default FilterLink;

import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }} >
    {children}
    </Link>
)

export default FilterLink;

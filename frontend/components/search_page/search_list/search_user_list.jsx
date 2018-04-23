import React from 'react'
import { withRouter } from 'react-router-dom';
import SearchUserListItemContainer from './search_user_list_item_container'

class SearchUserList extends React.Component {

 render() {
   const { users, match } = this.props;
   const userListItems =  users.map( (user, i) => {
     return <SearchUserListItemContainer user={user} key={i}  />;
   });

   const prefix = match.params.prefix;
   const resultsNumber = users.length;
   const resultsText = users.length === 1 ?
     `1 result` : `${resultsNumber} results`;

   return(
     <div className='results-list'>
       <p className='results-text'>{resultsText} for <strong>{prefix}</strong></p>
       <ul className='user-search-list'>
         {userListItems}
       </ul>
     </div>
   )
 }

}

export default withRouter(SearchUserList);

import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.friendList}>
        {friends.map(item => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;

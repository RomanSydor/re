import s from './App.module.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div>
      <div className={s.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className={s.container}>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className={s.container}>
        <Statistics stats={data} />
      </div>
      <div className={s.container}>
        <FriendList friends={friends} />
      </div>
      <div className={s.container}>
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
}

export default App;

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendsList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics data={data} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions}/>
  </>
);

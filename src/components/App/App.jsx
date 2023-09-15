import user from 'data/user.json';
import statistics from 'data/statistic.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendsList } from '../FriendList/FriendList';
import { TransactionHistory } from '../Transactions/TransactionHistory';

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics statistic={statistics} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions}/>
  </>
);

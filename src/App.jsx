import user from "./data/user.json";
import statistics from "./data/statistic.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendsList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/Transactions/TransactionHistory';

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

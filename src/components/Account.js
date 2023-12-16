import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/store';
const Account = () => {
  const balance = useSelector(state => state.account.balance);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Balance: {balance}</div>
      <input type="number" />
      <button onClick={() => dispatch(deposit(10))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(20))}>Withdraw</button>
    </div>
  );
};
export default Account;

import PropTypes from "prop-types";
import {TransactionHistoryStyled,TransactionTableHead,TransactionTable} from "./TransactionHistory.styled"

export const TransactionHistory = ({ transactions }) => (
  <TransactionHistoryStyled>
    <TransactionTableHead>
      <TransactionTable>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </TransactionTable>
    </TransactionTableHead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionTable key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </TransactionTable>
      ))}
    </tbody>
  </TransactionHistoryStyled>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf.isRequired(PropTypes.shape.isRequired({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  }))
};
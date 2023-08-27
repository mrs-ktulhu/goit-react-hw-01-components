import styled from '@emotion/styled'

export const TransactionHistoryStyled =  styled.table`
    width: 100%;
`

export const TransactionTableHead = styled.thead`
    background-color: #59b4ff;
    color: #ffffff;
`

export const TransactionTable = styled.tr`
    text-align: center;
    height: 40px;

    &:nth-of-type(2n) {
        background-color: #f1f1f1;
    }
`
const balanceChecker = (account) => {

status = (account.balance < 1000 ) ? "Low Balance" : "Sufficient Balance"

    return status
}

const account = {
                accountName: "David",
                balance: 500
}

console.log(balanceChecker(account))

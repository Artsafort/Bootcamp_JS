export const mapTransferApiToVisualModel = transfer => {
    return {
      selectAccount: transfer.selectAccount,
      iban: transfer.iban,
      name: transfer.name,
      amount: `${transfer.amount} €`,
      concept: transfer.concept,
      notes: transfer.notes,
      day: new Date(transfer.day).toLocaleDateString(),
      month: new Date(transfer.month).toLocaleDateString(),
      year: new Date(transfer.year).toLocaleDateString(),
      email: transfer.email
    };
};

export const mapTransferVisualModelToApi = transfer => {
  return {
    selectAccount: transfer.selectAccount,
      iban: transfer.iban,
      name: transfer.name,
      amount: `${transfer.amount} €`,
      concept: transfer.concept,
      notes: transfer.notes,
      day: new Date(transfer.day).toLocaleDateString(),
      month: new Date(transfer.month).toLocaleDateString(),
      year: new Date(transfer.year).toLocaleDateString(),
      email: transfer.email
  }
}
/*iban: ' ',
    name: ' ',
    amount: ' ',
    concept: ' ',
    notes: ' ',
    day: ' ',
    month: ' ',
    year: '',
    email: '', */

export const mapAccountApiToVisualModel = account => {
    return {
      selectAccount: account.selectAccount,
      id: account.id,
      name: account.alias,
      balance: `${account.balance} €`,
      iban: account.iban,
      alias: account.name
    };
};

  
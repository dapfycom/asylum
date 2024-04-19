export const adaptBigUint = (bigUint: any): string => {
  return bigUint.toString() as string;
};

export const adaptNumber = (number: any): number => {
  return number.toNumber() as number;
};

export const adaptTokenPayment = (
  tokenPayment: any
): {
  amount: string;
  token_identifier: string;
  token_nonce: number;
} => {
  return {
    amount: adaptBigUint(tokenPayment.amount),
    token_identifier: tokenPayment.token_identifier,
    token_nonce: adaptNumber(tokenPayment.token_nonce)
  };
};

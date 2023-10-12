import Stripe from "stripe";
import { STRIPE_API_KEY } from "../constants";
import type { StripeBalanceTransaction } from "../models/stripe";

const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: "2023-08-16",
});

export async function getEarnings(): Promise<StripeBalanceTransaction[]> {
  const balanceTransactions = await stripe.balanceTransactions.list({
    type: "charge",
    limit: 100,
  });

  const parsedBalanceTransactions = balanceTransactions.data.map(
    (balanceTransaction) => {
      const amount = balanceTransaction.amount / 100;
      const date = new Date(balanceTransaction.created * 1000);
      const currency = balanceTransaction.currency.toUpperCase();

      return {
        amount,
        date,
        currency,
      };
    }
  );

  return parsedBalanceTransactions;
}

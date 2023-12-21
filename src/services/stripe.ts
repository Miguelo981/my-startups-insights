import Stripe from "stripe";
import type { StripeBalanceTransaction } from "../models/stripe";

export async function getEarnings({ stripeApiKey }: { stripeApiKey?: string }): Promise<StripeBalanceTransaction[]> {
  if (!stripeApiKey) return [];

  const stripe = new Stripe(stripeApiKey, {
    apiVersion: "2023-08-16",
  });

  let balanceTransactions = await stripe.balanceTransactions.list({
    type: "charge",
    limit: 100,
  });

  if (balanceTransactions.data.length === 0) {
    balanceTransactions = await stripe.balanceTransactions.list({
      type: "payment",
      limit: 100,
    });
  }

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

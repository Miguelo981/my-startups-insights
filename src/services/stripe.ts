import Stripe from "stripe";
import { STRIPE_API_KEY } from "../constants";
import type { StripeBalanceTransaction } from "../models/stripe";

export async function getEarnings({ stripeApiKey = STRIPE_API_KEY }: { stripeApiKey?: string }): Promise<StripeBalanceTransaction[]> {
  const stripe = new Stripe(stripeApiKey, {
    apiVersion: "2023-08-16",
  });

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

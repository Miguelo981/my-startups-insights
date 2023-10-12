import type { StripeBalanceTransaction } from "./stripe";

export interface Startup {
    name: string;
    description: string;
    logo: string;
    url: string;
    createdAt: Date;
    earnings: StripeBalanceTransaction[];
}
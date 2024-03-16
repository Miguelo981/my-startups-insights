import type { StripeBalanceTransaction } from "./stripe";

export interface Startup {
    name: string;
    description: string;
    logo: string;
    url: string;
    sold: boolean;
    createdAt: Date;
    earnings: StripeBalanceTransaction[];
}
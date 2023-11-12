import type { Startup } from "./models/startup";
import type { StripeBalanceTransaction } from "./models/stripe";

export const STRIPE_API_KEY = import.meta.env.STRIPE_API_KEY;
export const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const startups = [
    {
        startup: {
            name: 'AutoTextGenie',
            description: 'Use Automated GPT-4 commands on Every textbox on the Internet',
            url: 'https://autotextgenie.com',
            logo: '/images/logos/autotextgenie.png',
            createdAt: new Date('2023-04-15'),
            earnings: [] as StripeBalanceTransaction[]
        } as Startup,
        stripeApiSecret: import.meta.env.STRIPE_API_KEY,
        filtering: (e: any) => e.amount > 5,
    },
    {
        startup: {
            name: 'Nameverse AI',
            description: 'Custom Native Name Generator',
            url: 'https://nameverse.app',
            logo: '/images/logos/nameverse.png',
            createdAt: new Date('2023-03-01'),
            earnings: [] as StripeBalanceTransaction[]
        } as Startup,
        stripeApiSecret: import.meta.env.STRIPE_API_KEY,
        filtering: (e: any) => e.amount < 5,
    },
    {
        startup: {
            name: 'Giftdeas AI',
            description: 'Perfect Gift Ideas for your loved ones',
            url: 'https://giftdeas.app',
            logo: '/images/logos/giftdeasai.png',
            createdAt: new Date('2023-02-01'),
            earnings: [] as StripeBalanceTransaction[]
        } as Startup,
        stripeApiSecret: import.meta.env.GIFTDEAS_STRIPE_API_KEY,
        filtering: (e: any) => e.amount > 0,
    },
]
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
            sold: false,
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
            sold: true,
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
            sold: false,
            createdAt: new Date('2023-02-01'),
            earnings: [] as StripeBalanceTransaction[]
        } as Startup,
        stripeApiSecret: import.meta.env.GIFTDEAS_STRIPE_API_KEY,
        filtering: (e: any) => e.amount > 0,
    },
    {
        startup: {
            name: 'HODL! Frens Club',
            description: 'Quit Wasting Precious Time on Idea Limbo!',
            url: 'https://HODLfrensclub.com/',
            logo: '/images/logos/hodlfrensclub.png',
            sold: false,
            createdAt: new Date('2023-12-03'),
            earnings: [] as StripeBalanceTransaction[]
        } as Startup,
        stripeApiSecret: import.meta.env.HODL_FRENS_CLUB_STRIPE_API_KEY,
        filtering: (e: any) => e.amount > 0,
    },
    {
        startup: {
            name: 'SaaSlidator',
            description: 'Stop wasting hours Validating Unicorn Ideas',
            url: 'https://saalidator.com/',
            logo: '/images/logos/saaslidator.png',
            sold: false,
            createdAt: new Date('2023-12-31'),
            earnings: [] as StripeBalanceTransaction[]
        } as Startup,
        stripeApiSecret: import.meta.env.HODL_FRENS_CLUB_STRIPE_API_KEY,
        filtering: (e: any) => e.amount > 0,
    },
]
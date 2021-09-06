import Stripe from 'stripe'

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: '03-ig.news',
      version: '0.1.0'
    },
  }
)
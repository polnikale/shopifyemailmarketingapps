export type Segment = {
  slug: string;
  name: string;
  pain: string;
  buyingCycle: string;
  emailPriorities: string[];
  topApps: string[];
  metrics: string[];
};

export const SEGMENTS: Segment[] = [
  {
    slug: 'fashion',
    name: 'fashion stores',
    pain: 'seasonality, size availability, drops, and fast-moving inventory',
    buyingCycle: '2–8 weeks between discovery and purchase; heavy browse behavior; high return rates on sizing',
    emailPriorities: ['Drop and waitlist campaigns', 'Size and fit education', 'Back-in-stock by variant', 'Seasonal winback before clearance'],
    topApps: ['sequenzy', 'klaviyo', 'omnisend', 'privy'],
    metrics: ['Revenue per recipient by collection', 'Second purchase within 60 days', 'Return rate by email segment', 'Full-price vs discount purchase ratio'],
  },
  {
    slug: 'beauty',
    name: 'beauty brands',
    pain: 'replenishment timing, bundles, subscriptions, shades, and routine education',
    buyingCycle: '30–90 day replenishment windows; strong subscription potential; shade/variant complexity',
    emailPriorities: ['Replenishment by product usage', 'Routine education sequences', 'Shade matching follow-up', 'Subscription skip/churn prevention'],
    topApps: ['sequenzy', 'klaviyo', 'omnisend', 'yotpo-email-sms'],
    metrics: ['Replenishment conversion rate', 'Subscription retention at 90 days', 'Bundle attach rate from email', 'Unsubscribe rate on education vs promo'],
  },
  {
    slug: 'supplements',
    name: 'supplement stores',
    pain: 'compliance-safe claims, subscriptions, replenishment, and education',
    buyingCycle: '30–60 day consumption cycles; high subscription adoption; compliance constraints on claims',
    emailPriorities: ['Compliance-safe education content', 'Replenishment timing by SKU', 'Subscription management emails', 'Ingredient and usage guides'],
    topApps: ['sequenzy', 'klaviyo', 'drip', 'omnisend'],
    metrics: ['Subscription churn from email touchpoints', 'Replenishment revenue per active subscriber', 'Compliance review pass rate', 'LTV by acquisition source'],
  },
  {
    slug: 'jewelry',
    name: 'jewelry stores',
    pain: 'gift timing, high-consideration purchases, and trust-building',
    buyingCycle: '2–12 weeks consideration; gift-driven spikes around holidays; high AOV trust requirements',
    emailPriorities: ['Gift guide and occasion campaigns', 'Trust-building education', 'Financing and warranty proof', 'Anniversary and milestone reminders'],
    topApps: ['sequenzy', 'klaviyo', 'activecampaign', 'omnisend'],
    metrics: ['Gift purchase attribution', 'Average consideration time', 'High-AOV conversion from nurture', 'Repeat gift buyer rate'],
  },
  {
    slug: 'home-goods',
    name: 'home goods stores',
    pain: 'larger catalogs, style preferences, and delayed purchase cycles',
    buyingCycle: '4–16 weeks; room-by-room purchasing; heavy inspiration browsing',
    emailPriorities: ['Room and style segmentation', 'Inspiration content series', 'Cross-sell by room completion', 'Seasonal refresh campaigns'],
    topApps: ['sequenzy', 'klaviyo', 'drip', 'mailchimp'],
    metrics: ['Cross-sell revenue per room segment', 'Browse-to-purchase window', 'Catalog engagement depth', 'Project completion rate'],
  },
  {
    slug: 'food-and-beverage',
    name: 'food and beverage brands',
    pain: 'repeat purchase windows, subscriptions, and limited-time flavors',
    buyingCycle: '1–4 week consumption; subscription-heavy; limited SKU availability',
    emailPriorities: ['Replenishment by consumption rate', 'New flavor launch alerts', 'Subscription box previews', 'Perishability and shipping clarity'],
    topApps: ['sequenzy', 'omnisend', 'klaviyo', 'rejoiner'],
    metrics: ['Reorder rate by product', 'Subscription skip recovery', 'Launch sell-through from email', 'Margin after shipping promos'],
  },
  {
    slug: 'pet-products',
    name: 'pet product stores',
    pain: 'pet lifecycle, reorder timing, and product education',
    buyingCycle: '2–8 week reorder by pet size and product type; life-stage transitions',
    emailPriorities: ['Pet life-stage segmentation', 'Reorder by consumption math', 'Breed/size-specific recommendations', 'New pet onboarding series'],
    topApps: ['sequenzy', 'omnisend', 'klaviyo', 'drip'],
    metrics: ['Reorder rate by pet segment', 'Life-stage transition revenue', 'Subscription retention', 'Education-to-purchase conversion'],
  },
  {
    slug: 'digital-products',
    name: 'digital product shops',
    pain: 'delivery, onboarding, cross-sells, and low-inventory constraints',
    buyingCycle: 'Immediate delivery; onboarding critical; cross-sell within 7 days',
    emailPriorities: ['Instant delivery and access emails', 'Onboarding and activation series', 'Cross-sell by purchase behavior', 'Renewal and upgrade paths'],
    topApps: ['sequenzy', 'activecampaign', 'klaviyo', 'drip'],
    metrics: ['Activation rate post-purchase', 'Cross-sell within 14 days', 'Renewal conversion', 'Support ticket reduction from onboarding'],
  },
  {
    slug: 'print-on-demand',
    name: 'print-on-demand stores',
    pain: 'trend cycles, personalization, and margin-sensitive promos',
    buyingCycle: 'Impulse to 2-week consideration; trend-driven; thin margins',
    emailPriorities: ['Trend and design drop alerts', 'Personalization follow-up', 'Margin-safe discount rules', 'Creator and niche community content'],
    topApps: ['sequenzy', 'omnisend', 'privy', 'klaviyo'],
    metrics: ['Margin per email order', 'Trend drop sell-through', 'Personalization completion rate', 'Discount dependency ratio'],
  },
  {
    slug: 'high-aov',
    name: 'high-AOV stores',
    pain: 'longer consideration, trust, financing, and expert proof',
    buyingCycle: '2–16 weeks; multiple touchpoints; financing and warranty decisions',
    emailPriorities: ['Extended nurture sequences', 'Expert proof and case studies', 'Financing and warranty education', 'Consultation booking follow-up'],
    topApps: ['sequenzy', 'klaviyo', 'activecampaign', 'drip'],
    metrics: ['Consideration-to-purchase window', 'Financing attach rate', 'Consultation-to-sale conversion', 'Full-price purchase percentage'],
  },
  {
    slug: 'subscription-boxes',
    name: 'subscription box brands',
    pain: 'subscriber retention, skips, churn, and upcoming-box previews',
    buyingCycle: 'Monthly recurring; skip behavior common; churn at month 3–4',
    emailPriorities: ['Upcoming box preview emails', 'Skip recovery sequences', 'Churn prevention at risk months', 'Referral and gifting campaigns'],
    topApps: ['sequenzy', 'klaviyo', 'rejoiner', 'omnisend'],
    metrics: ['Skip-to-active recovery rate', 'Churn by subscriber month', 'Referral revenue from email', 'Box preview engagement correlation'],
  },
  {
    slug: 'b2b-wholesale',
    name: 'B2B wholesale Shopify stores',
    pain: 'account approvals, bulk ordering, and rep follow-up',
    buyingCycle: 'Account-based; approval workflows; bulk reorder cycles',
    emailPriorities: ['Account approval and onboarding', 'Bulk order reminders', 'Rep-triggered follow-up', 'Catalog and MOQ updates'],
    topApps: ['sequenzy', 'activecampaign', 'klaviyo', 'brevo'],
    metrics: ['Account activation rate', 'Bulk reorder frequency', 'Rep-attributed revenue', 'MOQ compliance from email prompts'],
  },
];

export function segmentBySlug(slug: string) {
  return SEGMENTS.find((s) => s.slug === slug);
}

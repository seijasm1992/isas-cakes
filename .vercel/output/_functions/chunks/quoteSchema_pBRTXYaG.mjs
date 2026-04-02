import { z } from 'zod';

const eventTypes = [
  'Birthday',
  'Wedding',
  'Baby shower',
  'Graduation',
  'Corporate event',
  'Other',
];

const deliveryOptions = ['Pickup', 'Delivery'];

const budgetOptions = [
  'Under $150',
  '$150 - $250',
  '$250 - $400',
  '$400+',
];

const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .max(20, 'Phone number is too long.'),
  eventDate: z.string().min(1, 'Please select your event date.'),
  eventType: z.enum(eventTypes, {
    message: 'Please select the event type.',
  }),
  servings: z
    .string()
    .trim()
    .min(1, 'Please tell us how many servings you need.')
    .max(60, 'Please keep this answer shorter.'),
  flavor: z
    .string()
    .trim()
    .min(2, 'Please share your preferred flavor.')
    .max(80, 'Please keep this answer shorter.'),
  budget: z.enum(budgetOptions, {
    message: 'Please select a budget range.',
  }),
  fulfillment: z.enum(deliveryOptions, {
    message: 'Please choose pickup or delivery.',
  }),
  inspirationLink: z
    .union([z.literal(''), z.url('Please enter a valid URL.')])
    .transform((value) => value.trim()),
  details: z
    .string()
    .trim()
    .min(20, 'Please share a few more design details.')
    .max(1200, 'Please keep your message under 1200 characters.'),
});

const quoteRequestDefaults = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: eventTypes[0],
  servings: '',
  flavor: '',
  budget: budgetOptions[1],
  fulfillment: deliveryOptions[0],
  inspirationLink: '',
  details: '',
};

export { quoteRequestDefaults as a, budgetOptions as b, deliveryOptions as d, eventTypes as e, quoteRequestSchema as q };

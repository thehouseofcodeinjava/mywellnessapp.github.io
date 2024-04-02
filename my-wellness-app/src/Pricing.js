import PricingPlan from './PricingPlan';
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Text,
    Heading,
    Link,
    Stack,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
const plans = [
  {
    title: 'Free Trial',
    price: 0,
    description: 'Try our features for 14 days.',
    features: ['Limited features', 'No credit card required'],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Monthly',
    price: 19.99,
    description: 'Full access to all features.',
    features: ['Unlimited features', 'Monthly billing'],
    buttonText: 'Subscribe Monthly',
  },
  {
    title: 'Yearly',
    price: 89.99,
    description: 'Save money with a yearly subscription.',
    features: ['Unlimited features', 'Yearly billing (save 20%)'],
    buttonText: 'Subscribe Yearly',
  },
];

const Pricing = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
      {plans.map((plan) => (
        <PricingPlan key={plan.title} {...plan} />
      ))}
    </Grid>
  );
};

export default Pricing;

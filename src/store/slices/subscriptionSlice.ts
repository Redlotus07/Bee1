import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Plan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  type: 'individual' | 'corporate';
}

interface SubscriptionState {
  currentPlan: Plan | null;
  plans: Plan[];
  loading: boolean;
  error: string | null;
}

const plans: Plan[] = [
  {
    id: 'basic-individual',
    name: 'Basic',
    price: {
      monthly: 9.99,
      yearly: 99.99,
    },
    features: [
      'Basic financial tracking',
      'Simple reporting',
      'Single user account',
      'Email support',
    ],
    type: 'individual',
  },
  {
    id: 'pro-individual',
    name: 'Professional',
    price: {
      monthly: 24.99,
      yearly: 249.99,
    },
    features: [
      'Advanced financial tracking',
      'Custom reports',
      'API access',
      'Priority support',
      'Data export',
    ],
    type: 'individual',
  },
  {
    id: 'startup-corporate',
    name: 'Startup',
    price: {
      monthly: 99.99,
      yearly: 999.99,
    },
    features: [
      'Team collaboration',
      'Advanced analytics',
      'Custom integrations',
      'Dedicated support',
      'Up to 10 users',
    ],
    type: 'corporate',
  },
  {
    id: 'enterprise-corporate',
    name: 'Enterprise',
    price: {
      monthly: 299.99,
      yearly: 2999.99,
    },
    features: [
      'Unlimited users',
      'Custom solutions',
      'White-label options',
      '24/7 priority support',
      'On-premise deployment',
    ],
    type: 'corporate',
  },
];

const initialState: SubscriptionState = {
  currentPlan: null,
  plans,
  loading: false,
  error: null,
};

export const subscribeToPlan = createAsyncThunk(
  'subscription/subscribe',
  async ({ planId, interval }: { planId: string; interval: 'monthly' | 'yearly' }) => {
    const response = await fetch('/api/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planId, interval }),
    });

    if (!response.ok) {
      throw new Error('Subscription failed');
    }

    return response.json();
  }
);

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subscribeToPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPlan = state.plans.find(
          (plan) => plan.id === action.payload.planId
        ) || null;
      })
      .addCase(subscribeToPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Subscription failed';
      });
  },
});

export default subscriptionSlice.reducer;
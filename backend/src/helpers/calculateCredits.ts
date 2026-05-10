const planConfig = {
  FREE: {
    collections: 1,
    requests: 3,
    historyPeriod: 7,
    auth: "Basic",
    communitySupport: true,
    envs: true,
    requestScripts: true,
    prioritySupport: false,
  },

  PRO: {
    collections: Infinity,
    requests: Infinity,
    historyPeriod: Infinity,
    auth: "all",
    envs: true,
    communitySupport: true,
    requestScripts: true,
    prioritySupport: true,
  },
};

export const calculateCredits = (planType: keyof typeof planConfig) => {
  const TOTAL_CREDITS = 5;

  const plan = planConfig[planType];

  let score = 0;

  if (plan.collections) score++;
  if (plan.requests) score++;
  if (plan.historyPeriod) score++;
  if (plan.auth) score++;
  if (plan.envs) score++;
  if (plan.requestScripts) score++;

  if (plan.communitySupport || plan.prioritySupport) score++;

  const credits = Math.round((score / 7) * TOTAL_CREDITS);

  return credits;
};

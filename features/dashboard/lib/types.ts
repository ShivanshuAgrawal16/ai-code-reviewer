export type RepoVisibility = "public" | "private";

export type RepoSyncStatus = "pending" | "syncing" | "synced" | "failed";

export type DashboardRepo = {
  id: string;
  name: string;
  fullName: string;
  visibility: RepoVisibility;
  defaultBranch: string;
  updatedAt: string;
  language: string | null;
  stars: number;
  syncStatus?: RepoSyncStatus | null;
};

export type GithubInstallationStatus = {
  connected: boolean;
  accountLogin: string | null;
  installedAt: string | null;
};

export type SubscriptionPlan = "free" | "pro";

export type UserSubscription = {
  plan: SubscriptionPlan;
  status: "active" | "cancelled" | "trialing";
  renewsAt: string | null;
};

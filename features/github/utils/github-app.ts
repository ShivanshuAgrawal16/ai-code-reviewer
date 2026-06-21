import { runLoaderWorkerPool } from "next/dist/build/swc/loaderWorkerPool";
import { App } from "octokit";

let githubApp: App | null = null;

export function getGithubApp() {
  if (!githubApp) {
    githubApp = new App({
      appId: process.env.GITHUB_APP_ID!,
      privateKey: process.env.GITHUB_APP_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      webhooks: {
        secret: process.env.GITHUB_WEBHOOK_SECRET!,
      },
    });
  }

  return githubApp;
}

export function getGithubInstallUrl(userId: string) {
  const url = new URL(`https://github.com/apps/far-from-bug/installations/new`);
  url.searchParams.set("state", userId);
  return url.toString();
}

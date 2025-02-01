import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add these configurations
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  // Disable static optimization for pages that use document
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

// Modify Sentry config options
const sentryWebpackPluginOptions = {
  silent: true,
  org: "javascript-mastery",
  project: "javascript-nextjs",
  // Disable source map upload during build
  sourcemaps: {
    disable: true,
  },
};

const sentryOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

// Export with modified config
export default withSentryConfig(
  nextConfig,
  sentryWebpackPluginOptions,
  sentryOptions
);

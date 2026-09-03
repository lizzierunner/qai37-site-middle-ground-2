/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY_NAME;
const basePath = isGithubPages && repositoryName ? `/${repositoryName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
  // Required for static export when using next/image (safe to keep even with plain <img>).
  images: { unoptimized: true },
};

export default nextConfig;

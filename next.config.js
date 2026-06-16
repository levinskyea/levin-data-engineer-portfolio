/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" }
    ]
  },
  async rewrites() {
    const sections = ["projects", "dashboard", "skills", "experience", "contact", "etl-demo"];
    return sections.map((s) => ({
      source: `/${s}`,
      destination: "/"
    }));
  }
};

module.exports = nextConfig;

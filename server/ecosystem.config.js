module.exports = {
  apps: [
    {
      name: "project-management",
      script: "npm",
      args: "run dev", // Command to run
      interpreter: "none", // Ensures PM2 doesn't look for a Node script
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};

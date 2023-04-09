module.exports = {
  apps: [
    {
      name: 'practice',
      script: 'npm',
      args: 'run dev',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

module.exports = {
    apps: [
      {
        name: 'Refund-Payment-api',
        script: 'app.js',  // Replace with your actual main script file
        instances: 'max',
        exec_mode: 'cluster',
        watch: true,
        ignore_watch: ['node_modules', 'logs'],
        max_memory_restart: '1G',
      },
    ],
  };
  
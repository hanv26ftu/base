
var pm2Config = {
    apps: [
        {
            name: 'melinh',
            script: 'dist/src/main.js',
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
            min_uptime: 20000,
            max_restarts: 10,
            merge_logs: false,
            node_args: '--max_old_space_size=8000 --expose-gc',
            exec_mode: 'fork_mode',
            wait_ready: true,
            kill_timeout: 20000,
            listen_timeout: 3000
        }
    ]
};

module.exports = pm2Config;

// module.exports = {
//   apps: [{
//     name: 'silkline-api',
//     script: 'dist/main.js',
//     args: 'one two',
//     append_env_to_name: false,
//     // restartDelay: 1000,
//     instances: 1,
//     exec_mode: 'fork',
//     autorestart: true,
//     watch: false,
//     max_memory_restart: '1G',
//     env: {
//       NODE_ENV: 'production'
//     },
//     // env_production: {
//     //   NODE_ENV: 'production'
//     // }
//   }],

//   deploy: {
//     production: {
//       // key: '/Users/lengoccong/.ssh/ssh_nguyenthichamanh95',//local ssh key path
//       key: '/Users/lengoccong/.ssh/silkline-ssh-key',//local ssh key path
//       user: 'congln',// user in ssh key
//       host: '34.126.142.209',// server ip address
//       ref: 'origin/develop',
//       ssh_options: 'StrictHostKeyChecking=no', //'ForwardAgent=yes',// 
//       repo: 'git@silkline.gitlab.com:silkline/silkline-admin-api.git',
//       path: '/home/congln/silkline-api-production',
//       // 'pre-deploy-local': "npm run build",
//       'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
//       // 'pre-setup': '',
//       env: {
//         NODE_ENV: 'production'
//       }
//     }
//   }
// };

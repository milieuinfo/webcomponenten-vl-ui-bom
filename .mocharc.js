module.exports = {
    "full-trace": true,
    "reporter": 'mocha-multi-reporters',
    "reporter-option": [
        "configFile=reporter-config.json"
    ],
    "spec": ["node_modules/vl-ui-*/test/e2e/*.test.js"],
    "timeout": '20000'
};

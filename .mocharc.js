module.exports = {
    "full-trace": true,
    "reporter": "mocha-multi-reporters",
    "reporterOptions": {
        "configFile": 'reporter-config.json'
    },
    "spec": ["node_modules/vl-ui-*/test/e2e/button.test.js"],
    "timeout": '50000'
};
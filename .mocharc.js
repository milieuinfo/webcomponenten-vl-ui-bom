module.exports = {
    "full-trace": true,
    "reporter": 'spec',
    "spec": ["node_modules/vl-ui-*/test/e2e/!(form-validation|pattern|vl-core).test.js"],
    "timeout": '50000'
};
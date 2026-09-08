module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['src/features/support/**/*.ts'],
    format: ['html:cucumber-report.html'],
    timeout: 30000,
    publishQuiet: true,
  },
};

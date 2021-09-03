const MayaToken = artifacts.require("MayaToken");

module.exports = function (deployer) {
  deployer.deploy(MayaToken);
};

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments} = hre;
  const {log} = deployments;

  const brokenJazz = await deployments.get('BrokenJazz');
  log({brokenJazz: brokenJazz.address});
  log(`brokenJazz at ${brokenJazz.address}`);
};
export default func;
func.runAtTheEnd = true;

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import {
  CalHash,
  CalHash__factory,
  UniswapV2Factory,
  UniswapV2Factory__factory,
  UniswapV2Router02,
  UniswapV2Router02__factory,
  WETH9,
  WETH9__factory,
  USDT,
  USDT__factory,
  BUSD,
  UniswapV2Pair,
  UniswapV2Pair__factory,
  BUSD__factory,
  USDC,
  USDC__factory,
} from "../typechain";

import { expandTo18Decimals, mineBlocks } from "../utilities/utilities";
import { providers } from "ethers";
import { expect } from "chai";

describe("MasterChefStrategyLP_WithdrawLP", async () => {
  let owner: SignerWithAddress;
  let user: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;
  let user3: SignerWithAddress;
  let user4: SignerWithAddress;
  let user5: SignerWithAddress;
  let user6: SignerWithAddress;
  let user7: SignerWithAddress;
  let user8: SignerWithAddress;
  let signers: SignerWithAddress[];
  let BUSD: BUSD;
  let USDT: USDT;
  let factory: UniswapV2Factory;
  let router: UniswapV2Router02;
  let WETH: WETH9;
  let calHash: CalHash;
  let pairAddress: String;
  let pairInstance: UniswapV2Pair;
  let USDC: USDC;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    owner = signers[0];
    user = signers[1];
    user1 = signers[2];
    user2 = signers[3];
    user3 = signers[4];
    user4 = signers[5];
    user5 = signers[6];
    user6 = signers[7];
    user7 = signers[8];
    user8 = signers[9];

    factory = await new UniswapV2Factory__factory(owner).deploy(owner.address);
    WETH = await new WETH9__factory(owner).deploy();
    router = await new UniswapV2Router02__factory(owner).deploy(
      factory.address,
      WETH.address
    );

    calHash = await new CalHash__factory(owner).deploy();
    let initHash = (await calHash.getInitHash()).toString();
    console.log("initHash : ", initHash);
  });
  describe("Get LP", async () => {
    it("Deposit in MasterChef", async () => {
      console.log("Hello Uniswap");
    });
  });
});

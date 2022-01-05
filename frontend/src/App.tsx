import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletPage } from "./page/WalletPage";
import { CreateItemPage } from "./page/CreateItemPage";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import Profile from "./page/Profile";
import Navbar from "./components/Navbar";
import { Home } from "./page/Home";
import { DetailsItem } from "./page/DetailsItem";
import { useEffect } from "react";
import ArtMarketplace from "./contracts/ArtMarketplace.json";
import ArtTokens from "./contracts/ArtToken.json";
import { getWeb3 } from "./web3";
import { useAppContext } from "./context/app/context";
import { setNFTAccount, setNFTContract } from "./context/app/actions";
import { FooterPage } from "./page/FooterPage";

const ArtMarketplaceToken: any = ArtMarketplace;
const ArtToken: any = ArtTokens;

export const App = () => {
  const appContext = useAppContext();

  const init = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      if (typeof accounts === undefined) {
        alert("Please login with Metamask!");
        console.log("login to metamask");
      }

      const networkId = await web3.eth.net.getId();
      try {
        const artTokenContract = new web3.eth.Contract(
          ArtToken.abi,
          ArtToken.networks[networkId].address
        );
        console.log("Contract: ", artTokenContract);
        const marketplaceContract = new web3.eth.Contract(
          ArtMarketplaceToken.abi,
          ArtMarketplaceToken.networks[networkId].address
        );
        const totalSupply = await artTokenContract.methods.totalSupply().call();
        const totalItemsForSale = await marketplaceContract.methods
          .totalItemsForSale()
          .call();
        console.log(totalItemsForSale);
        for (var tokenId = 1; tokenId <= totalSupply; tokenId++) {
          let item = await artTokenContract.methods.Items(tokenId).call();
          let owner = await artTokenContract.methods.ownerOf(tokenId).call();

          // const response = await axios.get(`${SERVER_URL}/tokens/1`);

          // console.log("response: ", response);

          // itemsList.push({
          //   name: response.data.name,
          //   description: response.data.description,
          //   image: response.data.image,
          //   tokenId: item.id,
          //   creator: item.creator,
          //   owner: owner,
          //   uri: item.uri,
          //   isForSale: false,
          //   saleId: null,
          //   price: 0,
          //   isSold: null,
          // });
        }
        // if (totalItemsForSale > 0) {
        //   for (var saleId = 0; saleId < totalItemsForSale; saleId++) {
        //     let item = await marketplaceContract.methods
        //       .itemsForSale(saleId)
        //       .call();
        //     let active = await marketplaceContract.methods
        //       .activeItems(item.tokenId)
        //       .call();

        //     let itemListIndex = itemsList.findIndex(
        //       (i) => i.tokenId === item.tokenId
        //     );

        //     itemsList[itemListIndex] = {
        //       ...itemsList[itemListIndex],
        //       isForSale: active,
        //       saleId: item.id,
        //       price: item.price,
        //       isSold: item.isSold,
        //     };
        //   }
        // }

        appContext.dispatch(setNFTContract(artTokenContract));
        appContext.dispatch(setNFTAccount(accounts[0]));
        // const receipt = await artTokenContract.methods
        // .mint(tokenMetadataURL)
        // .send({ from: account });
        // console.log(receipt);
        // console.log(receipt.events.Transfer.returnValues.tokenId);
      } catch (error) {
        console.error("Error", error);
        alert(
          "Contracts not deployed to the current network " +
            networkId.toString()
        );
      }
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.` +
          error
      );
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await init();
    })();
  });
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wallet" element={<WalletPage />}></Route>
        <Route path="/create-item" element={<CreateItemPage />}></Route>
        <Route path="/details-item/:id" element={<DetailsItem />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
};

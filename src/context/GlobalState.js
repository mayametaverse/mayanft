// import React, { createContext, useReducer, useEffect } from "react";
// import AppReducer from "./AppReducer";
// import Web3 from "web3";
// import MayaToken from "../abis/MayaToken.json";

// // Initial state
// const initialState = {
//   account: "",
//   Mayas: [],
//   web3: null,
//   contract: null,
// };

// // Create context
// export const GlobalContext = createContext(initialState);
// // IPFS
// //Declare IPFS
// const ipfsClient = require("ipfs-http-client");
// const ipfs = ipfsClient({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
// });

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   useEffect(() => {
//     loadWeb3();
//     loadBlockchainData();
//   }, []);

//   const loadWeb3 = async () => {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     } else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//       window.alert(
//         "Non-Ethereum browser detected. You should consider trying MetaMask!"
//       );
//     }
//   };

//   const loadBlockchainData = async () => {
//     const web3 = window.web3;
//     //Load account
//     const accounts = await web3.eth.getAccounts();
//     console.log(accounts);
//     //this.setState({ account: accounts[0] });
//     accountsSetup({ account: accounts[0] });
//     //Network ID
//     const networkId = await web3.eth.net.getId();
//     const networkData = MayaToken.networks[networkId];
//     if (networkData) {
//       const abi = MayaToken.abi;
//       const address = networkData.address;
//       // contract = Maya
//       const contract = new web3.eth.Contract(abi, address);
//       this.setState({ contract });
//       const MayaCount = await contract.methods.MayaCount().call();
//       this.setState({ MayaCount });
//       // Load Mayas
//       for (var i = 1; i <= MayaCount; i++) {
//         const Maya = await contract.methods.Mayas(i).call();
//         this.setState({
//           Mayas: [...this.state.Mayas, Maya],
//         });
//       }
//       this.setState({ loading: false });
//     } else {
//       window.alert("Maya contract not deployed to detected network");
//     }
//   };

//   // actions go here
//   function web3Setup(web3) {
//     dispatch({
//       type: "SETUP_WEB3",
//       payload: web3,
//     });
//   }

//   function accountsSetup(accounts) {
//     dispatch({
//       type: "SETUP_ACCOUNT",
//       payload: accounts,
//     });
//   }

//   function contractSetup(contract) {
//     dispatch({
//       type: "SETUP_CONTRACT",
//       payload: contract,
//     });
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         // BUY NFT function
//         // IPFS Capture file function
//         //
//         Mayas: state.Mayas,
//         web3: state.web3,
//         contract: state.contract,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

<p align='center'>
    <img src='./img/logo_3_2.png' width=400/>
</p>

Polysign

###

Polysign is a web3 implementation of esignature collection built on Polygon smart contracts and IPFS.

Enables Docusign-like capabilities and use-cases using web3 infrastructure.

Submitted to the Encode x Polygon Hackathon Open track / Full stack challenge.

### Benefits

- Polysign enables anyone to create and collect esignature against documents without a vendor agreement. A polygon smart contract is deployed for each request.
- Each packet of documents for esignature is made accessible at an IPFS url.
- When the esignature is completed, an NFT is generated that links both the signer's signature and the documents being agreed on.
- Hosted documents and the request are immutable.
- Smart contract deployed on Polygon which marks the progress/fulfillment of the esignature request. The contract can only be marked completed by the designated signer address at time of final signature.
- View history of requests and completed esignatures using the covalent chain history API directly from the app.
- An individual in the context of the Polysign application is the pairing of a canvas (handwritten) signature and wallet signature/address.

### Technologies used

- Covalent: Enables in-app history queries of past esignature requests and fulfillment for a given polygon address.
- NFTPort: Generation of the esignature record / proof. Attaches the final esignature/agreement to an NFT and saves a link to it in the smart contract.
- Polygon: In-app deployment of the request smart contract and marked completed upon completion of the each request based on receival of signer's signature. A new Polygon contract is deployed for each new esignature request.

<!-- <b>This project is a hackathon prototype and would require additional work / deployment to be production ready. -->

---

To run/demo the project locally, Polysign requires the following environment variables.

<pre>
    REACT_APP_COVALENT_KEY={YOUR_COVALENT_API_KEY} # Covalent key for the history page.
    REACT_APP_NFT_PORT_KEY={YOUR_NFT_PORT_API_KEY} # NFT port api key for receipt creation.
    REACT_APP_STORAGE_KEY={YOUR_WEB3_STORAGE_KEY} # web3.storage key for file hosting.
</pre>

---

After declaring the above environment variables, use the below command to start the project:
`yarn; yarn start`

Recompiling Polysign contract:
`cd contracts; npx hardhat compile`

Example esignature requests contracts:
http://localhost:3000/sign/QmUAS9XJyf9gPgadoVeExESiVnVJmVJW6qtcU4dzJzwG96

<!--
Sponsors:
Polygon - Deploys a smart contract for esign.
Covalent - Signature history.
NFTport - Signature NFT creation on polygon.

Demo flow:
Show docusign site / discuss industry baseline
Show Polysign.
Create an esign request
Submit (Can be metamask or sequence wallet)
Show result (polygon contract)
View the completed assets (polygon, contract interaction, nftport)
History page (covalent, look up a given contract owner's request/collection history)
Github

-->

### Screenshots

#### Home page

<img src="./img/home.png" width=800/>

#### Creating a request

<img src="./img/create.png" width=800/>

### Request saved via Moralis on IPFS and as smart contract

<img src="./img/request.png" width=800>

### Esigning

<img src="./img/esign.png" width=800>

### Completion esignature NFT

<img src="./img/completed.png" width=800>

### Deployed Contract

<img src="./img/contract.png" width=800/ >

### Contract source

<img src="./img/sol.png" width=800/ >

### Useful links
<!-- https://medium.com/encode-club/announcing-the-encode-x-polygon-partnership-and-initiatives-544cbddc5a0b -->

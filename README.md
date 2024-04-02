## Description

<!-- <a href="" target="_blank" rel="noopener noreferrer"><img src="./public/assets/svg/test/logo.jpg" alt="Coverage" /></a> -->

# WinWin

WinWin is a DeFi savings account on the Pulsechain protocol that allows users to compound yield savings and win crypto prizes. WinWin will give everyone a fair chance of regularly winning prizes without risking their own tokens, all while generating an APY that compounds automatically.

The user can access the application via web-browser, and he must have the supported crypto wallet installed. This interface, built with Next.js, relies on the Wagmi and Ethers.js library to communicate with the smart contracts through any supported crypto wallet. This means that the data reflected on the front-end application is fetched from the Pulse Chain blockchain. Each action performed by the user (Staking, Buying, investing in pools) creates a transaction on Pulse Chain, which will require connected wallet confirmation and pay a small fee, and this transaction will permanently modify the state of the blockchain.

<!-- <img src="./public/assets/svg/landing_ss.png"> -->

## System Requirements

    # Node.js 16.8 or later.
    # MacOS, Windows (including WSL), and Linux are supported.

## Prerequisites

    # Download the Node js and setup your environment

    # Check your node version
    $ node -v

    # Check package manager version
    $ yarn -v (or) npm -v

## Quick Start

    # Clone the application
    $ git clone -b dev https://gitlab.rapidinnovation.tech/root/web-next-landing-winwin.git
    # Install dependencies
    $ yarn install (or) npm install

    # Serve on localhost:3000
    $ yarn run dev (or) npm run dev

(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,424669,e=>{"use strict";var t=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "ready": {
      "qr_code": {
        "step1": {
          "description": "Add Ready to your home screen for faster access to your wallet.",
          "title": "Open the Ready app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ctrl": {
      "extension": {
        "step1": {
          "title": "Install the CTRL Wallet extension",
          "description": "We recommend pinning CTRL Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`;e.s(["en_US_default",()=>t])},275700,(e,t,r)=>{"use strict";var o=e.r(116131),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=o.useState,s=o.useEffect,i=o.useLayoutEffect,c=o.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var u="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),o=a({inst:{value:r,getSnapshot:t}}),n=o[0].inst,u=o[1];return i(function(){n.value=r,n.getSnapshot=t,l(n)&&u({inst:n})},[e,r,t]),s(function(){return l(n)&&u({inst:n}),e(function(){l(n)&&u({inst:n})})},[e]),c(r),r};r.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:u},919166,(e,t,r)=>{"use strict";t.exports=e.r(275700)},365427,(e,t,r)=>{"use strict";var o=e.r(116131),n=e.r(919166),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useSyncExternalStore,i=o.useRef,c=o.useEffect,l=o.useMemo,u=o.useDebugValue;r.useSyncExternalStoreWithSelector=function(e,t,r,o,n){var p=i(null);if(null===p.current){var d={hasValue:!1,value:null};p.current=d}else d=p.current;var h=s(e,(p=l(function(){function e(e){if(!c){if(c=!0,s=e,e=o(e),void 0!==n&&d.hasValue){var t=d.value;if(n(t,e))return i=t}return i=e}if(t=i,a(s,e))return t;var r=o(e);return void 0!==n&&n(t,r)?(s=e,t):(s=e,i=r)}var s,i,c=!1,l=void 0===r?null:r;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,r,o,n]))[0],p[1]);return c(function(){d.hasValue=!0,d.value=h},[h]),u(h),h}},53454,(e,t,r)=>{"use strict";t.exports=e.r(365427)},69150,896745,257815,403867,611358,727549,767885,274500,e=>{"use strict";function t(e){let t=e.state.current,r=e.state.connections.get(t),o=r?.accounts,n=o?.[0],a=e.chains.find(e=>e.id===r?.chainId),s=e.state.status;switch(s){case"connected":return{address:n,addresses:o,chain:a,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:s};case"reconnecting":return{address:n,addresses:o,chain:a,chainId:r?.chainId,connector:r?.connector,isConnected:!!n,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:s};case"connecting":return{address:n,addresses:o,chain:a,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:s};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:s}}}function r(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){let o,n;if(e.constructor!==t.constructor)return!1;if(Array.isArray(e)&&Array.isArray(t)){if((o=e.length)!==t.length)return!1;for(n=o;0!=n--;)if(!r(e[n],t[n]))return!1;return!0}if("function"==typeof e.valueOf&&e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if("function"==typeof e.toString&&e.toString!==Object.prototype.toString)return e.toString()===t.toString();let a=Object.keys(e);if((o=a.length)!==Object.keys(t).length)return!1;for(n=o;0!=n--;)if(!Object.hasOwn(t,a[n]))return!1;for(n=o;0!=n--;){let o=a[n];if(o&&!r(e[o],t[o]))return!1}return!0}return e!=e&&t!=t}function o(e,o){let{onChange:n}=o;return e.subscribe(()=>t(e),n,{equalityFn(e,t){let{connector:o,...n}=e,{connector:a,...s}=t;return r(n,s)&&o?.id===a?.id&&o?.uid===a?.uid}})}e.s(["deepEqual",()=>r],896745),e.s(["watchAccount",()=>o],257815);var n,a,s=e.i(116131);let i=!1;async function c(e,t={}){let r;if(i)return[];i=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let o=[];if(t.connectors?.length)for(let r of t.connectors){let t;t="function"==typeof r?e._internal.connectors.setup(r):r,o.push(t)}else o.push(...e.connectors);try{r=await e.storage?.getItem("recentConnectorId")}catch{}let n={};for(let[,t]of e.state.connections)n[t.connector.id]=1;r&&(n[r]=0);let a=Object.keys(n).length>0?[...o].sort((e,t)=>(n[e.id]??10)-(n[t.id]??10)):o,s=!1,l=[],u=[];for(let t of a){let r=await t.getProvider().catch(()=>void 0);if(!r||u.some(e=>e===r)||!await t.isAuthorized())continue;let o=await t.connect({isReconnecting:!0}).catch(()=>null);o&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let r=new Map(s?e.connections:new Map).set(t.uid,{accounts:o.accounts,chainId:o.chainId,connector:t});return{...e,current:s?e.current:t.uid,connections:r}}),l.push({accounts:o.accounts,chainId:o.chainId,connector:t}),u.push(r),s=!0)}return("reconnecting"===e.state.status||"connecting"===e.state.status)&&(s?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:null,status:"disconnected"}))),i=!1,l}function l(e){let{children:t,config:r,initialState:o,reconnectOnMount:n=!0}=e,{onMount:a}=function(e,t){let{initialState:r,reconnectOnMount:o}=t;return r&&!e._internal.store.persist.hasHydrated()&&e.setState({...r,chainId:e.chains.some(e=>e.id===r.chainId)?r.chainId:e.chains[0].id,connections:o?r.connections:new Map,status:o?"reconnecting":"disconnected"}),{async onMount(){e._internal.ssr&&(await e._internal.store.persist.rehydrate(),e._internal.mipd&&e._internal.connectors.setState(t=>{let r=new Set;for(let e of t??[])if(e.rdns)for(let t of Array.isArray(e.rdns)?e.rdns:[e.rdns])r.add(t);let o=[];for(let t of e._internal.mipd?.getProviders()??[]){if(r.has(t.info.rdns))continue;let n=e._internal.connectors.providerDetailToConnector(t),a=e._internal.connectors.setup(n);o.push(a)}return[...t,...o]})),o?c(e):e.storage&&e.setState(e=>({...e,connections:new Map}))}}}(r,{initialState:o,reconnectOnMount:n});r._internal.ssr||a();let i=(0,s.useRef)(!0);return(0,s.useEffect)(()=>{if(i.current&&r._internal.ssr)return a(),()=>{i.current=!1}},[]),t}let u=(0,s.createContext)(void 0);function p(e){let{children:t,config:r}=e;return(0,s.createElement)(l,e,(0,s.createElement)(u.Provider,{value:r},t))}e.s(["WagmiContext",0,u,"WagmiProvider",()=>p],403867);let d="2.22.1";e.s(["version",0,d],611358);var h=function(e,t,r,o){if("a"===r&&!o)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?o:"a"===r?o.call(e):o?o.value:t.get(e)};class y extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return`@wagmi/core@${d}`}constructor(e,t={}){super(),n.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=t.cause instanceof y?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof y&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return h(this,n,"m",a).call(this,this,e)}}n=new WeakSet,a=function e(t,r){return r?.(t)?t:t.cause?h(this,n,"m",e).call(this,t.cause,r):t},e.s(["BaseError",()=>y],727549);class w extends y{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return"wagmi@2.19.5"}}class m extends w{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function f(e={}){let t=e.config??(0,s.useContext)(u);if(!t)throw new m;return t}e.s(["useConfig",()=>f],767885);var b=e.i(53454);let g=e=>"object"==typeof e&&!Array.isArray(e);function v(e={}){let n=f(e);return function(e,t,o=t,n=r){let a=(0,s.useRef)([]),i=(0,b.useSyncExternalStoreWithSelector)(e,t,o,e=>e,(e,t)=>{if(g(e)&&g(t)&&a.current.length){for(let r of a.current)if(!n(e[r],t[r]))return!1;return!0}return n(e,t)});return(0,s.useMemo)(()=>{if(g(i)){let e={...i},t={};for(let[r,o]of Object.entries(e))t={...t,[r]:{configurable:!1,enumerable:!0,get:()=>(a.current.includes(r)||a.current.push(r),o)}};return Object.defineProperties(e,t),e}return i},[i])}(e=>o(n,{onChange:e}),()=>t(n))}function k(e){return e.state.chainId}function x(e={}){let t=f(e);return(0,s.useSyncExternalStore)(e=>(function(e,t){let{onChange:r}=t;return e.subscribe(e=>e.chainId,r)})(t,{onChange:e}),()=>k(t),()=>k(t))}e.s(["useAccount",()=>v],69150),e.s(["useChainId",()=>x],274500)},876414,803128,e=>{"use strict";var t=e.i(172930),r=e.i(158359),o=e.i(442982),n=e.i(945995);function a(e,a){let s,i;return(0,t.keccak256)((s="string"==typeof e?(0,n.stringToHex)(e):"string"==typeof e.raw?e.raw:(0,n.bytesToHex)(e.raw),i=(0,n.stringToHex)(`\x19Ethereum Signed Message:
${(0,o.size)(s)}`),(0,r.concat)([i,s])),a)}e.s(["hashMessage",()=>a],876414),e.s(["hashTypedData",()=>m],803128);var s=e.i(773764),i=e.i(266368),c=e.i(496311),l=e.i(817438),u=e.i(252979);class p extends u.BaseError{constructor({domain:e}){super(`Invalid domain "${(0,l.stringify)(e)}".`,{metaMessages:["Must be a valid EIP-712 domain."]})}}class d extends u.BaseError{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:"/api/glossary/Errors#typeddatainvalidprimarytypeerror",metaMessages:["Check that the primary type is a key in `types`."]})}}class h extends u.BaseError{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:["Struct type must not be a Solidity type."],name:"InvalidStructTypeError"})}}var y=e.i(205876),w=e.i(864283);function m(e){let{domain:a={},message:s,primaryType:l}=e,u={EIP712Domain:function({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},("number"==typeof e?.chainId||"bigint"==typeof e?.chainId)&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}({domain:a}),...e.types};!function(e){let{domain:t,message:r,primaryType:a,types:s}=e,l=(e,t)=>{for(let r of e){let{name:e,type:a}=r,u=t[e],p=a.match(w.integerRegex);if(p&&("number"==typeof u||"bigint"==typeof u)){let[e,t,r]=p;(0,n.numberToHex)(u,{signed:"int"===t,size:Number.parseInt(r,10)/8})}if("address"===a&&"string"==typeof u&&!(0,y.isAddress)(u))throw new c.InvalidAddressError({address:u});let d=a.match(w.bytesRegex);if(d){let[e,t]=d;if(t&&(0,o.size)(u)!==Number.parseInt(t,10))throw new i.BytesSizeMismatchError({expectedSize:Number.parseInt(t,10),givenSize:(0,o.size)(u)})}let m=s[a];m&&(function(e){if("address"===e||"bool"===e||"string"===e||e.startsWith("bytes")||e.startsWith("uint")||e.startsWith("int"))throw new h({type:e})}(a),l(m,u))}};if(s.EIP712Domain&&t){if("object"!=typeof t)throw new p({domain:t});l(s.EIP712Domain,t)}if("EIP712Domain"!==a)if(s[a])l(s[a],r);else throw new d({primaryType:a,types:s})}({domain:a,message:s,primaryType:l,types:u});let m=["0x1901"];return a&&m.push(function({domain:e,types:t}){return f({data:e,primaryType:"EIP712Domain",types:t})}({domain:a,types:u})),"EIP712Domain"!==l&&m.push(f({data:s,primaryType:l,types:u})),(0,t.keccak256)((0,r.concat)(m))}function f({data:e,primaryType:r,types:o}){let a=function e({data:r,primaryType:o,types:a}){let i=[{type:"bytes32"}],c=[function({primaryType:e,types:r}){let o=(0,n.toHex)(function({primaryType:e,types:t}){let r="",o=function e({primaryType:t,types:r},o=new Set){let n=t.match(/^\w*/u),a=n?.[0];if(o.has(a)||void 0===r[a])return o;for(let t of(o.add(a),r[a]))e({primaryType:t.type,types:r},o);return o}({primaryType:e,types:t});for(let n of(o.delete(e),[e,...Array.from(o).sort()]))r+=`${n}(${t[n].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:r}));return(0,t.keccak256)(o)}({primaryType:o,types:a})];for(let l of a[o]){let[o,u]=function r({types:o,name:a,type:i,value:c}){if(void 0!==o[i])return[{type:"bytes32"},(0,t.keccak256)(e({data:c,primaryType:i,types:o}))];if("bytes"===i)return[{type:"bytes32"},(0,t.keccak256)(c)];if("string"===i)return[{type:"bytes32"},(0,t.keccak256)((0,n.toHex)(c))];if(i.lastIndexOf("]")===i.length-1){let e=i.slice(0,i.lastIndexOf("[")),n=c.map(t=>r({name:a,type:e,types:o,value:t}));return[{type:"bytes32"},(0,t.keccak256)((0,s.encodeAbiParameters)(n.map(([e])=>e),n.map(([,e])=>e)))]}return[{type:i},c]}({types:a,name:l.name,type:l.type,value:r[l.name]});i.push(o),c.push(u)}return(0,s.encodeAbiParameters)(i,c)}({data:e,primaryType:r,types:o});return(0,t.keccak256)(a)}},661036,e=>{"use strict";function t(e,t){let r=e.toString(),o=r.startsWith("-");o&&(r=r.slice(1));let[n,a]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return a=a.replace(/(0+)$/,""),`${o?"-":""}${n||"0"}${a?`.${a}`:""}`}e.s(["formatUnits",()=>t])},178256,138558,e=>{"use strict";let t={ether:-9,wei:9};e.s(["etherUnits",0,{gwei:9,wei:18},"gweiUnits",0,t,"weiUnits",0,{ether:-18,gwei:-9}],138558);var r=e.i(661036);function o(e,n="wei"){return(0,r.formatUnits)(e,t[n])}e.s(["formatGwei",()=>o],178256)},417286,e=>{"use strict";e.s(["getContractAddress",0,e=>e,"getUrl",0,e=>e])},312412,e=>{"use strict";var t=e.i(817438),r=e.i(252979),o=e.i(417286);class n extends r.BaseError{constructor({body:e,cause:r,details:n,headers:a,status:s,url:i}){super("HTTP request failed.",{cause:r,details:n,metaMessages:[s&&`Status: ${s}`,`URL: ${(0,o.getUrl)(i)}`,e&&`Request body: ${(0,t.stringify)(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=a,this.status=s,this.url=i}}r.BaseError;class a extends r.BaseError{constructor({body:e,error:r,url:n}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${(0,o.getUrl)(n)}`,`Request body: ${(0,t.stringify)(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code,this.data=r.data,this.url=n}}r.BaseError;class s extends r.BaseError{constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.getUrl)(r)}`,`Request body: ${(0,t.stringify)(e)}`],name:"TimeoutError"}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.url=r}}e.s(["HttpRequestError",()=>n,"RpcRequestError",()=>a,"TimeoutError",()=>s])},450834,e=>{"use strict";var t=e.i(178256),r=e.i(252979);class o extends r.BaseError{constructor({cause:e,message:t}={}){const r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted|gas required exceeds allowance/});class n extends r.BaseError{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${(0,t.formatGwei)(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(n,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class a extends r.BaseError{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${(0,t.formatGwei)(r)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e,name:"FeeCapTooLowError"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class s extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e,name:"NonceTooHighError"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class i extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e,name:"NonceTooLowError"})}}Object.defineProperty(i,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class c extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e,name:"NonceMaxValueError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class l extends r.BaseError{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."],name:"InsufficientFundsError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds|exceeds transaction sender account balance/});class u extends r.BaseError{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e,name:"IntrinsicGasTooHighError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends r.BaseError{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e,name:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class d extends r.BaseError{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e,name:"TransactionTypeNotSupportedError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class h extends r.BaseError{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:o}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${(0,t.formatGwei)(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${o?` = ${(0,t.formatGwei)(o)} gwei`:""}).`,{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class y extends r.BaseError{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e,name:"UnknownNodeError"})}}e.s(["ExecutionRevertedError",()=>o,"FeeCapTooHighError",()=>n,"FeeCapTooLowError",()=>a,"InsufficientFundsError",()=>l,"IntrinsicGasTooHighError",()=>u,"IntrinsicGasTooLowError",()=>p,"NonceMaxValueError",()=>c,"NonceTooHighError",()=>s,"NonceTooLowError",()=>i,"TipAboveFeeCapError",()=>h,"TransactionTypeNotSupportedError",()=>d,"UnknownNodeError",()=>y])},740957,342787,e=>{"use strict";function t(){let e=()=>void 0,t=()=>void 0;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}e.s(["withResolvers",()=>t],342787);let r=new Map;function o({fn:e,id:o,shouldSplitBatch:n,wait:a=0,sort:s}){let i=async()=>{let t=l();c();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{s&&Array.isArray(e)&&e.sort(s);for(let r=0;r<t.length;r++){let{resolve:o}=t[r];o?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{reject:o}=t[r];o?.(e)}})},c=()=>r.delete(o),l=()=>r.get(o)||[],u=e=>r.set(o,[...l(),e]);return{flush:c,async schedule(e){let{promise:r,resolve:o,reject:s}=t();return(n?.([...l().map(({args:e})=>e),e])&&i(),l().length>0)?u({args:e,resolve:o,reject:s}):(u({args:e,resolve:o,reject:s}),setTimeout(i,a)),r}}}e.s(["createBatchScheduler",()=>o],740957)},407471,315380,e=>{"use strict";var t=e.i(252979),r=e.i(312412);class o extends t.BaseError{constructor(e,{code:t,docsPath:o,metaMessages:n,name:a,shortMessage:s}){super(s,{cause:e,docsPath:o,metaMessages:n||e?.metaMessages,name:a||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=a||e.name,this.code=e instanceof r.RpcRequestError?e.code:t??-1}}class n extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class a extends o{constructor(e){super(e,{code:a.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(a,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class s extends o{constructor(e){super(e,{code:s.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class i extends o{constructor(e,{method:t}={}){super(e,{code:i.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(i,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class c extends o{constructor(e){super(e,{code:c.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class l extends o{constructor(e){super(e,{code:l.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class u extends o{constructor(e){super(e,{code:u.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends o{constructor(e){super(e,{code:p.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class d extends o{constructor(e){super(e,{code:d.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class h extends o{constructor(e){super(e,{code:h.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class y extends o{constructor(e,{method:t}={}){super(e,{code:y.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not supported.`})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class w extends o{constructor(e){super(e,{code:w.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class m extends o{constructor(e){super(e,{code:m.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class f extends n{constructor(e){super(e,{code:f.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class b extends n{constructor(e){super(e,{code:b.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class g extends n{constructor(e,{method:t}={}){super(e,{code:g.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class v extends n{constructor(e){super(e,{code:v.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class k extends n{constructor(e){super(e,{code:k.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class x extends n{constructor(e){super(e,{code:x.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class W extends n{constructor(e){super(e,{code:W.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(W,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class R extends n{constructor(e){super(e,{code:R.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class E extends n{constructor(e){super(e,{code:E.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class C extends n{constructor(e){super(e,{code:C.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class I extends n{constructor(e){super(e,{code:I.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class O extends n{constructor(e){super(e,{code:O.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class T extends n{constructor(e){super(e,{code:T.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class P extends o{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}async function q(e){return new Promise(t=>setTimeout(t,e))}e.s(["AtomicReadyWalletRejectedUpgradeError",()=>O,"AtomicityNotSupportedError",()=>T,"BundleTooLargeError",()=>I,"ChainDisconnectedError",()=>k,"DuplicateIdError",()=>E,"InternalRpcError",()=>l,"InvalidInputRpcError",()=>u,"InvalidParamsRpcError",()=>c,"InvalidRequestRpcError",()=>s,"JsonRpcVersionUnsupportedError",()=>m,"LimitExceededRpcError",()=>w,"MethodNotFoundRpcError",()=>i,"MethodNotSupportedRpcError",()=>y,"ParseRpcError",()=>a,"ProviderDisconnectedError",()=>v,"ResourceNotFoundRpcError",()=>p,"ResourceUnavailableRpcError",()=>d,"SwitchChainError",()=>x,"TransactionRejectedRpcError",()=>h,"UnauthorizedProviderError",()=>b,"UnknownBundleIdError",()=>C,"UnknownRpcError",()=>P,"UnsupportedChainIdError",()=>R,"UnsupportedNonOptionalCapabilityError",()=>W,"UnsupportedProviderMethodError",()=>g,"UserRejectedRequestError",()=>f],407471),e.s(["wait",()=>q],315380)},12799,e=>{"use strict";var t=e.i(315380);function r(e,{delay:o=100,retryCount:n=2,shouldRetry:a=()=>!0}={}){return new Promise((r,s)=>{let i=async({count:c=0}={})=>{let l=async({error:e})=>{let r="function"==typeof o?o({count:c,error:e}):o;r&&await (0,t.wait)(r),i({count:c+1})};try{let t=await e();r(t)}catch(e){if(c<n&&await a({count:c,error:e}))return l({error:e});s(e)}};i()})}e.s(["withRetry",()=>r])},253675,e=>{"use strict";let t,r=256;function o(e=11){if(!t||r+e>512){t="",r=0;for(let e=0;e<256;e++)t+=(256+256*Math.random()|0).toString(16).substring(1)}return t.substring(r,r+++e)}e.s(["uid",()=>o])},237079,e=>{"use strict";let t=new(e.i(73886)).LruMap(8192);function r(e,{enabled:r=!0,id:o}){if(!r||!o)return e();if(t.get(o))return t.get(o);let n=e().finally(()=>t.delete(o));return t.set(o,n),n}e.s(["withDedupe",()=>r])},257622,e=>{"use strict";var t=e.i(252979),r=e.i(312412),o=e.i(407471),n=e.i(945995),a=e.i(237079),s=e.i(12799),i=e.i(817438);function c(e,l={}){return async(c,u={})=>{let{dedupe:p=!1,methods:d,retryDelay:h=150,retryCount:y=3,uid:w}={...l,...u},{method:m}=c;if(d?.exclude?.includes(m)||d?.include&&!d.include.includes(m))throw new o.MethodNotSupportedRpcError(Error("method not supported"),{method:m});let f=p?(0,n.stringToHex)(`${w}.${(0,i.stringify)(c)}`):void 0;return(0,a.withDedupe)(()=>(0,s.withRetry)(async()=>{try{return await e(c)}catch(e){switch(e.code){case o.ParseRpcError.code:throw new o.ParseRpcError(e);case o.InvalidRequestRpcError.code:throw new o.InvalidRequestRpcError(e);case o.MethodNotFoundRpcError.code:throw new o.MethodNotFoundRpcError(e,{method:c.method});case o.InvalidParamsRpcError.code:throw new o.InvalidParamsRpcError(e);case o.InternalRpcError.code:throw new o.InternalRpcError(e);case o.InvalidInputRpcError.code:throw new o.InvalidInputRpcError(e);case o.ResourceNotFoundRpcError.code:throw new o.ResourceNotFoundRpcError(e);case o.ResourceUnavailableRpcError.code:throw new o.ResourceUnavailableRpcError(e);case o.TransactionRejectedRpcError.code:throw new o.TransactionRejectedRpcError(e);case o.MethodNotSupportedRpcError.code:throw new o.MethodNotSupportedRpcError(e,{method:c.method});case o.LimitExceededRpcError.code:throw new o.LimitExceededRpcError(e);case o.JsonRpcVersionUnsupportedError.code:throw new o.JsonRpcVersionUnsupportedError(e);case o.UserRejectedRequestError.code:throw new o.UserRejectedRequestError(e);case o.UnauthorizedProviderError.code:throw new o.UnauthorizedProviderError(e);case o.UnsupportedProviderMethodError.code:throw new o.UnsupportedProviderMethodError(e);case o.ProviderDisconnectedError.code:throw new o.ProviderDisconnectedError(e);case o.ChainDisconnectedError.code:throw new o.ChainDisconnectedError(e);case o.SwitchChainError.code:throw new o.SwitchChainError(e);case o.UnsupportedNonOptionalCapabilityError.code:throw new o.UnsupportedNonOptionalCapabilityError(e);case o.UnsupportedChainIdError.code:throw new o.UnsupportedChainIdError(e);case o.DuplicateIdError.code:throw new o.DuplicateIdError(e);case o.UnknownBundleIdError.code:throw new o.UnknownBundleIdError(e);case o.BundleTooLargeError.code:throw new o.BundleTooLargeError(e);case o.AtomicReadyWalletRejectedUpgradeError.code:throw new o.AtomicReadyWalletRejectedUpgradeError(e);case o.AtomicityNotSupportedError.code:throw new o.AtomicityNotSupportedError(e);case 5e3:throw new o.UserRejectedRequestError(e);default:if(e instanceof t.BaseError)throw e;throw new o.UnknownRpcError(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof r.HttpRequestError){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e,10)}return~~(1<<e)*h},retryCount:y,shouldRetry:({error:e})=>{var t;return"code"in(t=e)&&"number"==typeof t.code?-1===t.code||t.code===o.LimitExceededRpcError.code||t.code===o.InternalRpcError.code:!(t instanceof r.HttpRequestError)||!t.status||403===t.status||408===t.status||413===t.status||429===t.status||500===t.status||502===t.status||503===t.status||504===t.status||!1}}),{enabled:p,id:f})}}e.s(["buildRequest",()=>c])},727696,e=>{"use strict";var t=e.i(257622),r=e.i(253675);function o({key:e,methods:o,name:n,request:a,retryCount:s=3,retryDelay:i=150,timeout:c,type:l},u){let p=(0,r.uid)();return{config:{key:e,methods:o,name:n,request:a,retryCount:s,retryDelay:i,timeout:c,type:l},request:(0,t.buildRequest)(a,{methods:o,retryCount:s,retryDelay:i,uid:p}),value:u}}e.s(["createTransport",()=>o])},431327,896386,863757,e=>{"use strict";var t=e.i(252979);class r extends t.BaseError{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}e.s(["UrlRequiredError",()=>r],431327);var o=e.i(312412);function n(e,{errorInstance:t=Error("timed out"),timeout:r,signal:o}){return new Promise((n,a)=>{(async()=>{let s;try{let i=new AbortController;r>0&&(s=setTimeout(()=>{o?i.abort():a(t)},r)),n(await e({signal:i?.signal||null}))}catch(e){e?.name==="AbortError"&&a(t),a(e)}finally{clearTimeout(s)}})()})}e.s(["withTimeout",()=>n],896386);var a=e.i(817438);let s={current:0,take(){return this.current++},reset(){this.current=0}};function i(e,t={}){let{url:r,headers:c}=function(e){try{let t=new URL(e),r=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username="",t.password="",{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...r}}catch{return{url:e}}}(e);return{async request(e){let{body:i,fetchFn:l=t.fetchFn??fetch,onRequest:u=t.onRequest,onResponse:p=t.onResponse,timeout:d=t.timeout??1e4}=e,h={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:y,method:w,signal:m}=h;try{let e,t=await n(async({signal:e})=>{let t={...h,body:Array.isArray(i)?(0,a.stringify)(i.map(e=>({jsonrpc:"2.0",id:e.id??s.take(),...e}))):(0,a.stringify)({jsonrpc:"2.0",id:i.id??s.take(),...i}),headers:{...c,"Content-Type":"application/json",...y},method:w||"POST",signal:m||(d>0?e:null)},o=new Request(r,t),n=await u?.(o,t)??{...t,url:r};return await l(n.url??r,n)},{errorInstance:new o.TimeoutError({body:i,url:r}),timeout:d,signal:!0});if(p&&await p(t),t.headers.get("Content-Type")?.startsWith("application/json"))e=await t.json();else{e=await t.text();try{e=JSON.parse(e||"{}")}catch(r){if(t.ok)throw r;e={error:e}}}if(!t.ok)throw new o.HttpRequestError({body:i,details:(0,a.stringify)(e.error)||t.statusText,headers:t.headers,status:t.status,url:r});return e}catch(e){if(e instanceof o.HttpRequestError||e instanceof o.TimeoutError)throw e;throw new o.HttpRequestError({body:i,cause:e,url:r})}}}}e.s(["getHttpRpcClient",()=>i],863757)},127259,e=>{"use strict";var t=e.i(312412),r=e.i(431327),o=e.i(740957),n=e.i(863757),a=e.i(727696);function s(e,i={}){let{batch:c,fetchFn:l,fetchOptions:u,key:p="http",methods:d,name:h="HTTP JSON-RPC",onFetchRequest:y,onFetchResponse:w,retryDelay:m,raw:f}=i;return({chain:s,retryCount:b,timeout:g})=>{let{batchSize:v=1e3,wait:k=0}="object"==typeof c?c:{},x=i.retryCount??b,W=g??i.timeout??1e4,R=e||s?.rpcUrls.default.http[0];if(!R)throw new r.UrlRequiredError;let E=(0,n.getHttpRpcClient)(R,{fetchFn:l,fetchOptions:u,onRequest:y,onResponse:w,timeout:W});return(0,a.createTransport)({key:p,methods:d,name:h,async request({method:e,params:r}){let n={method:e,params:r},{schedule:a}=(0,o.createBatchScheduler)({id:R,wait:k,shouldSplitBatch:e=>e.length>v,fn:e=>E.request({body:e}),sort:(e,t)=>e.id-t.id}),s=async e=>c?a(e):[await E.request({body:e})],[{error:i,result:l}]=await s(n);if(f)return{error:i,result:l};if(i)throw new t.RpcRequestError({body:n,error:i,url:R});return l},retryCount:x,retryDelay:m,timeout:W,type:"http"},{fetchOptions:u,url:R})}}e.s(["http",()=>s])}]);
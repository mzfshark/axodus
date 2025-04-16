#!/bin/bash

# Definindo o diretório raiz do projeto
PROJECT_DIR="."

# Criando a estrutura de diretórios
mkdir -p $PROJECT_DIR/public/assets
mkdir -p $PROJECT_DIR/src/api
mkdir -p $PROJECT_DIR/src/assets
mkdir -p $PROJECT_DIR/src/components
mkdir -p $PROJECT_DIR/src/context
mkdir -p $PROJECT_DIR/src/hooks
mkdir -p $PROJECT_DIR/src/pages
mkdir -p $PROJECT_DIR/src/styles
mkdir -p $PROJECT_DIR/src/utils
mkdir -p $PROJECT_DIR/src/services

# Criando os arquivos principais
touch $PROJECT_DIR/public/index.html
touch $PROJECT_DIR/public/manifest.json

touch $PROJECT_DIR/src/api/walletConnect.js
touch $PROJECT_DIR/src/api/metamask.js
touch $PROJECT_DIR/src/api/investmentData.js
touch $PROJECT_DIR/src/api/tokenData.js

touch $PROJECT_DIR/src/components/Header.jsx
touch $PROJECT_DIR/src/components/Sidebar.jsx
touch $PROJECT_DIR/src/components/WalletConnection.jsx
touch $PROJECT_DIR/src/components/TokenBalance.jsx
touch $PROJECT_DIR/src/components/InvestmentCard.jsx
touch $PROJECT_DIR/src/components/TransactionHistory.jsx
touch $PROJECT_DIR/src/components/PerformanceGraph.jsx
touch $PROJECT_DIR/src/components/Footer.jsx

touch $PROJECT_DIR/src/context/WalletContext.js
touch $PROJECT_DIR/src/context/InvestmentContext.js
touch $PROJECT_DIR/src/context/TransactionContext.js

touch $PROJECT_DIR/src/hooks/useWallet.js
touch $PROJECT_DIR/src/hooks/useInvestmentData.js
touch $PROJECT_DIR/src/hooks/useTransactionHistory.js

touch $PROJECT_DIR/src/pages/Dashboard.jsx
touch $PROJECT_DIR/src/pages/Portfolio.jsx
touch $PROJECT_DIR/src/pages/TransactionHistoryPage.jsx
touch $PROJECT_DIR/src/pages/Settings.jsx

touch $PROJECT_DIR/src/styles/App.css
touch $PROJECT_DIR/src/styles/Header.css
touch $PROJECT_DIR/src/styles/Sidebar.css
touch $PROJECT_DIR/src/styles/Dashboard.css
touch $PROJECT_DIR/src/styles/PerformanceGraph.css

touch $PROJECT_DIR/src/utils/formatCurrency.js
touch $PROJECT_DIR/src/utils/formatDate.js
touch $PROJECT_DIR/src/utils/fetchData.js

touch $PROJECT_DIR/src/App.jsx
touch $PROJECT_DIR/src/index.js
touch $PROJECT_DIR/src/routes.js

# Criando o arquivo de variáveis de ambiente
touch $PROJECT_DIR/.env

# Criando o arquivo de ignorados do git
touch $PROJECT_DIR/.gitignore

# Criando o arquivo de dependências e informações do projeto
touch $PROJECT_DIR/package.json

# Criando o arquivo de lock do yarn
touch $PROJECT_DIR/yarn.lock

# Criando o arquivo de documentação do projeto
touch $PROJECT_DIR/README.md

# Criando o diretório para serviços externos
touch $PROJECT_DIR/src/services/blockchainService.js
touch $PROJECT_DIR/src/services/metamaskService.js
touch $PROJECT_DIR/src/services/walletConnectService.js

echo "Estrutura de diretórios e arquivos criada com sucesso!"


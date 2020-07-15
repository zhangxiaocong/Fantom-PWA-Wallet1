import NotFound from './views/NotFound/NotFound.vue';
import Home from './views/Home/Home.vue';
import Welcome from './views/Welcome/Welcome.vue';
import CreateAccount from './views/CreateAccount/CreateAccount.vue';
import RestoreAccount from './views/RestoreAccount/RestoreAccount.vue';
import Account from './views/Account/Account.vue';
import Dashboard from './views/Dashboard/Dashboard.vue';
import AccountSend from './views/AccountSend.vue';
import AccountReceive from './views/AccountReceive.vue';
import AccountStake from './views/AccountStake.vue';
import Playground from './views/Playground.vue';
import LedgerAccounts from './views/LedgerAccounts/LedgerAccounts.vue';
import AccountHistory from './views/AccountHistory.vue';
import Settings from './views/Settings/Settings.vue';
import Wallet from './views/Wallet/Wallet.vue';
import AccountVote from './views/AccountVote.vue';
import Defi from './views/Defi/Defi.vue';
import DefiHome from './views/DefiHome/DefiHome.vue';
import DefiFMint from './views/DefiFMint/DefiFMint.vue';
import DefiManageCollateral from './views/DefiManageCollateral/DefiManageCollateral.vue';
import DefiMintRepay from './views/DefiMintRepay/DefiMintRepay.vue';
import DefiManageCollateralConfirmation from './views/DefiManageCollateralConfirmation/DefiManageCollateralConfirmation.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        children: [
            {
                name: 'welcome',
                path: '',
                component: Welcome,
            },
            {
                name: 'create-account',
                path: '/account/create',
                component: CreateAccount,
            },
            {
                name: 'restore-account',
                path: '/account/restore',
                component: RestoreAccount,
            },
            {
                name: 'ledger-accounts',
                path: '/ledger-accounts',
                component: LedgerAccounts,
            },
        ],
    },
    {
        name: 'wallet',
        path: '/',
        component: Wallet,
        children: [
            {
                name: 'account',
                path: '/account/:address',
                component: Account,
                children: [
                    {
                        name: 'account-history',
                        path: '',
                        component: AccountHistory,
                        meta: { dontScrollToTop: true },
                    },
                    {
                        name: 'account-send',
                        path: 'send',
                        component: AccountSend,
                        meta: { dontScrollToTop: true },
                    },
                    {
                        name: 'account-receive',
                        path: 'receive',
                        component: AccountReceive,
                        meta: { dontScrollToTop: true },
                    },
                    {
                        name: 'account-stake',
                        path: 'stake',
                        component: AccountStake,
                        meta: { dontScrollToTop: true },
                    },
                    {
                        name: 'account-vote',
                        path: 'vote',
                        component: AccountVote,
                        meta: { dontScrollToTop: true },
                    },
                ],
            },
            {
                name: 'dashboard',
                path: '/dashboard',
                component: Dashboard,
            },
            {
                name: 'defi',
                path: '/defi/:address',
                component: Defi,
                children: [
                    {
                        name: 'defi-home',
                        path: '',
                        component: DefiHome,
                    },
                    {
                        name: 'defi-fmint',
                        path: 'fmint',
                        component: DefiFMint,
                    },
                    {
                        name: 'defi-manage-collateral',
                        path: 'fmint/manage-collateral',
                        component: DefiManageCollateral,
                    },
                    {
                        name: 'defi-manage-collateral-confirmation',
                        path: 'fmint/manage-collateral/confirmation',
                        component: DefiManageCollateralConfirmation,
                    },
                    {
                        name: 'defi-mint-repay',
                        path: 'fmint/manage-fusd',
                        component: DefiMintRepay,
                    },
                ],
            },
            {
                name: 'settings',
                path: '/settings',
                component: Settings,
            },
        ],
    },
    {
        name: 'playground',
        path: '/playground',
        component: Playground,
    },
    {
        name: 'not-found',
        path: '*',
        component: NotFound,
    },
];

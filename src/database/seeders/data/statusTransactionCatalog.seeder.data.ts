import appConstants from "../../../shared/constants"

const statusTransactionCatalogSeederData = [
    {
        name: appConstants.statusTransactionCatalog.success.name,
        abbreviation: appConstants.statusTransactionCatalog.success.abbreviation,
        description: appConstants.statusTransactionCatalog.success.description
    },
    {
        name: appConstants.statusTransactionCatalog.sentToRabbit.name,
        abbreviation: appConstants.statusTransactionCatalog.sentToRabbit.abbreviation,
        description: appConstants.statusTransactionCatalog.sentToRabbit.description
    },
    {
        name: appConstants.statusTransactionCatalog.failedToSendToRabbit.name,
        abbreviation: appConstants.statusTransactionCatalog.failedToSendToRabbit.abbreviation,
        description: appConstants.statusTransactionCatalog.failedToSendToRabbit.description
    },
    {
        name: appConstants.statusTransactionCatalog.billed.name,
        abbreviation: appConstants.statusTransactionCatalog.billed.abbreviation,
        description: appConstants.statusTransactionCatalog.billed.description
    },
    {
        name: appConstants.statusTransactionCatalog.paymentRejected.name,
        abbreviation: appConstants.statusTransactionCatalog.paymentRejected.abbreviation,
        description: appConstants.statusTransactionCatalog.paymentRejected.description
    },
    {
        name: appConstants.statusTransactionCatalog.pending.name,
        abbreviation: appConstants.statusTransactionCatalog.pending.abbreviation,
        description: appConstants.statusTransactionCatalog.pending.description
    },
    {
        name: appConstants.statusTransactionCatalog.processing.name,
        abbreviation: appConstants.statusTransactionCatalog.processing.abbreviation,
        description: appConstants.statusTransactionCatalog.processing.description
    },
    {
        name: appConstants.statusTransactionCatalog.productWithoutStock.name,
        abbreviation: appConstants.statusTransactionCatalog.productWithoutStock.abbreviation,
        description: appConstants.statusTransactionCatalog.productWithoutStock.description
    }
]

export default statusTransactionCatalogSeederData;

const appConstants = {
    statusTransactionCatalog: {
        success: {
            abbreviation: 'success',
            name: 'Success',
            description: ''
        },
        sentToRabbit: {
            abbreviation: 'sentToRabbit',
            name: 'Sent to RabbitMQ',
            description: 'The message was successfully sent to RabbitMQ.'
        },
        failedToSendToRabbit: {
            abbreviation: 'failedToSendToRabbit',
            name: 'Failed to Send to RabbitMQ',
            description: 'The message failed to be sent to RabbitMQ.'
        },
        billed: {
            abbreviation: 'billed',
            name: 'Billed',
            description: 'The transaction has been billed.'
        },
        paymentRejected: {
            abbreviation: 'paymentRejected',
            name: 'Payment Rejected',
            description: 'The payment was rejected.'
        },
        pending: {
            abbreviation: 'pending',
            name: 'Pending',
            description: 'The transaction is pending.'
        },
        processing: {
            abbreviation: 'processing',
            name: 'Processing',
            description: 'The transaction is being processed.'
        },
        productWithoutStock: {
            abbreviation: 'productWithoutStock',
            name: 'Product Without Stock',
            description: 'The product is out of stock.'
        }
    },
};

export default appConstants;

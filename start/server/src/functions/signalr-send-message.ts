import { app, InvocationContext } from "@azure/functions";

export async function signalr-send-message(documents: unknown[], context: InvocationContext): Promise<void> {
    context.log(`Cosmos DB function processed ${documents.length} documents`);
}

app.cosmosDB('signalr-send-message', {
    connectionStringSetting: '',
    databaseName: '',
    collectionName: '',
    createLeaseCollectionIfNotExists: true,
    handler: signalr-send-message
});

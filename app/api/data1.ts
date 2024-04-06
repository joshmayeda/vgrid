'use server';
import { MongoClient } from 'mongodb'

async function removeDuplicates() {
    const uri = 'mongodb+srv://mayeda:Helkobug1!@vgrid.w5vl4ba.mongodb.net/?retryWrites=true&w=majority&appName=VGrid';
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const db = client.db('ModernGames');
      const collection = db.collection('AllGames');
  
      // Define the fields that define uniqueness.
      const uniqueFields = ['name'];
  
      // Create an aggregation pipeline that groups documents by the unique fields and keeps only one document from each group.
      const pipeline = [
        { $group: { _id: uniqueFields.reduce((acc, field) => ({ ...acc, [field]: `$${field}` }), {}), doc: { $first: '$$ROOT' } } },
        { $replaceRoot: { newRoot: '$doc' } },
        { $out: 'AllGamesTemp' }
      ];
  
      // Run the aggregation pipeline.
      await collection.aggregate(pipeline).toArray();
  
      // Replace the original collection with the new collection.
      await db.dropCollection('AllGames');
      await db.renameCollection('AllGamesTemp', 'AllGames');
    } catch (error) {
      console.error(error);
    } finally {
      await client.close();
    }
  }

  export default removeDuplicates;
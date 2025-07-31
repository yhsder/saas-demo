import {db} from "@/db";

import 'dotenv/config';
import {eq} from 'drizzle-orm';
import {newsType} from './db/schema';

async function main() {
    const newType: typeof newsType.$inferInsert = {
        typeName: 'John',
        typeDict: 30
    };

    await db.insert(newsType).values(newType);
    console.log('New user created!')

    const users = await db.select().from(newsType);
    console.log('Getting all users from the database: ', users)
    /*
    const users: {
      id: number;
      name: string;
      age: number;
      email: string;
    }[]
    */

    await db
        .update(newsType)
        .set({
            typeName: "hello",
        })
        .where(eq(newsType.typeDict, newType.typeDict!));
    console.log('User info updated!')

    await db.delete(newsType).where(eq(newsType.typeDict, newType.typeDict!));
    console.log('User deleted!')
}

main();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



async function main() {

    // await prisma.userPreference.deleteMany();
    // await prisma.user.deleteMany();

    // const user = await prisma.user.create({
    //     data: {
    //         email: 'sunil@iamneo.ai',
    //         name: 'swizy',
    //         age: 23,
    //         preference: 'books',
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     include: {
    //         userPreference: true
    //     }
    // })

    // const user = await prisma.user.update({
    //     where: {
    //         email_name: {
    //             email: "sunil@iamneo.ai",
    //             name: "swizy"
    //         }
    //     },
    //     data: {
    //         name: 'sunil',
    //     }
    // })

    // console.log(user);

    // const users = await prisma.user.findUnique({
    //     where: {
    //         email_name: {
    //             email: 'sunil@iamneo.ai',
    //             name: 'sunil'
    //         }
    //     }
    // });

    // console.log(users)

    // const users = await prisma.user.findMany({
    //     distinct: ["age"],
    //     take: 2,
    //     skip: 1,
    //     orderBy: {
    //         age: "asc"
    //     }
    // });
    // console.log(users)


    await prisma.post.create({
        data: {
            title: "post me 1",
            rating: 4,
            authorId: "5a4ddffd-295f-418c-8532-a07b11288757"
        }
    });

    await prisma.post.update({
        where: {
           id: "bc706b54-93dd-4b60-98f1-5ba44c0bc403"
        },
        data: {
            title: 'sunil',
        }
    });


    const posts = await prisma.post.findFirst({
        where: {
            title: 'sunil'
        }
    });

    console.log(posts);
}

main()
    .catch(e => {
        console.log("Error ", e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

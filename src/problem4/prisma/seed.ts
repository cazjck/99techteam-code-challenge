import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const khanh = await prisma.user.upsert({
        where: { email: 'khanh.pham@khanhpham.org' },
        update: {},
        create: {
            email: 'khanh.pham@khanhpham.org',
            name: 'Khanh',
            posts: {
                create: {
                    title: 'Check out Prisma with Next.js',
                    content: 'https://www.prisma.io/nextjs',
                    published: true,
                },
            },
        },
    })
    const khanh1 = await prisma.user.upsert({
        where: { email: 'khanh.pham1@khanhpham.org' },
        update: {},
        create: {
            email: 'khanh.pham1@khanhpham.org',
            name: 'Khanh 1',
            posts: {
                create: [
                    {
                        title: 'Follow Prisma on Twitter',
                        content: 'https://twitter.com/prisma',
                        published: true,
                    },
                    {
                        title: 'Follow Nexus on Twitter',
                        content: 'https://twitter.com/nexusgql',
                        published: true,
                    },
                ],
            },
        },
    })

    const khanh2 = await prisma.user.upsert({
        where: { email: 'khanh.pham2@khanhpham.org' },
        update: {},
        create: {
            email: 'khanh.pham2@khanhpham.org',
            name: 'Khanh 2',
            posts: {
                create: [
                    {
                        title: 'Follow Prisma on Twitter',
                        content: 'https://twitter.com/prisma',
                        published: true,
                    },
                ],
            },
        },
    })
    console.log({ khanh, khanh1, khanh2 })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })
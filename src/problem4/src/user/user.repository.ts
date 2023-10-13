import { Prisma, PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

const findOne = async (id: string): Promise<User | null> => {
    return prisma.user.findUnique({ where: { id: id } })
}

const findAll = async (conditions: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
}): Promise<User[]> => {
    return prisma.user.findMany({
        ...conditions
    })
};

const create = async (createUser: Prisma.UserCreateInput): Promise<User> => {
    return prisma.user.create({
        data: createUser
    })
};

const update = async (id: string, updateUser: Prisma.UserUpdateInput): Promise<User> => {
    return prisma.user.update({
        data: updateUser,
        where: {
            id: id
        }
    })
};

const deleteOne = async (id: string): Promise<User> => {
    return prisma.user.delete({
        where: {
            id: id
        }
    })
};

export default {
    findAll,
    create,
    findOne,
    update,
    deleteOne
};

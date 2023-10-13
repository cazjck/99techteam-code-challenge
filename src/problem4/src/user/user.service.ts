import { Prisma, User } from "@prisma/client";
import userRepository from "./user.repository";

const findOneUser = (id: string): Promise<User | null> => {
    return userRepository.findOne(id);
}

const getUsers = async (conditions: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
}): Promise<User[]> => {
    return userRepository.findAll(conditions)
};

const createUser = async (createUser: Prisma.UserCreateInput): Promise<User> => {
    return userRepository.create(createUser)
};

const updateUser = async (id: string, updateUser: Prisma.UserUpdateInput): Promise<User> => {
    return userRepository.update(id, updateUser)
};

const deleteOne = async (id: string): Promise<User> => {
    return userRepository.deleteOne(id)
};

export default {
    findOneUser,
    getUsers,
    createUser,
    updateUser,
    deleteOne
};

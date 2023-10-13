import userService from "../user.service";
import userRepository from "../user.repository";

jest.mock("../user.repository");

describe("userService", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("findOneUser", () => {
        it("should return null when user is not found", async () => {
            const id = "invalidUserId";
            (userRepository.findOne as jest.Mock).mockResolvedValue(null);
            const result = await userService.findOneUser(id);
            expect(result).toBeNull();
            expect(userRepository.findOne).toHaveBeenCalledWith(id);
        });

        it("should return the user when user is found", async () => {
            const id = "validUserId";
            const user = { id, name: "John Doe" };
            (userRepository.findOne as jest.Mock).mockResolvedValue(user);
            const result = await userService.findOneUser(id);
            expect(result).toEqual(user);
            expect(userRepository.findOne).toHaveBeenCalledWith(id);
        });
    });

});

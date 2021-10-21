import prismaClient from "../prisma";

class ProfileUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        messages: {
          take: 3,
          orderBy: {
            created_at: "desc",
          },
        },
      },
    });

    return user;
  }
}

export { ProfileUserService };

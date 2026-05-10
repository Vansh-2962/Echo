import { prisma } from "../lib/prisma.js";
export async function getPlan(req, res) {
    try {
        const planId = req.user?.planId;
        const plan = await prisma.plan.findFirst({
            where: {
                id: planId,
            },
        });
        return res.status(200).json(plan);
    }
    catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" });
    }
}
//# sourceMappingURL=plan.controller.js.map
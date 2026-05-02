import { auth } from "../lib/auth.js";
export async function isAuth(req, res, next) {
    try {
        const session = await auth.api.getSession({
            headers: new Headers(req.headers),
        });
        if (!session) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        req.user = session.user;
        next();
    }
    catch (error) {
        return res.status(500).json({ msg: "Error, Failed to check auth" });
    }
}
//# sourceMappingURL=auth.js.map
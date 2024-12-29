import {TokenDecode} from "../utility/TokenHelper.js";

export default (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({ status: "fail", message: "Token is required" });
    }

    // Instantiate TokenDecode class
    const tokenDecoder = new TokenDecode(token);
    const decoded = tokenDecoder.decode();

    if (!decoded) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    req.user = {
        email: decoded.email,
        user_id: decoded.user_id,
    };

    next();
};

import jwt from "jsonwebtoken";
import UserToken from "../model/userToken.js";

const generateTokens = async (user) => {
	try {
		const payload = { userId: user._id,username: user.username, roles: user.roles };
		const accessToken = jwt.sign(
			payload,
			process.env.JWT_TOKEN_PRIVATE_KEY,
			{ expiresIn: "1d" }
		);
		const refreshToken = jwt.sign(
			payload,
			process.env.JWT_TOKEN_PRIVATE_KEY,
			{ expiresIn: "30d" }
		);

		const userToken = await UserToken.findOne({ username: user.username });
		if (userToken) {
		
			await userToken.remove();
			await new UserToken({ userId: user._id, token: refreshToken }).save();
			return Promise.resolve({ accessToken, refreshToken })
		}
else{
	await new UserToken({ userId: user._id, token: refreshToken }).save();
		return Promise.resolve({ accessToken, refreshToken });
	}
	} catch (err) {
		return Promise.reject(err);
	}
};

export default generateTokens;
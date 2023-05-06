import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const signUpBodyValidation = (body) => {
	const schema = Joi.object({
		username: Joi.string().required().label("User Name"),
		email: Joi.string().email().required().label("Email"),
		img: Joi.string().label("image"),
		password: passwordComplexity().required().label("Password"),
		phoneNumber:Joi.string().required().label('phoneNumber'),
		Cpassword: passwordComplexity().required().label("Confirm Password"),

	});
	return schema.validate(body);
};

const logInBodyValidation = (body) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().trim().required().label("Password"),
	});
	return schema.validate(body);
};

const refreshTokenBodyValidation = (body) => {
	const schema = Joi.object({
		refreshToken: Joi.string().required().label("Refresh Token"),
	});
	return schema.validate(body);
};

export {
	signUpBodyValidation,
	logInBodyValidation,
	refreshTokenBodyValidation,
};
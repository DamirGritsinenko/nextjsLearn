"use client";

import Input from "../UI/Input";
import Link from "../UI/Link";
import Button from "../UI/Button";

const SignupForm = () => {
	return (
		<form className="bg-white border">
			<Input
				type="password"
				className="text-black"
				label="label"
				placeholder="palcveholder"
			/>
			<Button variant="outline">Button</Button>
			<Link href={"/ewgew"}>Link</Link>
		</form>
	);
};

export default SignupForm;

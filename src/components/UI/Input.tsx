import { useState, type ChangeEventHandler } from "react";
import Button from "./Button";
import cn from "classnames";
import { BiHide, BiShow } from "react-icons/bi";

type InputType = "text" | "password" | "email";

interface IInputProps {
	className?: string;
	value?: string;
	defaultValue?: string;
	type?: InputType;
	placeholder?: string;
	onChange?: ChangeEventHandler;
	id?: string;
	name?: string;
	label?: string;
}

const Input = ({ className, label, id, type, ...props }: IInputProps) => {
	const enableHiddenValue = type === "password";
	const [isValueHidden, setIsValueHidden] = useState(enableHiddenValue);
	const currentInputType = !isValueHidden && enableHiddenValue ? "text" : type;

	const HideButton = enableHiddenValue ? (
		<HideValueButton
			isValueHidden={isValueHidden}
			toggleVisibility={() => setIsValueHidden((prev) => !prev)}
		/>
	) : null;

	return (
		<div className={cn("relative flex flex-col gap-2", className)}>
			{HideButton}
			<label className="text-base text-gray-500" htmlFor={id}>{label}</label>
			<input
				id={id}
				className="w-full h-full rounded-md py-2 px-3 border-gray-400 focus:outline-none focus:border-gray-600 border"
				type={currentInputType}
				{...props}
			/>
		</div>
	);
};

interface IHideValueButton {
	isValueHidden: boolean;
	toggleVisibility: () => void;
}

const HideValueButton = ({
	isValueHidden,
	toggleVisibility,
}: IHideValueButton) => {
	return (
		<Button
			className="absolute top-[-15px] right-0"
			onClick={toggleVisibility}
		>
			{isValueHidden ? (
				<>
					<BiShow /> Show
				</>
			) : (
				<>
					<BiHide /> Hide
				</>
			)}
		</Button>
	);
};

export default Input;

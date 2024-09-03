import type { MouseEventHandler, PropsWithChildren } from "react";
import cn from "classnames";
import { cva } from "class-variance-authority";

type ButtonType = "button" | "submit" | "reset";

type ButtonVariantsType = "default" | "outline";

interface IButtonProps {
	className?: string;
	type?: ButtonType;
	onClick?: MouseEventHandler;
	variant?: ButtonVariantsType;
}

const buttonVariants = cva(
	"flex items-center justify-center bg-transparent text-sm text-black transition-all duration-150 rounded-md gap-1",
	{
		variants: {
			variant: {
				default: "hover:opacity-75",
				outline: "border px-3 py-2 hover:bg-gray-100",
			},
		},
	},
);

const Button = ({
	className,
	type = "button",
	children,
	variant = "default",
	...props
}: PropsWithChildren & IButtonProps) => {
	return (
		<button
			type={type}
			{...props}
			className={cn(buttonVariants({ variant }), className)}
		>
			{children}
		</button>
	);
};

export default Button;

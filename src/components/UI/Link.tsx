import type { PropsWithChildren } from "react";
import NextLink, { type LinkProps } from "next/link";
import cn from "classnames";

interface ILinkProps extends LinkProps {
	className?: string;
}

const Link = ({
	className,
	children,
	...props
}: PropsWithChildren & ILinkProps) => {
	return (
		<NextLink className={cn("text-black hover:underline hover:underline-offset-2 transition-all duration-150", className)} {...props}>
			{children}
		</NextLink>
	);
};

export default Link;

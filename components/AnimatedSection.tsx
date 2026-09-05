'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
	children: React.ReactNode;
	className?: string;
}

export default function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
	const prefersReducedMotion = useReducedMotion();

	if (prefersReducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div className={className} {...props}>
			{children}
		</motion.div>
	);
}

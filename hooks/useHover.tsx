import React from "react";

const useHover = () => {
	const [isHovering, setIsHovering] = React.useState(false);
	const handleMouseOver = React.useCallback(() => setIsHovering(true), []);
	const handleMouseOut = React.useCallback(() => setIsHovering(false), []);
	const nodeRef = React.useRef();
	const callbackRef = React.useCallback(
		(node) => {
			if (nodeRef.current) {
				nodeRef.current.removeEventListener(
					"mouseover",
					handleMouseOver
				);
				nodeRef.current.removeEventListener("mouseout", handleMouseOut);
			}
			nodeRef.current = node;
			if (nodeRef.current) {
				nodeRef.current.addEventListener("mouseover", handleMouseOver);
				nodeRef.current.addEventListener("mouseout", handleMouseOut);
			}
		},
		[handleMouseOver, handleMouseOut]
	);
	return [callbackRef, isHovering];
};

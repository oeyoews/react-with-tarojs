import React, { useState } from "react";

const Count = () => {
	const [count, setCount] = useState(0);
	return (
		<button
			onClick={() => {
				setCount(count + 1);
			}}
			className="m-2 rounded border-none bg-red-200 p-2 duration-200 hover:scale-105 hover:bg-red-300"
		>
			Click 🍨 {count}
		</button>
	);
};

export default Count;

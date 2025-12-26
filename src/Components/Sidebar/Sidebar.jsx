import React, { useState } from "react";
import sidebarItem from "../../Data/Sidebar";

const Sidebar = () => {
	const [open, setOpen] = useState({
		equipment: false,
		accessories: false,
	});

	const toggle = (key) => {
		setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	return (
		<div className="mt-10 ml-10 w-64">
			{/* Button 1 */}
			<button
				className="uppercase font-bold"
				onClick={() => toggle("equipment")}>
				all equipment
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out
        ${open.equipment ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
				{sidebarItem.map((item, idx) => (
					<div key={idx} className="py-1">
						{item.name}
					</div>
				))}
			</div>

			{/* Button 2 */}
			<button
				className="uppercase font-bold mt-4"
				onClick={() => toggle("accessories")}>
				accessories
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out
        ${
					open.accessories ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
				}`}>
				<div className="py-1">Item A</div>
				<div className="py-1">Item B</div>
			</div>
		</div>
	);
};

export default Sidebar;

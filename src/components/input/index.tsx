import { FunctionComponent } from "react";
import "./input.css";

interface InputProps {
	label: string;
	type: "text" | "number";
	value: any;
	setValue: any;
}

export const Input: FunctionComponent<InputProps> = (props) => {
	const { label, type, value, setValue } = props;
	return (
		<div className="input">
			<label className="input-label">{label}</label>
			<input required type={type} value={value} onChange={setValue} />
		</div>
	);
};

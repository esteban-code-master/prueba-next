import { FunctionComponent, ReactNode } from "react";
import "./modal.css";

interface ModalProps {
	isOpen: boolean;
	closeOpen: () => void;
	children: ReactNode;
}

export const Modal: FunctionComponent<ModalProps> = (props) => {
	const { isOpen, children, closeOpen } = props;

	return (
		<>
			{isOpen && (
				<div className="modal">
					<div className="modal-content">
						<span className="modal-close" onClick={closeOpen}>
							X
						</span>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

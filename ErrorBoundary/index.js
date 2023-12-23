import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Button from "../Inputs/Button";

function ErrorBoundary({ children }) {
	const [hasError, setHasError] = useState(false);
	const [error, setError] = useState(null);
	const [errorInfo, setErrorInfo] = useState(null);

	useEffect(() => {
		const errorHandler = (error, errorInfo) => {
			setHasError(true);
			setError(error);
			setErrorInfo(errorInfo);
		};
		// Attach the error handler to the error event
		window.addEventListener("error", errorHandler);
		return () => {
			window.removeEventListener("error", errorHandler);
		};
	}, []);

	useEffect(() => {
		if (hasError) {
			// log the error here or send it to an error tracking service
			console.error(error, errorInfo);
		}
	}, [hasError, error, errorInfo]);

	const resetError = () => {
		window.location.reload();
	};

	if (hasError) {
		return (
			<div className="justify-center w-full h-full align-center">
				<div className="w-full max-w-md text-center">
					<Logo className="justify-center" error />
					<div className="mt-6 text-5xl font-bold">Something went wrong</div>
					<div className="mt-3 text-sm">It looks like something is broken, we are working on it. If it's critical for you please contact support at info@projectpay.in</div>
					<Button onClick={resetError} className="m-auto mt-8" variant="outlined">
						Reload App
					</Button>
				</div>
			</div>
		);
	}

	return children; // Render children components normally
}

export default ErrorBoundary;

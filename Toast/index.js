import { toast } from "react-hot-toast";
import ErrorSound from "./error.mp3";

const errorSound = new Audio(ErrorSound);

const toasts = {
	success: (msg) => {
		toast.success(msg);
	},
	error: (msg) => {
		toast.error(msg);
		errorSound.play();
	},
	handleError: (err) => {
		toast.error(err.response?.data.error);
		if (err.response?.data.errors) {
			err.response.data.errors.forEach((e) => {
				toast.error(e);
			});
		}
	},
	promise: (pendingPromise, msg, onSuccess, onError) => {
		toast.promise(pendingPromise, {
			loading: msg,
		});
	},
	loading: (msg) => {
		const toastId = toast.loading(msg);
		return () => toast.dismiss(toastId);
	},
};

export default toasts;

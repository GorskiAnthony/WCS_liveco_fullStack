import { toast } from "react-toastify";

const notifySuccessRegister = () => {
  toast.success("Successfully registered", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
const notifyErrorRegister = (data) => {
  toast.error(`Error registering: ${data}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export { notifySuccessRegister, notifyErrorRegister };

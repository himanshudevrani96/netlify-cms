import { toast, ToastOptions, Id, ToastItem } from "react-toastify";
let lastToastId: Id | null = null; // Adjust the type to Id
export function showSuccess(message: string) {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 2000,
  };

  if (lastToastId) {
    toast.update(lastToastId, {
      render: message,
      type: toast.TYPE.SUCCESS,
      ...toastOptions,
    });
  } else {
    lastToastId = toast.success(message, {
      ...toastOptions,
    });
  }
}

export function showError(error: any) {
  const errorMessage = error?.message
    ? error?.message
    : "Oops! something went wrong";
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 2000,
  };
  if (lastToastId) {
    toast.update(lastToastId, {
      render: errorMessage,
      type: toast.TYPE.ERROR,
      ...toastOptions,
    });
  } else {
    lastToastId = toast.error(errorMessage, {
      type: toast.TYPE.ERROR,
      ...toastOptions,
    });
  }
}

toast.onChange((payload: ToastItem) => {
  switch (payload.status) {
    case "added":
      break;
    case "updated":
      break;
    case "removed":
      lastToastId = null;
      break;
  }
});

export const uploadImage = async (url: string, file: File) => {
  try {
    const res = await fetch(url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file?.type,
      },
    });
    return res;
  } catch (err) {
    console.error(err);
  }
};

export function bytesToMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(2); // Keep two decimal places
}

export const isLoggedIn = () => {
  let data = localStorage.getItem("USER_INFO");
  if (data) {
    const token = JSON.parse(data).accessToken;
    if (token) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

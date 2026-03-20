import { Flip, toast } from "react-toastify";

export const confirmDelete = (containerId) =>
  new Promise((resolve) => {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-7 px-3 pb-1 w-full">
          <p className="font-semibold text-base ">
            Confirm delete?
          </p>

          <div className="flex justify-end gap-3">
            <button
              className="btn btn-sm"
              onClick={() => {
                resolve(false);
                closeToast();
              }}
            >
              Cancel
            </button>

            <button
              className="btn btn-sm btn-error"
              onClick={() => {
                resolve(true);
                closeToast();
              }}
            >
              Yes, delete
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        position: 'top-center',
        transition: Flip,
        theme: 'dark',
        className: 'relative top-80',
        containerId
      }
    );
  });
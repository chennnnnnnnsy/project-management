import { useState, useCallback } from "react";

function useModal() {
  const [show, setShow] = useState(false);
  const closeModal = useCallback(() => setShow(false), []);
  const showModal = useCallback(() => setShow(true), []);

  return { show, closeModal, showModal };
}

export default useModal;

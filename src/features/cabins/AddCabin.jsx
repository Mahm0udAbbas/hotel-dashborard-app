import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens={"cabin-form"}>
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name={"cabin-form"}>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
//         Add new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onModalClose={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

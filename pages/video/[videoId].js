import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

Modal.setAppElement("#__next");

export default function Video() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        onRequestClose={() => {
          router.back();
        }}
        contentLabel="Watch the video"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div>Modal Body</div>
      </Modal>
    </div>
  );
}

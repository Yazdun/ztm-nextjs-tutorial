import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

Modal.setAppElement("#__next");

export default function Video() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      Video Page {router.query.videoId}
      <Modal
        isOpen={true}
        onRequestClose={() => {
          router.back();
        }}
        contentLabel="Watch the video"
        // overlayClassName={styles.overlay}
      >
        <div>Modal Body</div>
      </Modal>
    </div>
  );
}

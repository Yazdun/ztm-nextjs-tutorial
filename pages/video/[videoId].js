import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import cls from "classnames";

Modal.setAppElement("#__next");

export default function Video() {
  const router = useRouter();

  const video = {
    title: "Hi cute dog",
    publishTime: "1990-01-01",
    description: "a big red dog that is super cute,can he get any bigger?",
    channelTitle: "Pata Pic",
    viewcount: 10000,
  };

  const { title, publishTime, description, channelTitle, viewcount } = video;

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
        <iframe
          id="player"
          className={styles.videoPlayer}
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${router.query.videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=0`}
          frameBorder="0"
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={styles.subText}>
                <span className={styles.subTitleText}>Cast :</span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={styles.subText}>
                <span className={styles.subTitleText}>Cast :</span>
                <span className={styles.channelTitle}>{viewcount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

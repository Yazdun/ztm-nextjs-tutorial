import { useRouter } from "next/router";

export default function Video() {
  const router = useRouter();
  console.log(router);
  return <div>Video Page {router.query.videoId}</div>;
}
